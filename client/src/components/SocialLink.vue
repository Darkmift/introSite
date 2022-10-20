<template>
	<a :href="url" class="sm-button" target="_blank">
		<i :class="'fab ' + iconName"> </i>
	</a>
</template>

<style lang="scss" scoped>
.sm-button {
	margin: 0px 10px 0px;
	border: 1px solid $clr2;
	border-radius: 100%;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.85vw;

	&:hover {
		background: linear-gradient(to right, $clr1, $clr4);
	}

	.fab {
		color: $clr2;
		font-size: 16px;
	}
}
</style>

<script>
export default {
	name: "Social-Link",
	props: {
		url: String,
		iconName: String,
	},
	i18n: { messages: { he: {} } },
};
</script>