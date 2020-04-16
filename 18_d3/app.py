from flask import Flask

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/data", methods={"GET"})
def data():
    data = []
    with open("data.csv") as csv_file:
        reader = csv.reader(csv_file)
        # skip the first row, which is the header row
        next(reader)
        for entry in reader:
            data.append({'school': entry[1], 'testtakers': entry[2], 'reading': entry[3], 'math': int(entry[4]), 'writing': entry[5]})

    return jsonify(data)

if __name__ == "__main__":
    app.debug = True
    app.run()


if __name__ == "__main__":
    app.debug = True
    app.run()
