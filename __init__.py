#!/usr/bin/python
from flask import Flask, url_for, redirect, session, render_template, request, Response

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

app.secret_key = "62e264ed-873c-474b-b0a8-cb2a7a603f74"

if __name__ == "__main__":
    app.run(debug=True)
