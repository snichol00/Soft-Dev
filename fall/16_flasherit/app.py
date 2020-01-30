#Team Sandwich-Sophie Nichol, Kevin Cai
#SoftDev1 pd9
#K15 - Do I know you?
#2019-10-02

from flask import Flask, render_template, request, session, redirect
import cgi, os
app = Flask(__name__)

app.secret_key = os.urandom(32)
myUsername = "happy"
myPassword = "feet"

@app.route("/")
def loginPage():
    # if already logged in
    if "current" in session:
        # go directy to welcome page
        return redirect("/welcome")
    else:
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
    # if the user inputs the correct username and password
    if (username == myUsername and password == myPassword):
        # log them in and send to welcome page
        session["current"] = True
        return redirect("/welcome")
    #otherwise, return error
    else:
        # return appropriate error message
        if (username != myUsername and password != myPassword):
            return render_template('error.html',
                                    #username = request.args['username'],
                                    #password = request.args['password'],
                                    errMessage = "Incorrect Username and Password. Try Again")
        if (username != myUsername):
            return render_template('error.html',
                                    #username = request.args['username'],
                                    #password = request.args['password'],
                                    errMessage = "Incorrect Username. Try Again")
        else:
            return render_template('error.html',
                                    #username = request.args['username'],
                                    #password = request.args['password'],
                                    errMessage = "Incorrect Username. Try Again")


@app.route("/welcome")
def welcomePage():
    return render_template('welcome.html')
                            #username = request.args['username'],
                            #password = request.args['password'])

@app.route("/logout")
def logout():
    #end current session
    session.pop("current")
    #go back to home page
    return redirect("/")


if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
