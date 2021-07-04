<template>
	<nav class="navbar" :class="{ 'fixed-top-black': scrollY > 200 }">
		<div class="container flex j-around a-center">
			<a class="navbar-brand" @click="scrollTo('navbar')">Meet Me</a>

			<ul class="links flex j-around">
				<li class="nav-item">
					<a class="nav-link" @click="scrollTo('services')">Specialities</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" @click="scrollTo('portfolio')">Portfolio</a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" @click="scrollTo('me')">Me</a>
				</li> -->
				<li class="nav-item">
					<a class="nav-link" href="mailto:avi@koenig.co.il" target="_blank">Contact</a>
					<!-- <a class="nav-link" @click="scrollTo('contact')">Contact</a> -->
				</li>
			</ul>

			<button
				class="navbar-toggler btn"
				type="button"
				@click="scrollTo('navbar')"
			>
				<i class="fas fa-bars"></i>
			</button>
		</div>
	</nav>
</template>

<style scoped lang="scss">
.navbar {
	background-color: $clr7;
	position: fixed;
	width: 100%;
	z-index: 5;

	&.fixed-top-black {
		background-color: $clr7;
		padding-top: 15px;
		padding-bottom: 15px;

		.links {
			.nav-item {
				.nav-link {
					font-size: 90%;
				}
			}
		}
	}

	.navbar-toggler {
		font-size: 16px;
		right: 0;
		padding: 13px;
		text-transform: uppercase;
		color: $clr2;
		border: 0;
		background-color: $clr1;
		font-family: $Montserrat;
		text-transform: uppercase;
		display: block;
	}
	.navbar-brand {
		color: $clr1;
		font-family: $Kaushan;

		&:active,
		&:focus,
		&:hover {
			color: $clr8;
		}
	}

	.links {
		display: none;
		.nav-item {
			.nav-link {
				font-size: 105%;
				font-weight: 400;
				padding: 0.75em 0;
				margin-left: 20px;
				letter-spacing: 1px;
				color: $clr2;
				font-family: $Montserrat;
				text-transform: uppercase;
				cursor: pointer;
				&:active,
				&:hover {
					color: $clr1;
				}
			}
		}
	}

	@include for-normal-wide-layout {
		background-color: transparent;
		padding-top: 25px;
		padding-bottom: 25px;
		-webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
		-moz-transition: padding-top 0.3s, padding-bottom 0.3s;
		transition: padding-top 0.3s, padding-bottom 0.3s;
		border: none;

		.navbar-brand {
			font-size: 1.75em;
			-webkit-transition: all 0.3s;
			-moz-transition: all 0.3s;
			transition: all 0.3s;
		}

		.navbar-nav {
			.nav-item {
				.nav-link {
					padding: 1.1em 1em !important;
				}
			}
		}

		.navbar-shrink {
			padding-top: 0;
			padding-bottom: 0;
			background-color: $clr7;
			.navbar-brand {
				font-size: 1.25em;
				padding: 12px 0;
			}
		}

		.links {
			display: flex;
		}
		.navbar-toggler {
			display: none;
		}
	}
}
</style>

<script>
export default {
	name: "Navbar",
	computed: {
		scrollY() {
			return this.$store.getters.scrollPosition;
		},
	},
	methods: {
		scrollTo(target) {
			this.$scrollTo(".home", 500, {});
		},
	},
};
</script>