<template>
	<div class="container slotExample">
		<slot name="title">
			<div class="row">
				<div class="col-12">
					Title
				</div>
			</div>
		</slot>
		<slot name="content">
			Hello from slot
		</slot>
		<slot name="footer"></slot>
		<slot></slot>
	</div>
</template>
