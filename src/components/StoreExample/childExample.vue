<template>
	<div>
		Child 1
		<br />
		{{ counter }} <br /><br />
		{{ name }}
	</div>
</template>

<script>
export default {
	computed: {
		counter: {
			get() {
				return this.$store.getters.counterNumber;
			},
			set(value) {
				// this.$store.commit("increment", value);
				this.$store.dispatch("incrementCounter", value);
			},
		},
		name() {
			return this.$store.getters.name;
		},
	},
};
</script>

<style></style>
