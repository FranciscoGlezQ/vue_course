import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "@/pages/dashboard";
import Foo from "@/pages/Foo";
import Bar from "@/pages/Bar";
import BarChildren from "@/pages/Bar/BarChildren";
import NotFound from "@/pages/404";
import StoreExample from "@/pages/StoreExample";
import SlotPage from "@/pages/SlotPage";

const routes = [
	{
		path: "/foo",
		name: "Foo",
		component: Foo,
		children: [{ path: "bar", component: Bar }],
	},
	{
		path: "/bar",
		component: Bar,
		children: [
			{
				path: ":var",
				name: "BarChildren",
				component: BarChildren,
			},
		],
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/store",
		name: "store example",
		component: StoreExample,
	},
	{
		path: "",
		name: "slot example",
		component: SlotPage,
	},
	{
		path: "*",
		name: "404",
		component: NotFound,
		// component: {
		// 	render(c) {
		// 		return c("h1", "Not found");
		// 	},
		// },
	},
];

export default new VueRouter({
	mode: "history",
	routes, // short for `routes: routes`
	scrollBehavior(to, from, savedPosition) {
		return savedPosition ? savedPosition : { x: 0, y: 0 };
	},
});
