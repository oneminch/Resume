# Résumé

![Screenshot](/public/cover.png)

A minimal, single-column, print-friendly Résumé/CV template built with Nuxt. Designed following modern résumé best practices with easy customization through a single configuration file.

## Features

-   🎨 Minimal, single-column design optimized for readability
-   📱 Fully responsive design that looks great on all devices
-   🖨️ Print-optimized styling following ATS-friendly guidelines
-   🔧 Strongly typed configuration with full IDE support
-   🚀 Easy deployment to any hosting platform
-   📄 Single-column layout for better ATS compatibility
-   🎯 Follows modern résumé best practices

## Quick Start

1. **Fork and clone this repository**

```bash
git clone https://github.com/oneminch/resume.git

cd resume
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Customize your résumé data**

Edit the `app.config.ts` file with your personal information:

```typescript
export default defineAppConfig({
	resume: {
		personalInfo: {
			name: "Your Name",
			title: "Your Professional Title",
			summary: "Your professional summary...",
			contact: {
				email: "your.email@example.com",
				phone: "+1 (555) 123-4567",
				location: "Your City, State",
				// ... other contact info
			},
		},
		// ... rest of your résumé data
	},
});
```

4. **Start development server**

```bash
pnpm run dev
```

5. **Build for production**

```bash
pnpm run build
```

## Configuration

The résumé template is configured through the `app.config.ts` file. The configuration is fully typed, providing excellent IDE support with autocompletion and type checking.

### Sections Available

-   **Personal Info**: Name, title, summary, and contact information
-   **Experience**: Work history with achievements and technologies used
-   **Education**: Academic background with GPA, honors, and relevant courses
-   **Projects**: Portfolio projects with links and highlights
-   **Skills**: Categorized technical and soft skills
-   **Certifications**: Professional certifications with links

## Credits

This template is heavily inspired by Bartosz Jarocki's [minimalist CV](https://github.com/BartoszJarocki/cv) template.
