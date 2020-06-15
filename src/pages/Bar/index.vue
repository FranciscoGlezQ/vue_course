<template>
	<div class="Bar">
		Bar Page
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log(this.$router);
	},
};
</script>

<style scoped>
.Bar {
	min-height: 200vh;
	background-color: green;
}
</style>
