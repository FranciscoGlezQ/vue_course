<template>
	<footer class="Footer bg-light">
		<router-link :to="{ path: '/foo' }">Go to Foo</router-link> |
		<router-link to="/bar">Go to Bar</router-link>

		Footer
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Footer {
	background-color: darkcyan;
	color: white;
	padding: 10px;
}
</style>
