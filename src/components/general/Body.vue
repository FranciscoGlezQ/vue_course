<template>
	<div class="Body">
		<router-link :to="{ path: '/foo' }">Go to Foo</router-link> |
		<router-link to="/bar">Go to Bar</router-link>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.Body {
	min-height: 90vh;
	background-color: white;
	.Items {
		display: flex;
	}
}
</style>
