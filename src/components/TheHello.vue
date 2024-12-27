<template>
	<div class="flex flex-col items-center gap-6 md:w-1/2">
		<h1 class="m-auto w-4/5 rounded-2xl border border-teal-300 px-2 py-0.5 text-center text-teal-300 md:w-auto">
			Mitzune's Vue3 Starter v1.0
		</h1>

		<p class="text-xl font-bold text-teal-400 md:text-6xl">Vue 3 Starter Template</p>
		<p class="w-4/5 text-lg leading-8 text-white">
			A modern, pre-configured Vue 3 starter template with TypeScript, ESLint, Prettier, Tailwind, and Husky
			integration. Jumpstart your Vue.js projects with best practices and optimized development workflows.
		</p>

		<div class="flex w-4/5 flex-col gap-4 md:flex-row md:justify-evenly">
			<a href="https://github.com/OriginalCube/nuxt-starter" target="_blank">
				<button
					class="flex w-full items-center justify-center gap-2 rounded-md border border-teal-400 bg-teal-500 px-4 py-2 text-slate-800 hover:bg-teal-500/80"
				>
					<Icon icon="carbon:logo-github" class="size-6" /> <span>Starter Github</span>
				</button>
			</a>
			<a href="https://vuejs.org/guide/introduction.html" target="_blank">
				<button
					class="flex w-full items-center justify-center gap-2 rounded-md border border-teal-300 bg-teal-800 px-4 py-2 text-teal-300 hover:bg-teal-800/80"
				>
					Learn more about Vue3 <Icon icon="carbon:arrow-right" class="size-6" />
				</button>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
