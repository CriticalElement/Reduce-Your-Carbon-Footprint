from os import path, walk

from flask import Flask, render_template
from flask_restful import Api


app = Flask(__name__, static_url_path='/static', static_folder='app/static/', template_folder='app/templates/')
# Reload the server every time there is a change to one of the files
watch_dirs = ['app/static', 'app/templates']
watch_files = []
ignore_watch = ['stylesheet.css.map', 'altpage.css.map']
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

@app.route('/use_cars_less')
def use_cars_less():
    return render_template('altpage.html',
                           title='How to Reduce Your Carbon Footprint by Using Cars Less',
                           description='This is an article that teaches you how to reduce your carbon footprint by '
                           'using cars less.',
                           svg=open('app/static/icon.svg', 'r').read(),
                           text=open('app/usecarsless.html', 'r').read()
    )

@app.route('/appliances_and_electricity')
def appliances_and_electricity():
    return render_template('altpage.html',
                           title='How to Reduce Your Carbon Footprint by Managing Your Appliances and Electricity',
                           description='This is an article that teaches you how to reduce your carbon footprint by '
                           'managing your appliances and electricity.',
                           svg=open('app/static/icon.svg', 'r').read(),
                           text=open('app/appliancesandelectricity.html', 'r').read()
    )

@app.route('/reduce_reuse_recycle')
def reduce_reuse_recycle():
    return render_template('altpage.html', 
                           title='How to Reduce Your Carbon Footprint by Reducing, Reusing, and Recycling',
                           description='This is an article that teaches you how to reduce your carbon footprint by '
                           'reducing, reusing, and recycling.',
                           svg=open('app/static/icon.svg', 'r').read(),
                           text=open('app/reducereuserecycle.html', 'r').read()
    )

if __name__ == '__main__':
    app.run(port=8000, debug=True, extra_files=watch_files)
