import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import users from "./modules/users";
import cities from "./modules/cities";

export default new Vuex.Store({
	state: {
		count: 0,
		numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		name: null,
	},
	getters: {
		counterNumber: function(state) {
			return state.count;
		},
		name: (state) => state.name,
		getNumbers: (state) =>
			function(value) {
				return state.numbers.filter((n) => n % value === 0);
			},
	},
	mutations: {
		increment(state, value) {
			console.log(value);

			state.count++;
		},
	},
	actions: {
		incrementCounter({ commit, state }, value) {
			commit("increment", value);
		},
	},
	modules: {
		users,
		cities,
	},
});
