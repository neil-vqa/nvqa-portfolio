<template>
	<div class="flex flex-col justify-center items-center h-auto pb-10">
		<h1 class="text-3xl sm:text-4xl my-10 text-center">Frameworks, tech stack, and other relevant skills</h1>
		<div class="w-full sm:w-9/12">
			<div class="mb-12">
				<h2 class="text-2xl mb-4">Web Development</h2>
				<div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
					<div class="bg-blue-600 rounded-md px-2 py-2 shadow-xl text-white text-xs lg:text-base sm:font-bold flex justify-center items-center" v-for="web in webSkills">
						{{ web }}
					</div>
				</div>
			</div>
			<div class="mb-12">
				<h2 class="text-2xl mb-4">Data Visualization</h2>
				<div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
					<div class="bg-blue-600 rounded-md px-2 py-2 shadow-xl text-white text-xs lg:text-base sm:font-bold flex justify-center items-center" v-for="data in dataSkills">
						{{ data }}
					</div>
				</div>
			</div>
			<div class="mb-12">
				<h2 class="text-2xl mb-4">Other Relevant</h2>
				<div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
					<div class="bg-blue-600 rounded-md px-2 py-2 shadow-xl text-white text-xs lg:text-base sm:font-bold flex justify-center items-center" v-for="other in otherSkills">
						{{ other }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'My Skills | Neil Van Alino',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Programming languages, frameworks, tech stack, and other relevant skills of Neil Van Alino.'
			}
		],
	},
	data() {
		return {
			webSkills: ['Django','Django REST','Strapi CMS','NGINX','Linode','Netlify','Heroku','Materialize',
						'Bootstrap','Tailwind','Vue.js','NuxtJS','Django + Vue','Strapi + Nuxt'],
			dataSkills: ['Plotly','Matplotlib','Dash','Streamlit','Mapbox','Pandas','Numpy','Jupyter'],
			otherSkills: ['Git','Photoshop','Virtual Assistance','Public Speaking',],
		}
	},
}
</script>


































