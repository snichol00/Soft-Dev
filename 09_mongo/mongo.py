import json, pymongo
from pymongo import MongoClient
client = MongoClient(port=27017)
from bson.json_util import loads

#create test database
db = client['test'] # creates if doesn't already exist
#create restaurants collection
restaurants = db['restaurants']

def get_data():
    json_file = open('data.json')
    stuff = json_file.readlines()
    for line in stuff:
        line.replace("$data","date")
        restaurants.insert_one(loads(line))

get_data()
len = restaurants.count()

#All restaurants in a specified borough.
def borough(bor):
    output = restaurants.find({ "borough": bor }):
    print("Restaurants in borough: ", bor)
    print(output)

#All restaurants in a specified zip code.
def zipcode(zip):
    output = restaurants.find( {"address.zipcode": zip})
    print("Restaurants in zip code ", zip)
    print(output)

#All restaurants in a specified zip code and with a specified grade.
def zipgrade(zip, grade):
    output = restaurants.find( {"address.zipcode": zip, "grades.0.grade": grade})
    print("Restaurants in zip code ", zip, " and grade ", grade)
    print(output)

#All restaurants in a specified zip code with a score below a specified threshold.
def zipscore(zip, thres):
    output = restaurants.find( {"address.zipcode": zip, "grades.0.score": {"$lt": int(thres)}})
    print("Restaurants in zip code ", zip, " with grade below ", grade)
    print(output)
#Something more clever.
