<template>
	<div class="max-w-screen-md mx-auto my-16">
		<div class="text-center">
			<h1 class="text-6xl capitalize font-semibold tracking-wide font-head">neil van aliño</h1>
			<h1 class="text-2xl capitalize">full stack web developer</h1>
		</div>
		<img src="/svg/divider.svg" class="divider-style"/>
		<div class="section">
			<p class="section-heading">Projects</p>
			<Projects :projects="projects" />
		</div>
		<img src="/svg/divider.svg" class="divider-style"/>
		<div class="section">
			<p class="section-heading">Contact</p>
			<Contact />
		</div>
		<img src="/svg/divider.svg" class="divider-style"/>
		<div class="section">
			<p class="section-heading">Something about me</p>
			<About />
		</div>
		<div class="mt-32">
			<img src="/nvqa_logo.png" class="w-1/3 mx-auto"/>
			<p class="text-center text-base mt-5 text-black">Web dev portfolio as of 2021</p>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			script: [
				{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
				/*{ 'src': 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
					'data-name': 'BMC-Widget',
					'data-id': 'neilvan',
					'data-description': 'Support me on Buy me a coffee!',
					'data-message': "Thank you for visiting. If you'd like, you can buy me a coffee! :D",
					'data-color': '#FF5F5F',
					'data-position': 'Right',
					'data-x_margin': '18',
					'data-y_margin': '18'
				}*/
			],
		}
	},
	layout: 'HomePage',
	async asyncData({ $content }) {
		const projects = await $content("projects").sortBy('name').fetch();
		
		return { projects };
	},
	data() {
		return {
			
		}
	},
}
</script>

<style>
.section {
	@apply px-5;
}

.section-heading {
	@apply text-3xl font-semibold border-l-8 border-gray-300 pl-5;
}

.divider-style {
	@apply h-64 w-5/6 mx-auto object-cover my-20;
	opacity: 60%;
}

	
</style>


