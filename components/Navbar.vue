<template>
	<div class="flex justify-center">
		<NuxtLink to="/">
			<div class="flex flex-col justify-center items-center mx-2 sm:mx-4">
				<svg viewBox="0 0 20 20" fill="currentColor" class="home w-6 h-6 sm:w-10 sm:h-10"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
				<h3 class="text-xs sm:text-base">Home</h3>
			</div>
		</NuxtLink>
		<NuxtLink to="/about">
			<div class="flex flex-col justify-center items-center mx-2 sm:mx-4">
				<svg viewBox="0 0 20 20" fill="currentColor" class="user-circle w-6 h-6 sm:w-10 sm:h-10"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
				<h3 class="text-xs sm:text-base">About</h3>
			</div>
		</NuxtLink>
		<NuxtLink to="/skills">
			<div class="flex flex-col justify-center items-center mx-2 sm:mx-4">
				<svg viewBox="0 0 20 20" fill="currentColor" class="code w-6 h-6 sm:w-10 sm:h-10"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				<h3 class="text-xs sm:text-base">Skills</h3>
			</div>
		</NuxtLink>
		<NuxtLink to="/projects">
			<div class="flex flex-col justify-center items-center mx-2 sm:mx-4">
				<svg viewBox="0 0 20 20" fill="currentColor" class="view-grid w-6 h-6 sm:w-10 sm:h-10"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
				<h3 class="text-xs sm:text-base">Projects</h3>
			</div>
		</NuxtLink>		
		<NuxtLink to="/contact">
			<div class="flex flex-col justify-center items-center mx-2 sm:mx-4">
				<svg viewBox="0 0 20 20" fill="currentColor" class="mail w-6 h-6 sm:w-10 sm:h-10"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
				<h3 class="text-xs sm:text-base">Contact</h3>
			</div>
		</NuxtLink>
	</div>
</template>

<script>
export default {}
</script>

