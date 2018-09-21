from flask import Flask, render_template, request
from flask_cors import CORS
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)
CORS(app)

english_bot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")

english_bot.set_trainer(ChatterBotCorpusTrainer)
english_bot.train("chatterbot.corpus.english")

@app.route("/getReply", methods = ['POST'])
def get_response():
    req_data = request.get_json()
    print(req_data)
    temp = req_data['temp']
    print(temp)
    message = temp['msg']
    print(message)
    botResponse = english_bot.get_response(message)
    return str(botResponse)

if __name__ == "__main__":
    app.run()