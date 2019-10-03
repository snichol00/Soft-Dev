#Team Sandwich-Sophie Nichol, Kevin Cai
#SoftDev1 pd9
#K15 - Do I know you?
#2019-10-02

from flask import Flask, render_template, request
import cgi
app = Flask(__name__)

myUsername = "happy"
myPassword = "feet"

@app.route("/")
def loginPage():
    return render_template('login.html')

@app.route("/auth")
def authenticate():
    print(app)
    print(request)
    print(request.headers)
    #print(request.method)
    print(request.args)
    username = request.args['username']
    password = request.args['password']
    if (username == myUsername and password == myPassword):
        return welcomePage()
    else:
        return errorPage()

@app.route("/error")
def errorPage():
    username = request.args['username']
    password = request.args['password']
    if (username != myUsername and password != myPassword):
        return render_template('error.html',
                                username = request.args['username'],
                                password = request.args['password'],
                                errMessage = "Incorrect Username and Password. Try Again")
    if (username != myUsername):
        return render_template('error.html',
                                username = request.args['username'],
                                password = request.args['password'],
                                errMessage = "Incorrect Username. Try Again")
    else:
        return render_template('error.html',
                                username = request.args['username'],
                                password = request.args['password'],
                                errMessage = "Incorrect Username. Try Again")


@app.route("/welcome")
def welcomePage():
    return render_template('welcome.html',
                            username = request.args['username'],
                            password = request.args['password'])

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
