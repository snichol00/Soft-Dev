# Sophie Nichol
# SoftDev1 pd9
# K24 -- A RESTful Journey Skyward
# 2019-11-12

from flask import Flask, render_template
import urllib.request as urllib2
import json

app = Flask(__name__)

@app.route("/")
def root():
    u = urllib2.urlopen("https://api.nasa.gov/planetary/apod?api_key=8T1e9uGa5Vv9I8qpGGBEeemUKpUXGtaqZnWMIecC")
    response = u.read()
    data = json.loads(response)
    return render_template("index.html",
                            photo=data['url'],
                            info=data['explanation'])

#main
if __name__ == "__main__":
    app.debug = True
    app.run()
