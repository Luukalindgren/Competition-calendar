# Have to install pymongo dotenv and bs4 to run this code

import requests
import datetime
import os
from pymongo import MongoClient
from dotenv import load_dotenv
from bs4 import BeautifulSoup

# There is no API for this purpose on the website, so we have to scrape the data from the website

# Load environment variables from .env file
load_dotenv()

# Connect to MongoDB
client = MongoClient(os.getenv("DATABASE_URL"))
db = client.Kisakalenteri
coll = db.competitions
# Drop the collection to avoid duplicates
coll.drop()

# Get the websites HTML
date = str(datetime.date.today())
URL = "https://discgolfmetrix.com/competitions_server.php?name=&date1=" + date + "&date2=" + date + "&country_code=FI&from=1&to=20&page=all" #&area=Varsinais-Suomi
page = requests.get(URL)

# Parse the HTML
soup = BeautifulSoup(page.content, 'html.parser')       # Parse HTML
competitions = soup.find_all(class_="column")           # Find all competitions, each competition is in a div with class "column"

# Iterate through all competitions and add them to the array
competitionsJson = {"competitions": []}
for result in competitions:
    newCompetition = {}
    competitionID = result.find("a").get("href")[1:]    # Competition ID is in href attribute of a tag ([1:] removes the / from the beginning)
    competitionName = result.find("h2")                 # Name of the competition is in h2 tag under div with class "column"
    competitionDesc = result.find("ul", class_="metadata-list") # Competition description is in ul tag with class "metadata-list"
    competitionTime = competitionDesc.find("li")
    competitionLocation = competitionTime.find_next("li")
    competitionArea = competitionLocation.find_next("li")   # This is used for possible implementation of weather forecast
    newCompetition["id"] = competitionID
    newCompetition["name"] = competitionName.text.strip()
    newCompetition["time"] = competitionTime.text.strip()
    newCompetition["location"] = competitionLocation.text.strip()
    newCompetition["area"] = competitionArea.text.strip()
    if coll.find_one({"id": competitionID}) == None:
        competitionsJson["competitions"].append(newCompetition)
    

# Insert all competitions to the database
result = coll.insert_many(competitionsJson["competitions"])

print(result.inserted_ids)
print("Added " + str(len(result.inserted_ids)) + " competitions to the database.")

client.close()