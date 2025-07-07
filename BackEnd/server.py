from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import parse_qs, urlparse
from bson import ObjectId
from db import get_collections
from datetime import datetime


def serialize(doc):
    """Convert MongoDB document to JSON serializable format"""
    if doc is None:
        return None
    doc["_id"] = str(doc["_id"])
    # Convert datetime objects to ISO format
    for key, value in doc.items():
        if isinstance(value, datetime):
            doc[key] = value.isoformat()
    return doc


class ErickCafeHandler(BaseHTTPRequestHandler):
    def _set_headers(self, code=200):
        self.send_response(code)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods",
                         "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self._set_headers()

    def _parse_json_body(self):
        """Parse JSON body from request"""
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            if content_length == 0:
                return {}
            post_data = self.rfile.read(content_length)
            return json.loads(post_data.decode('utf-8'))
        except (ValueError, json.JSONDecodeError):
            return None

    def _send_response(self, data, code=200):
        """Send JSON response"""
        self._set_headers(code)
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

    def _send_error(self, message, code=400):
        """Send error response"""
        self._send_response({"error": message}, code)

    def do_GET(self):
        collections = get_collections()
        path_parts = self.path.strip('/').split('/')

        try:
            # USERS Routes
            if path_parts[0] == "users":
                if len(path_parts) == 1:
                    # GET /users - Get all users
                    users = list(collections['users'].find())
                    self._send_response([serialize(user) for user in users])
                elif len(path_parts) == 2:
                    # GET /users/{id} - Get single user
                    user_id = path_parts[1]
                    user = collections['users'].find_one(
                        {"_id": ObjectId(user_id)})
                    if user:
                        self._send_response(serialize(user))
                    else:
                        self._send_error("User not found", 404)

            # PRODUCTS Routes
            elif path_parts[0] == "products":
                if len(path_parts) == 1:
                    # GET /products - Get all products
                    products = list(collections['products'].find())
                    self._send_response([serialize(product)
                                        for product in products])
                elif len(path_parts) == 2:
                    # GET /products/{id} - Get single product
                    product_id = path_parts[1]
                    product = collections['products'].find_one(
                        {"_id": ObjectId(product_id)})
                    if product:
                        self._send_response(serialize(product))
                    else:
                        self._send_error("Product not found", 404)

            # ADMINS Routes
            elif path_parts[0] == "admins":
                if len(path_parts) == 1:
                    # GET /admins - Get all admins
                    admins = list(collections['admins'].find())
                    self._send_response([serialize(admin) for admin in admins])
                elif len(path_parts) == 2:
                    # GET /admins/{id} - Get single admin
                    admin_id = path_parts[1]
                    admin = collections['admins'].find_one(
                        {"_id": ObjectId(admin_id)})
                    if admin:
                        self._send_response(serialize(admin))
                    else:
                        self._send_error("Admin not found", 404)

            # Health Check
            elif path_parts[0] == "health":
                self._send_response(
                    {"status": "OK", "message": "ErickCafe API is running"})

            else:
                self._send_error("Endpoint not found", 404)

        except Exception as e:
            self._send_error(f"Server error: {str(e)}", 500)

    def do_POST(self):
        collections = get_collections()
        path_parts = self.path.strip('/').split('/')

        try:
            data = self._parse_json_body()
            if data is None:
                self._send_error("Invalid JSON", 400)
                return

            # Add timestamp
            data['created_at'] = datetime.now()

            # USERS Routes
            if path_parts[0] == "users":
                # POST /users - Create new user
                if not data.get('name') or not data.get('email') or not data.get('password'):
                    self._send_error(
                        "Name, email and password are required", 400)
                    return

                # Check if email already exists
                existing_user = collections['users'].find_one(
                    {"email": data['email']})
                if existing_user:
                    self._send_error("Email already exists", 409)
                    return

                result = collections['users'].insert_one(data)
                self._send_response({"inserted_id": str(
                    result.inserted_id), "message": "User created successfully"}, 201)

            # PRODUCTS Routes
            elif path_parts[0] == "products":
                # POST /products - Create new product
                if not data.get('name') or not data.get('price'):
                    self._send_error("Name and price are required", 400)
                    return

                result = collections['products'].insert_one(data)
                self._send_response({"inserted_id": str(
                    result.inserted_id), "message": "Product created successfully"}, 201)

            # ADMINS Routes
            elif path_parts[0] == "admins":
                # POST /admins - Create new admin
                if not data.get('username') or not data.get('email'):
                    self._send_error("Username and email are required", 400)
                    return

                # Check if username or email already exists
                existing_admin = collections['admins'].find_one({
                    "$or": [{"username": data['username']}, {"email": data['email']}]
                })
                if existing_admin:
                    self._send_error("Username or email already exists", 409)
                    return

                result = collections['admins'].insert_one(data)
                self._send_response({"inserted_id": str(
                    result.inserted_id), "message": "Admin created successfully"}, 201)

            else:
                self._send_error("Endpoint not found", 404)

        except Exception as e:
            self._send_error(f"Server error: {str(e)}", 500)

    def do_PUT(self):
        collections = get_collections()
        path_parts = self.path.strip('/').split('/')

        try:
            if len(path_parts) < 2:
                self._send_error("ID required for PUT request", 400)
                return

            data = self._parse_json_body()
            if data is None:
                self._send_error("Invalid JSON", 400)
                return

            # Add update timestamp
            data['updated_at'] = datetime.now()

            # USERS Routes
            if path_parts[0] == "users":
                # PUT /users/{id} - Update user
                user_id = path_parts[1]
                result = collections['users'].update_one(
                    {"_id": ObjectId(user_id)},
                    {"$set": data}
                )
                if result.matched_count > 0:
                    self._send_response(
                        {"message": "User updated successfully", "matched": result.matched_count})
                else:
                    self._send_error("User not found", 404)

            # PRODUCTS Routes
            elif path_parts[0] == "products":
                # PUT /products/{id} - Update product
                product_id = path_parts[1]
                result = collections['products'].update_one(
                    {"_id": ObjectId(product_id)},
                    {"$set": data}
                )
                if result.matched_count > 0:
                    self._send_response(
                        {"message": "Product updated successfully", "matched": result.matched_count})
                else:
                    self._send_error("Product not found", 404)

            # ADMINS Routes
            elif path_parts[0] == "admins":
                # PUT /admins/{id} - Update admin
                admin_id = path_parts[1]
                result = collections['admins'].update_one(
                    {"_id": ObjectId(admin_id)},
                    {"$set": data}
                )
                if result.matched_count > 0:
                    self._send_response(
                        {"message": "Admin updated successfully", "matched": result.matched_count})
                else:
                    self._send_error("Admin not found", 404)

            else:
                self._send_error("Endpoint not found", 404)

        except Exception as e:
            self._send_error(f"Server error: {str(e)}", 500)

    def do_DELETE(self):
        collections = get_collections()
        path_parts = self.path.strip('/').split('/')

        try:
            if len(path_parts) < 2:
                self._send_error("ID required for DELETE request", 400)
                return

            # USERS Routes
            if path_parts[0] == "users":
                # DELETE /users/{id} - Delete user
                user_id = path_parts[1]
                result = collections['users'].delete_one(
                    {"_id": ObjectId(user_id)})
                if result.deleted_count > 0:
                    self._send_response(
                        {"message": "User deleted successfully", "deleted": result.deleted_count})
                else:
                    self._send_error("User not found", 404)

            # PRODUCTS Routes
            elif path_parts[0] == "products":
                # DELETE /products/{id} - Delete product
                product_id = path_parts[1]
                result = collections['products'].delete_one(
                    {"_id": ObjectId(product_id)})
                if result.deleted_count > 0:
                    self._send_response(
                        {"message": "Product deleted successfully", "deleted": result.deleted_count})
                else:
                    self._send_error("Product not found", 404)

            # ADMINS Routes
            elif path_parts[0] == "admins":
                # DELETE /admins/{id} - Delete admin
                admin_id = path_parts[1]
                result = collections['admins'].delete_one(
                    {"_id": ObjectId(admin_id)})
                if result.deleted_count > 0:
                    self._send_response(
                        {"message": "Admin deleted successfully", "deleted": result.deleted_count})
                else:
                    self._send_error("Admin not found", 404)

            else:
                self._send_error("Endpoint not found", 404)

        except Exception as e:
            self._send_error(f"Server error: {str(e)}", 500)


def run():
    server_address = ("", 5173)
    httpd = HTTPServer(server_address, ErickCafeHandler)
    print("🚀 ErickCafe API Server Running At http://localhost:5173")
    print("📋 Available endpoints:")
    print("   Users: GET/POST/PUT/DELETE /users")
    print("   Products: GET/POST/PUT/DELETE /products")
    print("   Admins: GET/POST/PUT/DELETE /admins")
    print("   Health Check: GET /health")
    httpd.serve_forever()


if __name__ == "__main__":
    run()
