from flask import Flask, render_template

app = Flask(__name__, template_folder='./templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/base-de-dados')
def dados():
    return render_template('base-de-dados/index.html')