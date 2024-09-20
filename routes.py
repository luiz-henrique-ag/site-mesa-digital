from flask import Blueprint, render_template

routes_bp = Blueprint('mesa', __name__, url_prefix='/')

@routes_bp.route('/')
def home():
    return render_template('index.html')

@routes_bp.route('/info')
def informativo():
    return render_template('info.html')
