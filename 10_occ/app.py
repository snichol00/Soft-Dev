from flask import Flask, render_template
import random
app = Flask(__name__)

coll = {}
def get_job():
    file = open("data/occupations.csv", 'r')
    words = file.readlines()
    words.pop(0)
    words.pop() #remove first and last because they aren't part of the list
    index = 0
    rolls = {}
    for each in words:
        each = each.strip()
        look = len(each)-1
        job = 0
        percent = 0
        while look >= 0:
            if each[look] == ',': #look for the last comma in each line
                job = each[0:look]
                percent = float(each[look+1:])
                coll[job] = percent
                look = -1
            look -= 1
        while percent > 0.01:
            index += 1
            rolls[index] = job #scale everything by 10, and give each percentage point a job
            percent -= 0.1
    roll = random.randint(1,998) #print job
    return rolls[roll]

@app.route("/")
def home():
    return "Hi, this is the homepage"

@app.route("/occupyflaskst")
def showjob():
    return render_template(
        'app.html',
        foo="Random Job Selection",
        job=get_job(),
        collection=coll
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
