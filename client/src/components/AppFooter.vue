<template>
	<!-- footer main area start -->

	<footer class="app-footer">
		<!-- links -->

		<div class="footer-links">
			<div class="menu">
				<h4 class="menu-title">Menu</h4>
				<a href="#" class="menu-links">Join Me</a>
				<a href="#" class="menu-links">My Blogs</a>
				<a href="#" class="menu-links">My Journey</a>
				<a href="#" class="menu-links">About</a>
			</div>

			<div class="menu">
				<h4 class="menu-title">Other Pages</h4>
				<a href="#" class="menu-links">Contact Us</a>
				<a href="#" class="menu-links">Privacy Policy</a>
				<a href="#" class="menu-links">FAQ</a>
				<a href="#" class="menu-links">Terms of use</a>
			</div>
		</div>

		<!-- Social media icons line Start -->

		<div class="sm-handle">
			<social-link
				v-for="(social, index) in socials"
				:key="index"
				:url="social.url"
				:iconName="'fa-' + social.icon"
			/>
		</div>

		<!-- copyright area -->

		<p class="copyright">
			&copy; Cofferrights {{ year }} |
			<a href="https://github.com/Darkmift" target="_blank">Avi E. Koenig</a>
		</p>
	</footer>

	<!-- footer main area end -->
</template>

<style scoped lang="scss">
.app-footer {
	background-color: $clr7;
	font-family: $Montserrat !important;
	text-align: center;
	padding: 2vh;
	bottom: 0;
	width: 100%;

	/* footer all links*/

	.footer-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		color: $clr2;
		letter-spacing: 1.5px;
		word-spacing: 2px;
		.menu {
			.menu-title {
				margin-bottom: 10px;
			}
			.menu-links {
				margin: 0 20px;
				display: block;
				color: $clr2;
				cursor: pointer;
				font-family: $Roboto;
				font-weight: normal;

				&:hover {
					color: $clr1;
				}
			}
		}
	}

	.sm-handle {
		display: flex;
		padding: 2rem;
		justify-content: center;
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
	}

	/* copyright area */

	.copyright {
		font-size: 10px;
		margin: auto;
		color: white;
		letter-spacing: 1.5px;
		word-spacing: 2px;
		a {
			color: #fff;
			font-size: 12px;
			cursor: pointer;
		}
	}

	/* screen change */

	@media (max-width: 700px) {
		.footer-links {
			grid-template-columns: 1fr;
		}
	}
}
</style>

<script>
import SocialLink from "./SocialLink.vue";
export default {
	name: "App-Footer",
	components: { SocialLink },
	data() {
		return {
			year: new Date().getFullYear(),
			socials: [
				{
					url: "https://www.linkedin.com/in/avi-koenig-67159620b/",
					icon: "linkedin",
				},
				{
					url: "https://github.com/Darkmift",
					icon: "github",
				},
				{
					url: "https://twitter.com/",
					icon: "twitter",
				},
				{
					url: "https://www.instagram.com/",
					icon: "instagram",
				},
				{
					url: "https://www.facebook.com/",
					icon: "facebook-f",
				},
			],
		};
	},
};
</script>