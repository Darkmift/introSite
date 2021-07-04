<template>
	<header class="header">
		<app-nav-bar />
		<div class="container">
			<div class="intro-text">
				<div class="intro-lead-in">Welcome To my Portfolio</div>
				<div class="intro-heading">It's Nice To Meet You</div>
				<button class="btn btn-xl" @click="scrollTo('services')">
					Tell Me More
				</button>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	text-align: center;
	color: white;
	background-image: url(~@/assets/img/header-bg.jpg);
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: center center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	.intro-text {
		padding-top: 150px;
		padding-bottom: 100px;

		.intro-lead-in {
			font-size: 22px;
			font-style: italic;
			line-height: 22px;
			margin-bottom: 25px;
			font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}

		.intro-heading {
			font-size: 75px;
			font-weight: 700;
			line-height: 75px;
			margin-bottom: 50px;
			font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
			text-transform: uppercase;
		}
	}

	@include for-normal-layout {
		.intro-text {
			padding-top: 300px;
			padding-bottom: 200px;

			.intro-lead-in {
				font-size: 40px;
				font-style: italic;
				line-height: 40px;
				margin-bottom: 25px;
				font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial,
					sans-serif;
			}

			.intro-heading {
				font-size: 75px;
				font-weight: 700;
				line-height: 75px;
				margin-bottom: 50px;
				font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial,
					sans-serif;
				text-transform: uppercase;
			}
		}
	}
}
</style>

<script>
import AppNavBar from "./Navbar";
export default {
	name: "app-header",
	methods: {
		scrollTo(target) {
			console.log(target);
		},
	},
	components: { AppNavBar },
};
</script>