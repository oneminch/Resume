<template>
    <div class="mb-4 last:mb-0 print:mb-3">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
            <div>
                <h3 class="text-base font-semibold text-zinc-900">{{ education.degree }}</h3>
                <p class="text-zinc-700 font-medium">{{ education.institution }}
                    <Separator /> {{ education.location }}
                </p>
            </div>
            <span class="text-sm text-zinc-600 whitespace-nowrap">
                {{ education.startDate }} - {{ education.endDate }}
            </span>
        </div>

        <div v-if="education.gpa || education.honors" class="mb-2 text-sm text-zinc-700">
            <span v-if="education.gpa" class="mr-4">
                GPA: {{ education.gpa }}
            </span>
            <span v-if="education.honors">
                {{ education.honors }}
            </span>
        </div>

        <div v-if="education.relevantCourses" class="text-sm text-zinc-700">
            <span class="font-medium">Relevant Coursework:</span>
            <div class="flex flex-wrap gap-1.5 mt-1">
                <span v-for="course in education.relevantCourses" :key="course" class="pill">
                    {{ course }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Education } from '~/types'

interface Props {
    education: Education
}

defineProps<Props>()
</script>