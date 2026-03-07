#!/usr/bin/env python3
"""
Script that provides stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient


def log_stats():
    """
    Displays statistics about Nginx logs
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Get total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")
    print()

    # Get methods statistics
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"  method {method}: {count}")

    # Get status check statistics (GET method with path=/status)
    status_count = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_count} status check")


if __name__ == "__main__":
    log_stats()
