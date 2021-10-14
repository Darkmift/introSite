<template>
	<div id="app">
		<app-header />

		<router-view class="page" />
		<app-footer />
	</div>
</template>

<style lang="scss">
.page {
	padding-top: 150px;
	margin-bottom: 20vh;
}
</style>

<script>
import AppNavBar from "./components/Navbar";
import AppHeader from "./components/Header";
import AppFooter from "./components/AppFooter.vue";
export default {
	methods: {
		updateScroll() {
			this.$store.commit({
				type: "setScrollPosition",
				scrollPosition: window.scrollY,
			});
		},
	},

	mounted() {
		window.addEventListener("scroll", this.updateScroll);
	},
	destroy() {
		window.removeEventListener("scroll", this.updateScroll);
	},
	components: { AppNavBar, AppHeader, AppFooter },
};
</script>
