<template>
	<div id="app">
		<!-- <app-nav-bar /> -->
		<app-header />

		<router-view class="page" />
	</div>
</template>

<style lang="scss">
.page {
	height: 100vh;
}
</style>

<script>
import AppNavBar from "./components/Navbar";
import AppHeader from "./components/Header";
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
	components: { AppNavBar, AppHeader },
};
</script>
