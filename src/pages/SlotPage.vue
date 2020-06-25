<template>
	<div>
		<SlotExample>
			sadsaasdad
			<div slot="title">
				custom title
			</div>
			<template slot="content">
				Custom content
			</template>
		</SlotExample>
	</div>
</template>

<script>
import SlotExample from "@/components/SlotExample";
export default {
	components: {
		SlotExample,
	},
};
</script>

<style></style>
