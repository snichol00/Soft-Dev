from flask import Flask, render_template
import urllib.request as urllib2
import json

app = Flask(__name__)

@app.route("/")
def root():
    u = urllib.urlrequest.urlopen("http://dnd5eapi.co/api/spells/1/")
    response = u.read()
    data = json.loads(response)
    return render_template("index.html",
                            info = data["desc"])


#main
if __name__ == "__main__":
    app.debug = True
    app.run()
