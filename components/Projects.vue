<template>
  <div class="my-32">
  	<!-- projects list -->
  	<div class="grid grid-cols-1 gap-10">
		  <div v-for="(project, index) in projects" :key="index">
		  	<div class="project-card grid grid-cols-1 sm:grid-cols-5" @click="showModal(project)">
		  		<div class="icon-col p-10 sm:pr-0">
		  			<div class="border-2 border-white rounded-full p-5">
							<img v-if="project.tag == 'data'" src="/svg/data.svg"/>
							<img v-else-if="project.tag == 'map'" src="/svg/map.svg"/>
							<img v-else-if="project.tag == 'ecom'" src="/svg/ecom.svg"/>
							<img v-else-if="project.tag == 'platform'" src="/svg/platform.svg"/>
							<img v-else-if="project.tag == 'app'" src="/svg/app.svg"/>
							<img v-else src="/svg/general.svg"/>
						</div>
		  		</div>
		  		<div class="details-col">
		  			<h5 class="text-2xl font-semibold">{{ project.name }}</h5>
		  			<p class="text-lg text-gray-500">{{ project.description }}</p>
		  		</div>
		  	</div>
		  </div>
    </div>
    
    <!-- modals -->
    <vue-final-modal v-model="show" name="projectModal" classes="modal-container">
		  <template v-slot="{ params }">
	  		<div class="modal-card">
	  			<div class="px-5 py-3 md:px-8 md:py-5 modal-title">
	  				<h5 class="text-lg sm:text-2xl truncate font-semibold">{{ params.name }}</h5>
	  				<div class="pl-3">
	  					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x cursor-pointer hover:text-red-500" 
	  						width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
	  						fill="none" stroke-linecap="round" stroke-linejoin="round" @click="closeModal">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<rect x="4" y="4" width="16" height="16" rx="2" />
								<path d="M10 10l4 4m0 -4l-4 4" />
							</svg>
	  				</div>
	  			</div>
	  			<div class="p-5 md:px-8 md:py-6 space-y-6 max-w-screen-sm">
	  				<div class="flex space-x-5">
							<div v-for="(stack, index) in params.stack" :key="index">
								<img :src="stack.icon" class="w-20 h-10 object-contain py-1 px-2 rounded-lg bg-white overflow-hidden" :alt="stack.name" />
							</div>
	  				</div>
	  				<div class="flex justify-center project-image">
	  					<img :src="params.image" class="w-full h-56 object-cover rounded-lg overflow-hidden" :alt="params.slug" />
	  				</div>
	  				<div class="">
	  					<a :href="params.link" target="_blank" 
	  					class="px-3 py-2 bg-black text-white hover:bg-white hover:text-black rounded-lg transition duration-200">Go to site&nearr;
	  					</a>
	  				</div>
	  			</div>
	  		</div>
		  </template>
		</vue-final-modal>
    
  </div>
</template>

<script>
export default {
	props: ['projects'],
	data() {
		return {
			show: false,
		}
	},
	methods: {
		showModal(data) {
			this.$vfm.show('projectModal', data);
		},
		closeModal() {
			this.$vfm.hide('projectModal');
		},
	},
}
</script>

<style>
.project-card {
	@apply overflow-hidden shadow-2xl cursor-pointer;
	background-color: #00072D;
}

.project-card:hover {
	@apply transition duration-200;
	background-color: #001C55;
}

.project-image {
	min-width: 300px;
}

.icon-col {
	@apply col-span-1 flex justify-center items-center;
}

.details-col {
	@apply col-span-4 p-10;
}

.modal-container {
	@apply flex items-center justify-center bg-black bg-opacity-75;
}

.modal-card {
	@apply overflow-auto;
	background-color: #2B2B2B;
	max-height: 90vh;
	border-top-left-radius: 2.5rem;
	border-bottom-right-radius: 2.5rem;
}

.modal-title {
	@apply flex justify-between items-center;
	background-color: #001C55;
}

</style>
