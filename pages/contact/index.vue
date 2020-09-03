<template>
	<div class="flex flex-col justify-center items-center h-auto pb-10">
		<h1 class="text-3xl sm:text-4xl my-10">Send me an email or check out my profiles</h1>
		<div class="w-full sm:w-9/12">
			<div class="grid sm:grid-cols-2 gap-6">
				<div>
					<h2 class="text-2xl mb-8">To: Neil</h2>
					<form @submit.prevent>
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							Name
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-name" type="text">
						</div>
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-email">
							Email
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-email" type="email">
						</div>
						<div class="w-full px-3 mb-6">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-message">
							Message
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:bg-white" id="grid-first-message" type="text">
						</div>
						<div class="w-full px-3">
							<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded" type="submit">
							Send
							</button>
						</div>
					</form>
				</div>
				<div>
					<h2 class="text-2xl mb-8 mt-10 sm:mt-0 sm:text-center">Profiles</h2>
					<div class="flex flex-col items-center">
						<a href="https://github.com/neil-vqa" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-400 py-6 px-8 my-3 border rounded-lg">GitHub</div>
						</a>
						<a href="https://www.upwork.com/o/profiles/users/~0169060d088879731f/?s=1110580755107926016" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-400 py-6 px-8 my-3 border rounded-lg">Upwork</div>
						</a>
						<a href="https://www.linkedin.com/in/neilvan-qa/" target="_blank" class="tracking-wide text-gray-700 text-md font-bold">
							<div class="bg-gray-200 hover:bg-gray-400 py-6 px-8 my-3 border rounded-lg">LinkedIn</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
	}
}
</script>

