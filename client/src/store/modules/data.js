import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '@/store/index';

Vue.use(Vuex);

const data = {
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
};

const getters = {
	fourth_party_corpus_sentiment: (state) => state.fourth_party_corpus_sentiment,
	fifth_party_corpus_sentiment: (state) => state.fifth_party_corpus_sentiment,
};

const actions = {

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

	setActionsByIeNumber(state, value) {
		state.actionsByIenumber = value
	},


};

export default {
	namespaced: true,
	state: data,
	getters,
	actions,
	mutations,
};