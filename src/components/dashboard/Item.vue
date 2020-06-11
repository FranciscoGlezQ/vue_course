<template>
	<div class="Item">
		<img :src="item.img" alt="" class="Item_Image" />
		<p>
			{{ item.name }}
		</p>
		<p>
			<select v-model="selectedSize" name="Size" id="">
				<option
					v-for="size in item.sizes"
					:value="size"
					:key="'size' + size"
				>
					{{ size }}
				</option>
			</select>
		</p>
		<p>
			<select v-model="selectedColor" name="Color" id="">
				<option
					v-for="color in item.colors"
					:value="color"
					:key="'color' + color"
				>
					{{ color }}
				</option>
			</select>
		</p>
		<p>
			{{ item.stock }}
		</p>

		<button class="Item__Button" @click="AddToCart">
			Add to Cart
		</button>
	</div>
</template>

<script>
import busData from "@/busData";
export default {
	props: {
		item: {
			default: () => ({}),
			required: true,
			type: Object,
		},
	},
	data() {
		return {
			selectedColor: "Red",
			selectedSize: "Small",
		};
	},
	methods: {
		AddToCart() {
			const data = {
				name: this.item.name,
				color: this.selectedColor,
				size: this.selectedSize,
			};

			busData.$emit("ADD_CART", data);
		},
	},
};
</script>

<style lang="scss" scoped>
.Item {
	width: 200px;
	padding: 10px;

	&_Image {
		width: 100px;
	}
}
</style>
