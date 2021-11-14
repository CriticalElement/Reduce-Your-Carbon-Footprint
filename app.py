from flask import Flask, render_template
from flask_restful import Api


app = Flask(__name__, static_url_path='/static', static_folder='app/static/', template_folder='app/templates/')
Api(app)


@app.route('/')
def index():
    return render_template('index.html', svg=open('app/static/icon.svg', 'r').read())


if __name__ == '__main__':
    app.run(port=8000)
