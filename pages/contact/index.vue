<template>
	<div class="flex flex-col justify-center items-center h-auto pb-10">
		<h1 class="text-3xl sm:text-4xl my-10 text-center">Send me an email or check out my profiles</h1>
		<div class="w-full sm:w-9/12">
			<div class="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
				<div class="bg-blue-600 rounded-md p-4 sm:p-8 shadow-xl text-white">
					<h2 class="text-2xl mb-8">To: Neil</h2>
					<form @submit.prevent="sendmail">
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
							Name
							</label>
							<input v-model="name" required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-name" type="text">
						</div>
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-email">
							Email
							</label>
							<input v-model="email" required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-email" type="email">
						</div>
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-message">
							Message
							</label>
							<textarea v-model="message" required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-message" type="text">
							</textarea>
						</div>
						<div class="w-full px-3">
							<button disable="disabler" class="shadow bg-blue-800 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded" type="submit">
							Send
							</button>
							<p v-show="disabler" class="text-lg font-bold mt-3">Sending...</p>
							<p v-show="done" class="text-lg font-bold mt-3">Thanks! I'll reply as soon as possible.</p>
						</div>
					</form>
				</div>
				<div class="bg-blue-600 rounded-md p-4 sm:p-8 shadow-xl text-white">
					<h2 class="text-2xl mb-8 sm:text-center">Profiles</h2>
					<div class="flex flex-col items-center">
						<a href="https://github.com/neil-vqa" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-300 py-6 px-8 my-3 border rounded-lg">GitHub</div>
						</a>
						<a href="https://www.upwork.com/o/profiles/users/~0169060d088879731f/?s=1110580755107926016" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-300 py-6 px-8 my-3 border rounded-lg">Upwork</div>
						</a>
						<a href="https://www.linkedin.com/in/neilvan-qa/" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-300 py-6 px-8 my-3 border rounded-lg">LinkedIn</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	head: {
		title: 'Contact Info | Neil Van Alino',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Send me an email or check out my profiles.'
			}
		],
	},
	data() {
		return {
			name: '',
			email: '',
			message: '',
			disabler: false,
			done: false
		}
	},
	methods: {
		sendmail() {
			this.done = false,
			this.disabler = true;
			
			axios.post('https://formspree.io/mbjzzwjy', {
				"name": this.name,
				"email": this.email,
				"message": this.message,
			}).then(response => {
				this.name = '',
				this.email = '',
				this.message = '',
				this.done = true,
				this.disabler = false
			}).catch(error => {
				if (error.response) {
					this.disabler = false
					alert('There was an error. Please try again.');
				}
			});
		},
	},
}
</script>






















