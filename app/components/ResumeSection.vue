<template>
    <section class="mb-8 print:mb-6">
        <h2 class="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wide print:text-base print:mb-2">
            {{ title }}
        </h2>
        <slot />
    </section>
</template>

<script setup lang="ts">
interface Props {
    title: string
}

defineProps<Props>()
</script>