import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "@/pages/dashboard";
import Foo from "@/pages/Foo";
import Bar from "@/pages/Bar";

const routes = [
	{
		path: "/foo",
		component: Foo,
		children: [{ path: "bar", component: Bar }],
	},
	{ path: "/bar", component: Bar, auth: true },
	{ path: "", component: Dashboard },
];

export default new VueRouter({
	routes, // short for `routes: routes`
	scrollBehavior(to, from, savedPosition) {
		return savedPosition ? savedPosition : { x: 0, y: 0 };
	},
});
const rutasPublicas = ["/", "login"];
router.beforeEach((to, from, next) => {
	if (!rutasPublicas.includes(to.path)) {
		// authent
	} else next();
});
