<template>
	<div id="app">
		<Navbar />
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import Navbar from "./components/general/Navbar";
import Content from "./components/general/Body";
import MyFooter from "./components/general/MyFooter";

export default {
	name: "app",
	components: {
		Navbar,
		Content,
		MyFooter,
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translate(30px, 0);
}
</style>
