from flask import Blueprint, jsonify, render_template

routes_base_dados_bp = Blueprint('base-de-dados', __name__, url_prefix='/base-de-dados')

@routes_base_dados_bp.route('/')
def base_dados():
    return render_template('base-de-dados/index.html')

@routes_base_dados_bp.route('/dados/csv')
def dados_csv():
    csv = [
        { 'date': '2023-1-1', 'value': 30 },
        { 'date': '2023-2-1', 'value': 80 },
        { 'date': '2023-3-1', 'value': 20 },
        { 'date': '2023-4-1', 'value': 120 },
        { 'date': '2023-5-1', 'value': 50 },
        { 'date': '2023-6-1', 'value': 70 },
    ]
    return jsonify(csv)