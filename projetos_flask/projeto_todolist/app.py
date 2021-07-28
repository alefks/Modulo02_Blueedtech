from flask import Flask, render_template

app = Flask(__name__)

#end-points / rotas

@app.route('/')
def index():
    return render_template('index.html', titulo='To-do list')



if __name__ == "__main__":
    app.run(debug=True)