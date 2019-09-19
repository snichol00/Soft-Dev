## Sophie Nichol
## SoftDev1 pd9
## K08 -- Lemme Flask You Sump’n
## 2019/09/17


from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    return "No hablo queso!"

@app.route("/cool")
def cool():
    print("coolio")
    return "that's so cool"

@app.route("/puppy")
def dog():
    print("roof")
    return "I'm a cat"

if __name__ == "__main__":
    app.debug = True
    app.run()
