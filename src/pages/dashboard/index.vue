<template>
	<div>
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

		<h2>{{ countItems }}</h2>
		{{ clothing }}
		<button class="btn btn-success" @click="changeColorinCloth">
			Change clothing
		</button>
		<div
			v-for="(itemSelected, index) in selectedItems"
			:key="'selected' + index + itemSelected.name"
		>
			<b>Name:</b> {{ itemSelected.name }} <br />
			<b>Color:</b> {{ itemSelected.color }} <br />
			<b>Size:</b> {{ itemSelected.size }} <br />
			<hr />
		</div>

		<CustomComponent />
	</div>
</template>

<script>
import apiData from "@/api-data";
import Item from "@/components/dashboard/Item";
import CustomComponent from "@/components/general/CustomComponent";
import busData from "@/busData";

export default {
	components: {
		Item,
		CustomComponent,
	},
	data() {
		return {
			items: [],
			selectedItems: [],
			countItems: -1,
			clothing: {
				color: "",
			},
		};
	},
	watch: {
		selectedItems: {
			immediate: true,
			handler: function() {
				this.countItems = this.selectedItems.length;
			},
		},
		clothing: {
			deep: true,
			handler: function() {
				alert("Clothing changed");
			},
		},
	},
	methods: {
		AddToCart(item) {
			this.selectedItems.push(item);
		},
		changeColorinCloth() {
			this.clothing.color = "red";
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

<style></style>
