<template>
	<button @click="handlePrint"
		class="w-12 h-12 flex items-center justify-center fixed bottom-6 right-6 animate-gradient bg-linear-to-br from-accent to-yellow-500 hover:bg-accent/80 cursor-pointer text-white p-3 rounded-full inset-shadow-xs inset-shadow-zinc-200 transition-colors no-print z-50"
		title="Print or Save as PDF">
		<Icon name="heroicons:printer-16-solid" class="w-5 h-5" />
	</button>
</template>

<script setup lang="ts">
const handlePrint = () => {
	window.print()
}
</script>