from flask import Flask

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/data", methods={'GET'})
def data():
    schools = []
    with open('data.csv') as scoreFile:
        scorereader = csv.DictReader(scoreFile)
        for school in scorereader:
            schools.append({'name': school[1], 'reading': school[3], 'math': school[4], 'writing': school[5]})

    return jsonify(schools)


if __name__ == "__main__":
    app.debug = True
    app.run()
