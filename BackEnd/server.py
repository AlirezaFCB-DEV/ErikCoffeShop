from http.server import BaseHTTPRequestHandler , HTTPServer
import json
from urllib.parse import parse_qs, urlparse
from bson import ObjectId
from db import collections

def serialize (doc) :
    doc["_id"] = str(doc["_id"])
    return doc

class SimpleHandler(BaseHTTPRequestHandler):
    def _set_headers(self , code=200):
        self.send_response(code)
        self.send_header("Content-type" , "application/json")
        self.end_headers()
    
    def do_GET(self) :
        if self.path == "/users" :
            users = list(collections.find())
            self._set_headers()
            self.wfile.write(json.dumps([serialize(user) for user in users]).encode())
        else :
            self._set_headers(404)
            self.wfile.write(json.dumps({"error" : "Not Found"}).encode())
    
    def do_POST(self):
        if self.path == "/users":
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)
            
            result = collections.insert_one(data)
            self._set_headers(201)
            self.wfile.write(json.dumps({"inserted_id" : str(result.inserted_id)}).encode())
            
    def do_PUT(self) :
        if self.path.startswith("/users/"):
            user_id = self.path.split("/")[-1]
            content_length = int(self.headers("Content-Length"))
            put_data = self.rfile.read(content_length)
            data = json.loads(put_data)
            
            result = collections.update_one({"_id" : ObjectId(user_id)},{"$set" : data})
            self._set_headers()
            self.wfile.write(json.dumps({"matched" : result.matched_count}).encode())
            
    def do_DELETE(self) :
        if self.path.startswith("/users/"):
            user_id = self.path.split("/")[-1]
            result = collections.delete_one({"_id" : ObjectId(user_id)})
            self._set_headers()
            self.wfile.write(json.dumps({"deleted" : result.deleted_count}).encode())
            
            
def run ():
    server_address = ("" , 5173)
    httpd = HTTPServer(server_address , SimpleHandler)
    print("Server Running At http://localhost:5173")
    httpd.serve_forever()

        
if __name__ == "__main__":
    run()