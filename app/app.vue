<script setup lang="ts">
const { resume } = useAppConfig()

useHead({
    title: `${resume.personalInfo.name} - ${resume.personalInfo.title}`,
    meta: [
        { name: 'description', content: resume.personalInfo.summary },
        { property: 'og:title', content: `${resume.personalInfo.name} - ${resume.personalInfo.title}` },
        { property: 'og:description', content: resume.personalInfo.summary },
        { property: 'og:type', content: 'profile' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: `${resume.personalInfo.name} - ${resume.personalInfo.title}` },
        { name: 'twitter:description', content: resume.personalInfo.summary }
    ]
})
</script>

<template>
    <div class="min-h-screen max-w-3xl mx-auto print:max-w-none">
        <div class="pt-8 print:pt-4">
            <ResumeHeader :personal-info="resume.personalInfo" />
        </div>

        <main class="w-full px-4 md:px-6 pb-12 print:pb-6 print:px-0">
            <ResumeSection title="Professional Experience">
                <ExperienceItem v-for="exp in resume.experience" :key="exp.company + exp.position" :experience="exp" />
            </ResumeSection>

            <ResumeSection title="Skills">
                <SkillsGrid :skills="resume.skills" />
            </ResumeSection>

            <ResumeSection title="Projects">
                <ProjectItem v-for="project in resume.projects" :key="project.name" :project="project" />
            </ResumeSection>

            <ResumeSection title="Education">
                <EducationItem v-for="edu in resume.education" :key="edu.institution + edu.degree" :education="edu" />
            </ResumeSection>

            <ResumeSection v-if="resume.certifications" title="Certifications">
                <CertificationItem v-for="cert in resume.certifications" :key="cert.name" :cert="cert" />
            </ResumeSection>
        </main>

        <PrintButton />
    </div>
</template>