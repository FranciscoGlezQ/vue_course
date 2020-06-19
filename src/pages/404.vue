<template>
	<div>
		<h1>Not found</h1>
		<button @click="GoHome">
			Home
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		GoHome() {
			// this.$router.push("/");
			this.$router.push({
				name: "BarChildren",
				params: {
					var: "Example",
				},
				query: {
					query1: "Example query",
				},
				hash: "#toHash",
			});
		},
	},
	mounted() {
		console.log(this.$root.$data);
	},
};
</script>

<style></style>
