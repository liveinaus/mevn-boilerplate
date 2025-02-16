<script setup>
import H3 from "./H3.vue";
const titles = [
	{
		title: "Useful Links",
		content: [
			{ url: "#", name: "Home" },
			{ url: "#", name: "API" },
			{ url: "blog", name: "Blog" },
		],
	},
	{
		title: "Projects",
		content: [
			{ url: "#", name: "Documentation" },
			{ url: "#", name: "FAQ" },
		],
	},
	{
		title: "Posts",
		content: [
			{ url: "#", name: "Post 1" },
			{ url: "#", name: "Post 2" },
		],
	},
];
</script>

<template>
	<div class="container">
		<div id="Footer">
			<div class="logo">LiveInAus</div>
			<div class="row">
				<H3
					:class="['col-md-4']"
					v-for="h3 in titles"
					:key="h3.title"
					:data="h3"
					>{{ h3.title }}</H3
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
$color: #353353;
$color2: #e3403a;
$color3: #747589;
$color4: #ffd15c;
@mixin font-size-xs {
	font-size: 12px;
}
@mixin font-size-md {
	font-size: 14px;
}
@mixin font-size-nm {
	font-size: 16px;
}
@mixin font-size-lg {
	font-weight: bold;
	font-size: 21px;
	font-family: "Concert One", cursive;
	letter-spacing: 2px;
}
@mixin font-size-xl {
	font-weight: bold;
	font-size: 30px;
	font-family: "Concert One", cursive;
	letter-spacing: 3px;
}

.container-fluid {
	max-width: 1600px;
}

#Footer {
	background-color: #fff;
	padding: 50px;
	margin-top: 30px;
	border-radius: 5px;
	box-shadow: 12px 12px 24px 0 #e1e8fa, -12px -12px 24px 0 #e1e8fa;
	.logo {
		color: $color;
		margin-bottom: 50px;
		@include font-size-xl;
	}
	h3 {
		color: $color2;
		@include font-size-lg;
	}
	a {
		color: $color3;
		display: block;
		margin-top: 15px;
		&:hover {
			color: $color2;
		}
	}
}
</style>
