#Team Hippo- Sophie Nichol, Manfred Tan, Calvin Chu
#SoftDev1 pd9
#K11 - Forms
#2019-09-25

from flask import Flask, render_template,request
app = Flask(__name__)


@app.route("/")
def hello_world():
    print("Main page loaded") # Prints out something on load/reload in console
    return "New test page!"

@app.route("/form")
def makeForm():
    print(app)
    print(request.args)
    return render_template('foo.html',
    )

@app.route("/auth")
def auth():
    print(app)
    print(request)
    print(request.args)
    return "helo"

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
