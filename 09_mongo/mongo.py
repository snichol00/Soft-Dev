import pymongo, json
from pymongo import MongoClient
client = MongoClient()
from bson.json_util import loads

#create test database
db = client['test'] # creates if doesn't already exist
#create restaurants collection
restaurants = db['restaurants']

def get_data():
    json_file = open('data.json')
    stuff = json_file.readlines()
    for line in stuff:
        line.replace("$date","date")
        restaurants.insert_one(loads(line,strict=False))

# def ingest(f):
#     with open(f) as _f:
#         return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

if restaurants.estimated_document_count() == 0:
    get_data()
#data = ingest("data.json")
#restaurants.insert(data)
len = restaurants.estimated_document_count()
print(len)
# json_string = json_file.read()
# json_string.replace("$date", "date")
   # data = json.load(json_file)

#All restaurants in a specified borough.
def borough(bor):
    print("Restaurants in borough: ", bor)
    for res in restaurants.find({ "borough": bor }):
        print(res)

#All restaurants in a specified zip code.
def zipcode(zip):
    print("Restaurants in zip code ", zip)
    for res in restaurants.find( {"address.zipcode": zip}):
        print(res)

#All restaurants in a specified zip code and with a specified grade.
def zipgrade(zip, grade):
    print("Restaurants in zip code ", zip, " and grade ", grade)
    for res in restaurants.find( {"address.zipcode": zip, "grades.0.grade": grade}):
        print(res)

#All restaurants in a specified zip code with a score below a specified threshold.
def zipscore(zip, thres):
    print("Restaurants in zip code ", zip, " with grade below ", thres)
    for res in restaurants.find( {"address.zipcode": zip):
        sel = res['grades']
        for grade in range(len(grades)):
            if (sel[grade]['grade'] > thres):
                print(res)
                
#Something more clever.

borough("Manhattan")
zipcode("10282")
zipgrade("10282", 'A')
zipscore("10282", 'B')
