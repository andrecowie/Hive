from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    data = []
    return render_template("index.html", data = data)

if __name__ == '__main__':
    app.run()
