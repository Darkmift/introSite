<template>
	<div class="card">
		<span class="icon-container">
			<i :class="[iconClass, 'fa-5x']"></i>
		</span>
		<h4 class="card-heading">{{ label }}</h4>
		<slot class="card-description"></slot>
	</div>
</template>

<style scoped lang="scss">
.card {
	text-align: center;
	margin: 0 2.5vw;
	.icon-container {
		font-size: 48px;
		.fab {
			color: $clr1;
		}
	}
	.card-heading {
		margin-top: 3vh;
	}
	.card-description {
		&* {
			text-align: center;
		}
	}
}
</style>

<script>
export default {
	name: "Card",
	props: {
		label: { type: String },
		iconClass: { type: String },
	},
};
</script>