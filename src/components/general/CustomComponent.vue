<template>
	<div>
		<div class="row">
			custom component
		</div>
		<div class="row">
			<div class="col-6 offset-3">
				{{ reverseString }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "This is a message",
			message2: "This is a message 2",
		};
	},
	computed: {
		reverseString() {
			return this.message2
				.split("")
				.reverse()
				.join("");
		},
	},
	watch: {
		message(oldValue, value) {
			console.log("Watch");

			console.log(oldValue, value);
		},
	},
	methods: {},
	mounted() {
		setTimeout(() => {
			this.message = "Anita lava la tina";
		}, 2000);
	},
};
</script>

<style></style>
