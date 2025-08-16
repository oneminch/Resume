<template>
    <div class="space-y-3">
        <div v-for="skillGroup in skills" :key="skillGroup.category" class="text-sm">
            <span class="font-bold text-zinc-900 mr-2">{{ skillGroup.category }}:</span>
            <span class="inline-flex flex-wrap gap-1.5">
                <span v-for="skill in skillGroup.items" :key="skill" class="pill">
                    {{ skill }}
                </span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/types'

defineProps<{
    skills: Skill[]
}>()
</script>