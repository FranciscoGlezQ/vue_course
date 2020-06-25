export default {
	namespaced: true,
	state: {
		user: {
			name: "",
			payments: [
				{
					qtty: 0,
					date: null,
				},
			],
		},
		auth: false,
	},
	getters: {
		user: (state) => state.user,
		getName: function(state, getters, rootState) {
			console.log("getters", getters);

			console.log(rootState);

			return state.user.name !== ""
				? state.user.name + " from " + rootState.cities.city.name
				: "No user name";
		},
	},
	mutations: {
		setUser(state, value) {
			state.user = value;
		},
		changeName(state, value) {
			state.name = value;
		},
	},
	actions: {
		callServer: ({ commit, state }) => {
			console.assert(state.auth, `User has no AUTH ${state.auth}`);

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log("Server finished");
					commit("changeName", "user says, Hello from server");
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
};
