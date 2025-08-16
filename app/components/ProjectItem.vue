<template>
    <div class="mb-6 last:mb-0 print:mb-4">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
            <h3 class="text-base font-semibold text-zinc-900">{{ project.name }}</h3>
            <div class="flex gap-2">
                <nuxt-link v-if="project.link" :href="project.link" target="_blank"
                    class="text-accent hover:text-accent/50 focus-visible:global-focus text-xs flex items-center gap-1 no-print">
                    <Icon name="heroicons:link-16-solid" class="w-3 h-3" />
                    Demo
                </nuxt-link>
                <nuxt-link v-if="project.github" :href="project.github" target="_blank"
                    class="text-zinc-600 hover:text-zinc-800 focus-visible:global-focus text-xs flex items-center gap-1 no-print">
                    <Icon name="simple-icons:github" class="w-3 h-3" />
                    Code
                </nuxt-link>
            </div>
        </div>

        <p class="text-zinc-700 mb-3 leading-relaxed text-sm">
            {{ project.description }}
        </p>

        <ul v-if="project.highlights" class="list-disc list-inside text-zinc-700 mb-3 space-y-1">
            <li v-for="highlight in project.highlights" :key="highlight" class="leading-relaxed text-sm">
                {{ highlight }}
            </li>
        </ul>

        <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in project.technologies" :key="tech" class="pill">
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
    project: Project
}

defineProps<Props>()
</script>