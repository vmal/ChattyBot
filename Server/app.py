from flask import Flask, request
from chatterbot import ChatBot
from flask_cors import CORS, cross_origin
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

english_bot = ChatBot("English Bot",
                     storage_adapter = "chatterbot.storage.MongoDatabaseAdapter",
                     database = "chatterbot",
                     database_uri = "mongodb://vmal:admin123@ds127490.mlab.com:27490/chatterbot")

english_bot.set_trainer(ChatterBotCorpusTrainer)
english_bot.train("chatterbot.corpus.english")

@app.route("/")
@cross_origin()
def home():
    return "Hello!!!!"

@app.route("/getReply", methods = ['POST'])
@cross_origin()
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