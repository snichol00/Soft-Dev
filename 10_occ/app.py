from flask import Flask, render_template
app = Flask(__name__)

coll = [0,1,1,2,3,5,8]

@app.route("/occupyflaskst")
def template():
    return render_template(
        'app.html',
        foo="fooooo",
        collection=coll
    )
