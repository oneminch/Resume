<template>
    <div class="mb-6 last:mb-0 print:mb-4">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
            <div>
                <h3 class="text-base font-semibold text-zinc-900">{{ experience.position }}</h3>
                <p class="text-zinc-700 font-medium">{{ experience.company }}
                    <Separator /> {{ experience.location }}
                </p>
            </div>
            <span class="text-sm text-zinc-600 whitespace-nowrap">
                {{ experience.startDate }} - {{ experience.endDate }}
            </span>
        </div>

        <p class="text-zinc-700 mb-2 leading-relaxed text-sm">
            {{ experience.description }}
        </p>

        <ul v-if="experience.achievements"
            class="marker:text-zinc-500 list-disc list-inside text-zinc-700 mb-3 space-y-1">
            <li v-for="achievement in experience.achievements" :key="achievement" class="leading-relaxed text-sm mb-1">
                {{ achievement }}
            </li>
        </ul>

        <div v-if="experience.technologies" class="flex flex-wrap gap-1.5">
            <span v-for="tech in experience.technologies" :key="tech" class="pill">
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types'

interface Props {
    experience: Experience
}

defineProps<Props>()
</script>