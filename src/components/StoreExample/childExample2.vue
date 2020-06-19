<template>
	<div>
		<hr />
		Child 2 <br />
		{{ counter }}
		<br />
		<button @click="increment">
			Increment
		</button>
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
	},
	methods: {
		increment() {
			this.counter = 10;
		},
	},
};
</script>

<style></style>
