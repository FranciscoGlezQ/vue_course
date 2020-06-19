import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "@/router";
import store from "@/store";

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
