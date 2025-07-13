import pymongo
from pymongo import MongoClient
from bson import ObjectId
import os

# MongoDB Configuration
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DATABASE_NAME = os.getenv("DATABASE_NAME", "erickcafe")

# Global client instance
client = None
database = None


def get_database():
    """Get database instance"""
    global client, database
    if client is None:
        try:
            client = MongoClient(MONGO_URI)
            database = client[DATABASE_NAME]
            print(f"✅ Connected to MongoDB: {DATABASE_NAME}")
        except Exception as e:
            print(f"❌ MongoDB connection failed: {e}")
            raise
    return database


def get_collections():
    """Get all collections"""
    db = get_database()
    return {
        'users': db.users,
        'products': db.products,
        'admins': db.admins
    }


def init_database():
    """Initialize database with indexes only"""
    db = get_database()

    try:
        # Create indexes for better performance
        db.users.create_index("email", unique=True)
        db.admins.create_index("username", unique=True)
        db.admins.create_index("email", unique=True)
        db.products.create_index("name")

        print("✅ Database indexes created")
        print("✅ Database collections ready (empty)")

    except Exception as e:
        print(f"❌ Database initialization failed: {e}")


def close_connection():
    """Close database connection"""
    global client
    if client:
        client.close()
        print("✅ Database connection closed")


# Initialize when imported
if __name__ == "__main__":
    init_database()
    print("🎯 Database ready!")
else:
    init_database()
