<template>
	<div>
		<h1>Store example</h1>
		<div class="row">
			<!-- <div class="col-12" v-if="!user.payments[0].date">
				loading data...
			</div> -->
			<template v-for="number in getNumbers"> {{ number }}, </template>

			<div class="col-12">{{ getUserName }} - {{ getCityName }}</div>
		</div>
		<hr />
		<childExample />
		<childExample2 />
	</div>
</template>

<script>
import childExample from "@/components/StoreExample/childExample";
import childExample2 from "@/components/StoreExample/childExample2";

import { mapGetters } from "vuex";

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
				this.$store.dispatch("users/incrementCounter", value);
			},
		},
		user() {
			return this.$store.getters["users/user"];
		},
		// getName() {
		// 	return this.$store.getters["user/getName"];
		// },
		// getCityName() {
		// 	return this.$store.getters["city/getName"];
		// },
		...mapGetters({
			getUserName: "users/getName",
			getCityName: "cities/getName",
			user: "users/user",
		}),
		getNumbers() {
			console.log(this.$store.getters);

			return this.$store.getters.getNumbers(2);
		},
	},

	methods: {
		increment() {
			this.counter = 10;
		},
	},
	created() {
		this.$store.dispatch("users/callServer");
	},
};
</script>

<style></style>
