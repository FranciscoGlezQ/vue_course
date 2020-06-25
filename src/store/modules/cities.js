export default {
	namespaced: true,
	state: {
		city: {
			name: "Guadalajara",
			location: { latitude: 0, longitude: 0 },
		},
	},
	getters: {
		getName: function(state) {
			return state.city.name;
		},
	},
	mutations: {},
	actions: {},
};
