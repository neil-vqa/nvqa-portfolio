<template>
	<div class="flex flex-col justify-center items-center h-auto pb-10">
		<h1 class="text-3xl sm:text-4xl my-10 text-center">An introduction about me</h1>
		<div class="w-full sm:w-9/12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
			<div class="about-card lg:py-8 lg:px-10">
				<p>
					I am a Web Developer + Mechanical Engineer from the Philippines. The <strong class="text-xl">critical, disciplined, and holistic mindset</strong> molded by engineering has lead me to venture into data visualization and web development. 
				</p>
			</div>
			<div class="about-card lg:py-8 lg:px-10">
				<p>
					For the past 2 years after graduating, I have worked as a freelance data visualizer, engineering consultant, and CAD modeler. I am a <strong class="text-xl">team player</strong> by nature and also reliable and effective in working independently. 
				</p>
			</div>
			<div class="about-card lg:py-8 lg:px-10">
				<p>
					I am currently a full stack web developer. I do projects with <strong class="text-xl">Python as backend, serverless, and Vue.js/NuxtJS</strong> frontend projects. 
				</p>
			</div>
			<div class="about-card lg:py-8 lg:px-10">
				<p>
					Most importantly, I am an <strong class="text-xl">international volunteer</strong> helping all sorts of people to learn and benefit from <strong class="text-xl">God's Word.</strong>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'About Me | Neil Van Alino',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Introduction about Neil Van Alino.'
			}
		],
	}
}
</script>

