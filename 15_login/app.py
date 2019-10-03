#Team Sandwich-Sophie Nichol, Kevin Cai
#SoftDev1 pd9
#K15 - Do I know you?
#2019-10-02

from flask import Flask, render_template, request
import cgi
app = Flask(__name__)


@app.route("/")
def loginPage():
    return render_template('login.html')

@app.route("/error")
def errorPage():
    return render_template('error.html')

@app.route("/welcome")
def welcomePage():
    return render_template('welcome.html')

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
