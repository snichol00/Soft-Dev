import os
from flask import Flask, render_template, request
import cgi

os.path.dirname(__file__)
DIR = os.path.dirname(__file__)
DIR += '/'

app = Flask(__name__)

@app.route("/")
def makeForm():
    return render_template('app.html')

@app.route("/auth")
def authenticate():
    print(app)
    print(request)
    print(request.headers)
    #print(request.method)
    print(request.args)
    #print(request.form)
    #print(cgi.FieldStorage )
    return render_template("output.html",
                               username = request.args["data"],
                               method = request.method)

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
