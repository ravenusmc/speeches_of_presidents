# importing supporting libraries
import numpy as np
import pandas as pd

class Analyze():

    def __init__(self):
        self.first_speech_set = pd.read_csv('./data/fourth_party_corpus.csv')
        self.second_speech_set = pd.read_csv('./data/fifth_party_corpus.csv')
        self.third_speech_set = pd.read_csv('./data/sixth_party_corpus.csv')
    
    # def test(self):
    #     print(self.first_speech_set.head())
    #     print(self.second_speech_set.head())
    #     print(self.third_speech_set.head())

obj = Analyze()
obj.test()

# Look at each block of speech sets - the sentiment
# Look at democrats speech sentiment 
# Look at Republican speech sentiment 
# Look at common words by block - allow user to select President 