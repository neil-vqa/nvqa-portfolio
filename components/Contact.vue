<template>
  <div class="my-32">
    <div class="flex justify-center items-center space-x-16">
    	<a href="https://github.com/neil-vqa" target="_blank" class="cursor-pointer profile-link">
				<img src="/logo/github.png" class="w-20	object-contain" />
			</a>
			<a href="https://www.upwork.com/o/profiles/users/~0169060d088879731f/?s=1110580755107926016" target="_blank" class="cursor-pointer profile-link">
				<img src="/logo/upwork.png" class="w-20	object-contain" />
			</a>
			<a href="https://www.linkedin.com/in/neilvan-qa/" target="_blank" class="cursor-pointer profile-link">
				<img src="/logo/linkedin.png" class="w-20	object-contain" />
			</a>
			<a href="https://www.onlinejobs.ph/jobseekers/info/717456" target="_blank" class="cursor-pointer profile-link">
				<img src="/logo/ojph.jpg" class="w-20	object-contain" />
			</a>
    </div>
    <div class="contact-card p-5 w-11/12 sm:p-16 sm:w-3/4">
    	<div class="flex justify-center items-center space-x-5 mb-10">
    		<p class="text-lg">Email Me</p>
		  	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail profile-link" width="50" height="50" 
		  		viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<polyline points="3 7 12 13 21 7" />
				</svg>
			</div>
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
					<button disable="disabler" 
						class="shadow bg-blue-800 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded" 
						type="submit">
						Send
					</button>
					<p v-show="disabler" class="text-lg font-bold mt-3">Sending...</p>
					<p v-show="done" class="text-lg font-bold mt-3">Thanks! I'll reply as soon as possible.</p>
				</div>
			</form>
    </div>
  </div>
</template>

<script>
export default {
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
			
			this.$axios.$post('https://formspree.io/mbjzzwjy', {
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

<style>
.contact-card {
	@apply bg-gray-900 my-16 mx-auto shadow-2xl;
}

.profile-link:hover {
	@apply transition duration-300;
	transform: translateY(-15px);
}

</style>
