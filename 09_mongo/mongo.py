import pymongo, idon
from pymongo import MongoClient
from bson.json_util import loads
client = MongoClient('localhost', 27017)

db = client['testdata']
col = db['restaurants']

if (col.count() == 0):
    file = open("dataset.json", "r")
    con = file.readlines()
    for line in con:
        col.insert_one(loads(line))

def ingest(f):
    with open(f) as _f:
        return loads(f'[{",".join(map(lambda s: s[:-1], _f))}]')

#All restaurants in a specified borough.
def borough(bor):
    for r in col.find({ "borough": bor }):



#All restaurants in a specified zip code.
#All restaurants in a specified zip code and with a specified grade.
#All restaurants in a specified zip code with a score below a specified threshold.
#Something more clever.
