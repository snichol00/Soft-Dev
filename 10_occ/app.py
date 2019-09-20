from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "hi"

coll = [0,1,1,2,3,5,8]

@app.route("/mytemp")
def template():
    return render_template(
        'app.html',
        foo="fooooo",
        collection=coll
    )
