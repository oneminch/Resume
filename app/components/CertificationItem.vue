<script setup lang="ts">
import type { Certification } from '~/types'

interface Props {
    cert: Certification
}

defineProps<Props>()
</script>

<template>
    <div class="space-y-1 mb-3">
        <h4 class="text-base font-semibold text-zinc-900">{{ cert.name }}</h4>
        <p class="text-sm text-zinc-700">{{ cert.issuer }}
            <Separator /> {{ cert.date }}
        </p>
        <nuxt-link v-if="cert.link" :to="cert.link" target="_blank"
            class="text-accent hover:text-accent/50 text-sm focus-visible:global-focus no-print">
            View Certificate
        </nuxt-link>
    </div>
</template>