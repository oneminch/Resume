import { ResumeConfig } from './types';

declare module 'nuxt/schema' {
    interface AppConfigInput {
        resume: ResumeConfig;
    }
}

declare module '@nuxt/schema' {
    interface AppConfig {
        resume: ResumeConfig;
    }
}