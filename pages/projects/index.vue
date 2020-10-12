<template>
	<div class="flex flex-col justify-center items-center h-auto pb-10">
		<h1 class="text-3xl sm:text-4xl my-10 text-center">Client and personal projects</h1>
		<div class="w-full sm:w-9/12">
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
				<div class="bg-blue-600 rounded-md shadow-xl text-white overflow-hidden" v-for="project in projects" :key="project.id">
					<div class="mb-5 flex justify-center">
						<img :src="project.pic.url" class="w-full"/>
					</div>
					<div class="p-5">
						<span class="text-xl font-bold">{{ project.name }}</span>
						<p class="text-base mt-5 mb-3">{{ project.text }}</p>
						<a :href="project.link" target="_blank" class="underline">Visit site</a>
					</div>
				</div>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" v-if="loader">
				<div class="bg-blue-600 rounded-md shadow-xl overflow-hidden animate-pulse">
					<div class="mb-5 bg-gray-400 h-40 w-full"></div>
					<div class="p-5">
						<p class="bg-gray-400 h-8 w-full"></p>
						<p class="bg-gray-400 h-6 w-2/3 mt-5"></p>
						<p class="bg-gray-400 h-6 w-3/4 mt-3"></p>
					</div>
				</div>
				<div class="bg-blue-600 rounded-md shadow-xl overflow-hidden animate-pulse">
					<div class="mb-5 bg-gray-400 h-40 w-full"></div>
					<div class="p-5">
						<p class="bg-gray-400 h-8 w-full"></p>
						<p class="bg-gray-400 h-6 w-2/3 mt-5"></p>
						<p class="bg-gray-400 h-6 w-3/4 mt-3"></p>
					</div>
				</div>
				<div class="bg-blue-600 rounded-md shadow-xl overflow-hidden animate-pulse">
					<div class="mb-5 bg-gray-400 h-40 w-full"></div>
					<div class="p-5">
						<p class="bg-gray-400 h-8 w-full"></p>
						<p class="bg-gray-400 h-6 w-2/3 mt-5"></p>
						<p class="bg-gray-400 h-6 w-3/4 mt-3"></p>
					</div>
				</div>
				<div class="bg-blue-600 rounded-md shadow-xl overflow-hidden animate-pulse xl:hidden">
					<div class="mb-5 bg-gray-400 h-40 w-full"></div>
					<div class="p-5">
						<p class="bg-gray-400 h-8 w-full"></p>
						<p class="bg-gray-400 h-6 w-2/3 mt-5"></p>
						<p class="bg-gray-400 h-6 w-3/4 mt-3"></p>
					</div>
				</div>
			</div>
			
			<div class="text-center text-red-500" v-if="has_error">An error occured. Please refresh the page.</div>
			
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	head: {
		title: 'Projects | Neil Van Alino',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Client and personal projects of Neil Van Alino.'
			}
		],
	},
	data() {
		return {
			projects: [],
			loader: true,
			has_error: false,
		}
	},
	methods: {
		fetch() {
			axios.get('https://white-crema.herokuapp.com/projects')
				.then(response => {
					this.projects = response.data;
					this.loader = false
				})
				.catch(error => {
					if (error.response) {
						this.loader = false;
						this.has_error = true;
					}
				});
		}
	},
	created: function() {
		this.fetch();
	},
}
</script>

