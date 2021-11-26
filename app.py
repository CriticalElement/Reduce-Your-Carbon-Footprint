from os import path, walk

from flask import Flask, render_template
from flask_restful import Api


app = Flask(__name__, static_url_path='/static', static_folder='app/static/', template_folder='app/templates/')
# Reload the server every time there is a change to one of the files
watch_dirs = ['app/static', 'app/templates']
watch_files = []
ignore_watch = ['stylesheet.css.map']
for dir in watch_dirs:
    for location, _, files in walk(dir):
        for file in files:
            if file not in ignore_watch:
                filename = path.join(location, file)
                watch_files.append(filename)
Api(app)


@app.route('/')
def index():
    return render_template('index.html', svg=open('app/static/icon.svg', 'r').read())  # render the svg


if __name__ == '__main__':
    app.run(port=8000, debug=True, extra_files=watch_files)
