<template>
	<div>
		<h1>Store example</h1>
		<div class="row">
			<div class="col-12" v-if="!user.payments[0].date">
				loading data...
			</div>
			<div class="col-12" v-else>
				{{ user.payments[0].date }}
			</div>
		</div>
		<hr />
		<childExample />
		<childExample2 />
	</div>
</template>

<script>
import childExample from "@/components/StoreExample/childExample";
import childExample2 from "@/components/StoreExample/childExample2";
export default {
	components: {
		childExample,
		childExample2,
	},
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
		user() {
			return this.$store.getters.user;
		},
	},

	methods: {
		increment() {
			this.counter = 10;
		},
	},
	created() {
		this.$store.dispatch("callServer");
	},
};
</script>

<style></style>
