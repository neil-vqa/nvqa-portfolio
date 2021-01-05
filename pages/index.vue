<template>
	<div class="max-w-screen-md mx-auto my-16">
		<div class="text-center">
			<h1 class="text-6xl capitalize font-bold tracking-wide">neil van aliño</h1>
			<h1 class="text-4xl capitalize">full stack web developer</h1>
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
	@apply h-64 w-5/6 mx-auto object-cover opacity-50 my-20;
}

	
</style>


