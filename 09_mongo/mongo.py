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
#def borough(bor):
    #for res in col.find({ "borough": bor }):



#All restaurants in a specified zip code.
#All restaurants in a specified zip code and with a specified grade.
#All restaurants in a specified zip code with a score below a specified threshold.
#Something more clever.
