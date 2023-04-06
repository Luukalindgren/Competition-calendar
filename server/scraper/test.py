# Have to install pymongo dotenv and bs4 to run this code

from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Connect to MongoDB
client = MongoClient(os.getenv("DATABASE_URL"))
competitionCalendar = client["Kisakalenteri"]
competitions = competitionCalendar["competitions"]

# Find all competitions from DB
cursor = competitions.find()
count = 0;

# Print all competitions
for document in cursor:
    count += 1
    print(document)

print("Found: " + str(count) + " competitions")