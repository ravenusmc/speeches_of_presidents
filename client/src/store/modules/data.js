import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '@/store/index';

Vue.use(Vuex);

const data = {
	backup_fourth_party_corpus_sentiment: [],
	fourth_party_corpus_sentiment: [['President', 'Average Sentiment'], 
	['William McKinley', 0.09575257741244457], 
	['William Taft', 0.09492347125366417], 
	['Woodrow Wilson', 0.108198860291924], 
	['Warren G. Harding', 0.11033814387632876], 
	['Calvin Coolidge', 0.117741616995088]],
	fifth_party_corpus_sentiment: [['President', 'Average Sentiment'], 
	['Franklin D. Roosevelt', 0.09472183965933512], 
	['Harry S. Truman', 0.10596277709871298], 
	['Dwight D. Eisenhower', 0.11518392547946223], 
	['John F. Kennedy', 0.10300204949548698], 
	['Lyndon B. Johnson', 0.056660692951015536]],
	sixth_party_corpus_sentiment: [['President', 'Average Sentiment'], 
	['Lyndon B. Johnson', 0.1032863902258471], 
	['Richard M. Nixon', 0.11298690759285576], 
	['Gerald Ford', 0.10885030293187649], 
	['Jimmy Carter', 0.08100335239797166], 
	['Ronald Reagan', 0.0734686560296906]],
	MasterGraphSentiment: [['President', 'Average Sentiment'], 
	['William McKinley', 0.09575257741244457], 
	['William Taft', 0.09492347125366417], 
	['Woodrow Wilson', 0.108198860291924], 
	['Warren G. Harding', 0.11033814387632876], 
	['Calvin Coolidge', 0.117741616995088],
	['Franklin D. Roosevelt', 0.09472183965933512], 
	['Harry S. Truman', 0.10596277709871298], 
	['Dwight D. Eisenhower', 0.11518392547946223], 
	['John F. Kennedy', 0.10300204949548698], 
	['Lyndon B. Johnson', 0.056660692951015536],
	['Lyndon B. Johnson', 0.1032863902258471], 
	['Richard M. Nixon', 0.11298690759285576], 
	['Gerald Ford', 0.10885030293187649], 
	['Jimmy Carter', 0.08100335239797166], 
	['Ronald Reagan', 0.0734686560296906]],
};

const getters = {
	fourth_party_corpus_sentiment: (state) => state.fourth_party_corpus_sentiment,
	fifth_party_corpus_sentiment: (state) => state.fifth_party_corpus_sentiment,
	sixth_party_corpus_sentiment: (state) => state.sixth_party_corpus_sentiment,
	MasterGraphSentiment: (state) => state.MasterGraphSentiment,
};

const actions = {

	changeDynamicGraphs: ({ commit }, { payload }) => {
		if (store.state.data.fourth_party_corpus_sentiment.length == 6) {
			let backup = store.state.data.fourth_party_corpus_sentiment
			commit('backup_fourth_party_corpus_sentiment', backup)
		}else {
			store.state.data.fourth_party_corpus_sentiment = store.state.data.backup_fourth_party_corpus_sentiment
		}

		let new_fourth_party_corpus_sentiment = []
		let new_fifth_party_corpus_sentiment = []
		let new_sixth_party_corpus_sentiment = []
		let new_MasterGraphSentiment = []
		if (payload.party === 'Republican') {
			new_fourth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fourth_party_corpus_sentiment.filter(([name]) => ['William McKinley', 'William Taft', 'Warren G. Harding', 'Calvin Coolidge'].includes(name))];
			new_fifth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fifth_party_corpus_sentiment.filter(([name]) => ['Dwight D. Eisenhower'].includes(name))];
			new_sixth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.sixth_party_corpus_sentiment.filter(([name]) => ['Richard M. Nixon', 'Gerald Ford', 'Ronald Reagan'].includes(name))];
		} 
		else if (payload.party === 'Democratic') {
			new_fourth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fourth_party_corpus_sentiment.filter(([name]) => ['Woodrow Wilson'].includes(name))];
			new_fifth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fifth_party_corpus_sentiment.filter(([name]) => ['Franklin D. Roosevelt', 'Harry S. Truman', 'John F. Kennedy', 'Lyndon B. Johnson'].includes(name))];
			new_sixth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.sixth_party_corpus_sentiment.filter(([name]) => ['Lyndon B. Johnson', 'Jimmy Carter' ].includes(name))];
		} 
		commit('setFourth_party_corpus_sentiment', new_fourth_party_corpus_sentiment)
		commit('setFifth_party_corpus_sentiment', new_fifth_party_corpus_sentiment)
		commit('setFifth_party_corpus_sentiment', new_sixth_party_corpus_sentiment)
	},


	// changeDynamicGraphs: ({ commit }, { payload }) => {
	// 	commit('setSelectedIENumber', payload['ieNumber'])
	// 	const path = 'http://localhost:5000/changeDynamicGraphs';
	// 	axios.post(path, payload)
	// 		.then((res) => {
	// 			commit('setActionsByIeNumber', res.data[0])
	// 			commit('setRecruitActionCount', res.data[1])
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// },

};

const mutations = {

	backup_fourth_party_corpus_sentiment(state, value) {
		state.backup_fourth_party_corpus_sentiment = value		
	},

	setFourth_party_corpus_sentiment(state, value) {
		state.fourth_party_corpus_sentiment = value
	},

	setFifth_party_corpus_sentiment(state, value) {
		state.fifth_party_corpus_sentiment = value
	},

	setSixth_party_corpus_sentiment(state, value) {
		state.Sixth_party_corpus_sentiment = value
	},


};

export default {
	namespaced: true,
	state: data,
	getters,
	actions,
	mutations,
};