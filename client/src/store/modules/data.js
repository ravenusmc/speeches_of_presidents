import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '@/store/index';

Vue.use(Vuex);

const data = {
	backup_fourth_party_corpus_sentiment: [],
	backup_fifth_party_corpus_sentiment: [],
	backup_sixth_party_corpus_sentiment: [],
	backup_MasterGraphSentiment: [],
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
		if (store.state.data.MasterGraphSentiment.length === 16) {
			let backup_fourth = store.state.data.fourth_party_corpus_sentiment
			let backup_fifth = store.state.data.fifth_party_corpus_sentiment
			let backup_sixth = store.state.data.sixth_party_corpus_sentiment
			let backup_master = store.state.data.MasterGraphSentiment
			commit('backup_fourth_party_corpus_sentiment', backup_fourth)
			commit('backup_fifth_party_corpus_sentiment', backup_fifth)
			commit('backup_sixth_party_corpus_sentiment', backup_sixth)
			commit('backup_MasterGraphSentiment', backup_master)
		} else {
			console.log('ELSE')
			store.state.data.fourth_party_corpus_sentiment = store.state.data.backup_fourth_party_corpus_sentiment
			store.state.data.fifth_party_corpus_sentiment = store.state.data.backup_fifth_party_corpus_sentiment
			store.state.data.sixth_party_corpus_sentiment = store.state.data.backup_sixth_party_corpus_sentiment
			store.state.data.MasterGraphSentiment = store.state.data.backup_MasterGraphSentiment
		}

		console.log(store.state.data.sixth_party_corpus_sentiment)

		let new_fourth_party_corpus_sentiment = []
		let new_fifth_party_corpus_sentiment = []
		let new_sixth_party_corpus_sentiment = []
		let new_MasterGraphSentiment = []

		if (payload.party === 'Republican') {
			new_fourth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fourth_party_corpus_sentiment.filter(([name]) => ['William McKinley', 'William Taft', 'Warren G. Harding', 'Calvin Coolidge'].includes(name))];
			new_fifth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fifth_party_corpus_sentiment.filter(([name]) => ['Dwight D. Eisenhower'].includes(name))];
			new_sixth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.sixth_party_corpus_sentiment.filter(([name]) => ['Richard M. Nixon', 'Gerald Ford', 'Ronald Reagan'].includes(name))];
			new_MasterGraphSentiment = [['President', 'Average Sentiment'], ...store.state.data.MasterGraphSentiment.filter(([name]) => ['William McKinley', 'William Taft', 'Warren G. Harding', 'Calvin Coolidge', 'Dwight D. Eisenhower', 'Richard M. Nixon', 'Gerald Ford', 'Ronald Reagan'].includes(name))];
		}
		else if (payload.party === 'Democratic') {
			new_fourth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fourth_party_corpus_sentiment.filter(([name]) => ['Woodrow Wilson'].includes(name))];
			new_fifth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.fifth_party_corpus_sentiment.filter(([name]) => ['Franklin D. Roosevelt', 'Harry S. Truman', 'John F. Kennedy', 'Lyndon B. Johnson'].includes(name))];
			new_sixth_party_corpus_sentiment = [['President', 'Average Sentiment'], ...store.state.data.sixth_party_corpus_sentiment.filter(([name]) => ['Lyndon B. Johnson', 'Jimmy Carter'].includes(name))];
			new_MasterGraphSentiment = [['President', 'Average Sentiment'], ...store.state.data.MasterGraphSentiment.filter(([name]) => ['Woodrow Wilson', 'Franklin D. Roosevelt', 'Harry S. Truman', 'John F. Kennedy', 'Lyndon B. Johnson', 'Jimmy Carter'].includes(name))];
		}else {
			new_fourth_party_corpus_sentiment = store.state.data.backup_fourth_party_corpus_sentiment
			new_fifth_party_corpus_sentiment = store.state.data.backup_fifth_party_corpus_sentiment
			new_sixth_party_corpus_sentiment = store.state.data.backup_sixth_party_corpus_sentiment
			new_MasterGraphSentiment = store.state.data.backup_MasterGraphSentiment
		}

		commit('setFourth_party_corpus_sentiment', new_fourth_party_corpus_sentiment)
		commit('setFifth_party_corpus_sentiment', new_fifth_party_corpus_sentiment)
		commit('setSixth_party_corpus_sentiment', new_sixth_party_corpus_sentiment)
		commit('setMasterGraphSentiment', new_MasterGraphSentiment)
	},

};

const mutations = {

	backup_fourth_party_corpus_sentiment(state, value) {
		state.backup_fourth_party_corpus_sentiment = value
	},

	backup_fifth_party_corpus_sentiment(state, value) {
		state.backup_fifth_party_corpus_sentiment = value
	},

	backup_sixth_party_corpus_sentiment(state, value) {
		state.backup_sixth_party_corpus_sentiment = value
	},

	backup_MasterGraphSentiment(state,value) {
		state.backup_MasterGraphSentiment = value
	},

	setFourth_party_corpus_sentiment(state, value) {
		state.fourth_party_corpus_sentiment = value
	},

	setFifth_party_corpus_sentiment(state, value) {
		state.fifth_party_corpus_sentiment = value
	},

	setSixth_party_corpus_sentiment(state, value) {
		state.sixth_party_corpus_sentiment = value
	},

	setMasterGraphSentiment(state, value) {
		state.MasterGraphSentiment = value
	},

};

export default {
	namespaced: true,
	state: data,
	getters,
	actions,
	mutations,
};