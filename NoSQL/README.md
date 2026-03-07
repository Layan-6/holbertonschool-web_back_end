# NoSQL

This project covers NoSQL databases, specifically MongoDB.

## Learning Objectives
- What NoSQL means
- What is difference between SQL and NoSQL
- What is ACID
- What is document storage
- What are NoSQL types
- What are benefits of a NoSQL database
- How to query information from a NoSQL database
- How to insert/update/delete information from a NoSQL database
- How to use MongoDB

## Requirements
- Ubuntu 18.04 LTS
- MongoDB 3.6 or higher
- All files should end with a new line

## Files Description

| File | Description |
|------|-------------|
| `0-list_databases` | Script that lists all databases in MongoDB |
| `1-use_or_create_database` | Script that creates or uses a database |
| `2-insert` | Script that inserts a document |
| `3-all` | Script that lists all documents in a collection |
| `4-match` | Script that lists documents with specific filter |
| `5-count` | Script that counts documents |
| `6-update` | Script that updates a document |
| `7-delete` | Script that deletes documents |
| `8-all.py` | Python function that lists all documents |
| `9-insert_school.py` | Python function that inserts a new document |
| `10-update_topics.py` | Python function that updates topics |
| `11-schools_by_topic.py` | Python function that returns schools with specific topic |
| `12-log_stats.py` | Python script that provides stats about logs |

## Usage Examples

### 0-list_databases
```bash
$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin    0.000GB
config   0.000GB
local    0.000GB
bye
