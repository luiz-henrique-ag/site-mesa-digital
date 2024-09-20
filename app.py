from flask import Flask
from routes import routes_bp
from routes_base_dados import routes_base_dados_bp

app = Flask(__name__, template_folder='./templates')

app.register_blueprint(routes_bp)
app.register_blueprint(routes_base_dados_bp)