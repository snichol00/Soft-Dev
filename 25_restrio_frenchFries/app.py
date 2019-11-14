from flask import Flask, render_template, request
from urllib.request import urlopen
import json

app = Flask(__name__)

@app.route("/")
def root():
    # Dungeons and Dragons API
    u = urlopen("http://dnd5eapi.co/api/spells/1/")
    response = u.read()
    data = json.loads(response)
    info = data["desc"]
    # Metaweather
    u = urlopen("https://www.metaweather.com/api/location/44418/2013/4/27/")
    response = u.read()
    data = json.loads(response)
    weather = data[0]["weather_state_name"]
    # Lorem Ipsum
    u = urlopen("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    response = u.read()
    data = json.loads(response)
    rec = data["recipe"]
    return render_template("index.html",
                            info = info,
                            weather = weather,
                            recipe = rec)


#main
if __name__ == "__main__":
    app.debug = True
    app.run()
