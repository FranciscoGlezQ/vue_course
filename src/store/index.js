import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
		name: null,
		user: {
			name: "",
			payments: [
				{
					qtty: 0,
					date: null,
				},
			],
		},
	},
	getters: {
		counterNumber: function(state) {
			return state.count;
		},
		name: (state) => state.name,
		user: (state) => state.user,
	},
	mutations: {
		increment(state, value) {
			console.log(value);

			state.count++;
		},
		changeName(state, value) {
			state.name = value;
		},
		setUser(state, value) {
			state.user = value;
		},
	},
	actions: {
		incrementCounter({ commit, state }, value) {
			commit("increment", value);
		},
		callServer: ({ commit }) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log("Server finished");
					commit("changeName", "Hello from server");
					const user = {
						name: "User name",
						payments: [
							{ qtty: 100, date: new Date() },
							{ qtty: 100, date: new Date() },
						],
					};
					commit("setUser", user);
					resolve();
				}, 3000);
			});
		},
	},
});
