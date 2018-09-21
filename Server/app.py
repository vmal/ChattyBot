from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

english_bot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")

english_bot.set_trainer(ChatterBotCorpusTrainer)
english_bot.train("chatterbot.corpus.english")


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/getReply", methods = ['POST'])
def get_response():
    req_data = request.get_json()
    message = req_data["msg"]
    botResponse = english_bot.get_response(message)
    return str(botResponse)

if __name__ == "__main__":
    app.run()