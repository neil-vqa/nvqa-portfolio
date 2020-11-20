<template>
	<div class="lg:p-10">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
			<div class="col-span-1 lg:col-span-2">
				<NuxtLink to="/">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700 flex">
						<div class="flex-auto">
							<h1 class="text-3xl sm:text-6xl">NEIL VAN ALIÑO</h1>
							<h2 class="text-xl sm:text-4xl">full stack web developer</h2>
						</div>
						<div class="flex-auto justify-center items-center hidden">
							<img src="/avatar.jpg" class="h-40 rounded-full"/>
						</div>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/about">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-4xl">About Me</h1>
						<p class="text-md">
							I am a Web Developer + Mechanical Engineer...international volunteer...
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/skills">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-4xl">Skills</h1>
						<p class="text-md">
							Django, NuxtJS, Tailwind...
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/projects">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-4xl">Projects</h1>
						<p class="text-md">
							View client and personal projects.
						</p>
					</div>
				</NuxtLink>
			</div>
			<div class="col-span-1">
				<NuxtLink to="/contact">
					<div class="bg-blue-600 rounded-lg shadow-xl py-5 px-8 text-white hover:bg-blue-700">
						<h1 class="text-4xl">Contact</h1>
						<p class="text-md">
							Email me or check my profiles.
						</p>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Neil Van Alino | Web Development Portfolio',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Learn about Neil Van Alino: his skills and projects.'
			}
		],
	}
}
</script>

