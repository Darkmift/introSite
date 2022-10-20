<template>
	<div class="specialties">
		<div class="title flex columns j-center a-center">
			<h2 class="specialties-heading">Specialities</h2>
			<h2 class="specialties-subheading text-muted">
				See below - please note site is WIP...between freelancing and day to day
				work I lack to time to make this better.<br />
				Please feel free to review my
				<a href="https://github.com/Darkmift" target="_blank">Github</a> &amp;
				<a href="https://gist.github.com/Darkmift" target="_blank">Gists</a>
			</h2>
		</div>
		<!-- row1 -->
		<div class="card-container flex j-center">
			<!-- card1 nodejs-->
			<card iconClass="fab fa-node-js" label="Node.js">
				<p class="text-muted">
					Proficient with NodeJS composing microservices,rest
					API,sockets,mailers and much more.
				</p>
			</card>
			<!-- card2 php-->
			<card iconClass="fab fa-php" label="PHP">
				<p class="text-muted">
					Proficient with PHP using pure PHP to compose various SSR app,rest API
					and also using laravel &amp; Symphony
				</p>
			</card>
		</div>
		<!-- row2 -->
		<div class="card-container flex j-center">
			<!-- card1 Vue-->
			<card iconClass="fab fa-vuejs" label="Vue">
				<p class="text-muted">
					Proficient with the use of VUE 2 &amp; 3 in creating apps with complex
					state,use of Vuetify to make UI conforming to industry stabdarts
				</p>
			</card>
			<!-- card2 React-->
			<card iconClass="fab fa-react" label="React">
				<p class="text-muted">
					Solid grasp of React core &amp; state mangement.
				</p>
			</card>
			<!-- card Angular -->
			<card iconClass="fab fa-angular" label="Angular">
				<p class="text-muted">
					Solid grasp of core concepts MVC patterns,services and related ngrx
					patterns.
				</p>
			</card>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.specialties {
	.title {
		.specialties-heading {
			font-size: 40px;
			margin-top: 0;
			margin-bottom: 15px;
		}

		.specialties-subheading {
			// font-size: 16px;
			font-weight: 400;
			font-style: italic;
			margin-bottom: 75px;
			text-transform: none;
			font-family: $Droid;
			text-align: center !important;
		}
		a {
			color: $clr1;
		}
	}

	.card-container {
		flex-direction: column;
	}

	@media (min-width: $break-normal-wide) {
		@include for-normal-layout;
		.card-container {
			flex-direction: row;
			padding-bottom: 7vh;
		}
	}
}
</style>

<script>
import Card from "./Card";
export default {
	name: "Specialties",
	components: { Card },
};
</script>