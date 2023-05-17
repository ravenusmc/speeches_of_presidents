# importing supporting libraries
import numpy as np
import pandas as pd
from textblob import TextBlob


class Analyze():

    def __init__(self):
        self.first_speech_set = pd.read_csv('./data/fourth_party_corpus.csv')
        self.second_speech_set = pd.read_csv('./data/fifth_party_corpus.csv')
        self.third_speech_set = pd.read_csv('./data/sixth_party_corpus.csv')
        self.speeches_list = [self.first_speech_set,
                              self.second_speech_set, self.third_speech_set]

    def get_average(self, sentence_sentiment_list):
        return sum(sentence_sentiment_list) / len(sentence_sentiment_list)

    def speech_sentiment(self):
        sentiment_object = Analyze()
        count = 0
        speech_data = []
        columns = ['President', 'Average Sentiment']
        speech_data.append(columns)
        for speech in self.speeches_list:
            print(speech.iloc[count, 0])
        while count <= 4:
            speech_text = self.speeches_list[0].iloc[count, 2]
            speech_text_ready_for_analysis = TextBlob(speech_text)
            sentence_sentiment_list = []
            for sentence in speech_text_ready_for_analysis.sentences:
                sentence_sentiment = sentence.sentiment[0]
                sentence_sentiment_list.append(sentence_sentiment)
            average = sentiment_object.get_average(sentence_sentiment_list)
            count += 1
        # print(self.speeches_list[0].iloc[1,2])
        # print(self.speeches_list[0].head())

    # def test(self):
    #     print(self.first_speech_set.head())
    #     print(self.second_speech_set.head())
    #     print(self.third_speech_set.head())


obj = Analyze()
obj.speech_sentiment()

# Look at each block of speech sets - the sentiment
# Look at democrats speech sentiment
# Look at Republican speech sentiment
# Look at common words by block - allow user to select President

# Resource:
# https://github.com/ravenusmc/three_speeches/blob/master/server/sentiment.py
