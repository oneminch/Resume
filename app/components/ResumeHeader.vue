<template>
    <header class="mb-8 print:mb-6 max-w-4xl mx-auto px-4 md:px-6 print:px-0 print:max-w-none">
        <div class="mb-6" :class="['flex flex-col gap-4', { 'text-center': !personalInfo.avatar }]">
            <div :class="['flex flex-row items-start justify-between gap-4', { 'md:text-left': personalInfo.avatar }]">
                <div class="space-y-4">
                    <h1 class="text-2xl md:text-3xl font-bold text-zinc-900 print:mb-2 print:text-2xl">
                        {{ personalInfo.name }}
                    </h1>
                    <h2 class="text-base md:text-lg text-zinc-600 font-medium print:text-base">
                        {{ personalInfo.title }}
                    </h2>
                </div>

                <div v-if="personalInfo.avatar" class="shrink-0 md:order-last">
                    <img :src="personalInfo.avatar" :alt="personalInfo.name"
                        class="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover mx-auto md:mx-0 print:w-20 print:h-20 ring-2 ring-zinc-300 ring-offset-2 print:ring-0" />
                </div>
            </div>

            <div class="flex flex-wrap gap-2 text-sm text-zinc-600"
                :class="personalInfo.avatar ? 'justify-start' : 'justify-center'">
                <nuxt-link :href="`mailto:${personalInfo.contact.email}`"
                    class="flex items-center gap-1 hover:text-accent focus-visible:global-focus transition-colors">
                    <Icon name="heroicons:envelope-16-solid" class="w-4 h-4 text-zinc-900" />
                    {{ personalInfo.contact.email }}
                </nuxt-link>

                <Separator />

                <span v-if="personalInfo.contact.phone" class="flex items-center gap-1">
                    <Icon name="heroicons:phone-16-solid" class="w-4 h-4 text-zinc-900" />
                    {{ personalInfo.contact.phone }}
                </span>

                <Separator />

                <span class="flex items-center gap-1">
                    <Icon name="heroicons:map-pin-16-solid" class="w-4 h-4 text-zinc-900" />
                    {{ personalInfo.contact.location }}
                </span>
            </div>

            <div class="flex flex-wrap gap-2 text-sm text-zinc-600"
                :class="personalInfo.avatar ? 'justify-start' : 'justify-center'">
                <nuxt-link v-if="personalInfo.contact.website" :href="personalInfo.contact.website" target="_blank"
                    class="flex items-center gap-1 hover:text-accent focus-visible:global-focus transition-colors">
                    <Icon name="heroicons:link-16-solid" class="w-4 h-4 text-zinc-900" />
                    Website
                </nuxt-link>

                <Separator />

                <nuxt-link v-if="personalInfo.contact.linkedin" :href="personalInfo.contact.linkedin" target="_blank"
                    class="flex items-center gap-1 hover:text-accent focus-visible:global-focus transition-colors">
                    <Icon name="simple-icons:linkedin" class="w-4 h-4 text-zinc-900" />
                    LinkedIn
                </nuxt-link>

                <Separator />

                <nuxt-link v-if="personalInfo.contact.github" :href="personalInfo.contact.github" target="_blank"
                    class="flex items-center gap-1 hover:text-accent focus-visible:global-focus transition-colors">
                    <Icon name="simple-icons:github" class="w-4 h-4 text-zinc-900" />
                    GitHub
                </nuxt-link>
            </div>
        </div>

        <p class="text-sm md:text-base text-zinc-700 leading-relaxed print:text-sm"
            :class="personalInfo.avatar ? 'max-w-none text-left' : 'max-w-2xl mx-auto text-center'">
            {{ personalInfo.summary }}
        </p>

        <div class="no-print mt-6 border-b border-zinc-200/50"></div>
    </header>
</template>

<script setup lang="ts">
import type { ResumeConfig } from '~/types';

interface Props {
    personalInfo: ResumeConfig['personalInfo']
}

defineProps<Props>()
</script>