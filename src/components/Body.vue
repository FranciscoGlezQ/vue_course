<template>
	<div class="Body">
		<transition name="fade" mode="out-in">
			<div v-if="items.length == 0" key="loading">
				Loading...
			</div>
			<div v-else class="Items" key="items">
				<Item
					v-for="item in items"
					:key="item.name"
					:item="item"
					@AddToCart="AddToCart"
				/>
			</div>
		</transition>
		<div
			v-for="(itemSelected, index) in selectedItems"
			:key="'selected' + index + itemSelected.name"
		>
			<b>Name:</b> {{ itemSelected.name }} <br />
			<b>Color:</b> {{ itemSelected.color }} <br />
			<b>Size:</b> {{ itemSelected.size }} <br />
			<hr />
		</div>
	</div>
</template>

<script>
import apiData from "../api-data";
import Item from "../components/Item";
import busData from "../busData";

export default {
	components: {
		Item,
	},
	data() {
		return {
			items: [],
			selectedItems: [],
		};
	},
	methods: {
		AddToCart(item) {
			this.selectedItems.push(item);
		},
	},
	created() {
		setTimeout(() => {
			this.items = apiData.items;
		}, 3000);
	},
	mounted() {
		busData.$on("ADD_CART", (item) => {
			this.selectedItems.push(item);
		});
	},
	beforeDestroy() {
		console.log("Bye!!!");
	},
};
</script>

<style lang="scss" scoped>
.Body {
	min-height: 90vh;
	background-color: white;
	.Items {
		display: flex;
	}
}
</style>
