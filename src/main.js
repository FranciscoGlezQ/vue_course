import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from "vue";
import Vuelidate from 'vuelidate'

console.log(Vuelidate)
Vue.use(Vuelidate)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import App from "./App.vue";

Vue.config.productionTip = false;
import router from "@/router";
import store from "@/store";

new Vue({
	store,
	router,
	render: (h) => h(App),
	mounted(){
		console.log(this)
	}
}).$mount("#app");
