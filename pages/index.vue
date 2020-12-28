<template>
	<div class="lg:px-10">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
	
		<!-- cards -->
		<div class="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-start">
			<div class="col-span-1 lg:col-span-2">
				<div class="px-8 text-blue-600 flex">
					<div class="text-center lg:text-left w-full">
						<h1 class="text-3xl sm:text-5xl tracking-widest">NEIL VAN ALIÑO</h1>
						<h2 class="text-xl sm:text-3xl text-blue-400">full stack web developer</h2>
					</div>
				</div>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/about">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-3xl">About Me</h1>
						<p class="text-md">
							I am a Web Developer + Mechanical Engineer...international volunteer...
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/skills">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-3xl">Skills</h1>
						<p class="text-md">
							Django, NuxtJS, Tailwind...
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/projects">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-3xl">Projects</h1>
						<p class="text-md">
							View client and personal projects.
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/contact">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-3xl">Contact</h1>
						<p class="text-md">
							Email me or check my profiles.
						</p>
					</div>
				</NuxtLink>
			</div>
		</div>
		<!-- end cards -->
		
		<!-- avatar -->
		<div class="flex justify-center items-center">
			<img src="/person.png" class="avatar lg:object-cover lg:object-top lg:w-full" />
		</div>
		<!-- end avatar -->
				
	</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
		}
	},
	layout: 'HomePage',
}
</script>

<style>
.avatar {
	height: 450px;
}

	
</style>


