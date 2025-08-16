export default defineAppConfig({
    resume: {
        personalInfo: {
            name: "Elliot Alderson",
            title: "Senior Cybersecurity Engineer",
            summary:
                "Results-driven cybersecurity engineer with 6+ years of experience building secure applications and leading security-focused development teams. Proven track record of delivering high-impact security solutions that protect systems and improve digital infrastructure resilience.",
            contact: {
                email: "elliot.alderson@e-corp-usa.com",
                phone: "+1 (555) 123-4567",
                location: "New York, NY",
                website: "https://e-corp-usa.com",
                linkedin: "https://linkedin.com/in/#",
                github: "https://github.com/#",
            },
            avatar: "/headshot.jpg",
        },
        experience: [
            {
                position: "Senior Cybersecurity Engineer",
                company: "E-Corp",
                location: "New York, NY",
                startDate: "Mar 2022",
                endDate: "Present",
                description:
                    "Lead development of secure microservices architecture serving 500k+ daily users. Mentor junior developers and drive security decisions for product roadmap.",
                achievements: [
                    "Improved application security by 45% through penetration testing and vulnerability assessments",
                    "Led migration of monolithic application to secure microservices, reducing attack surface by 70%",
                    "Mentored 3 junior developers, with 2 receiving security certifications within 12 months",
                ],
                technologies: [
                    "React",
                    "Node.js",
                    "TypeScript",
                    "AWS",
                    "Kubernetes",
                    "PostgreSQL",
                ],
            },
            {
                position: "Security Engineer",
                company: "Allsafe Cybersecurity",
                location: "New York, NY",
                startDate: "Aug 2020",
                endDate: "Feb 2022",
                description:
                    "Built and maintained secure customer-facing web applications using React and Node.js. Collaborated with security and product teams to deliver cyber-resilient features.",
                achievements: [
                    "Developed 5 major security features that increased system resilience by 30%",
                    "Implemented comprehensive security testing suite achieving 90% vulnerability coverage",
                    "Reduced security incidents by 50% through improved code review and security processes",
                ],
                technologies: [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "Jest",
                    "Docker",
                ],
            },
            {
                position: "Junior Security Engineer",
                company: "CyberSolutions Inc.",
                location: "New York, NY",
                startDate: "Jun 2018",
                endDate: "Jul 2020",
                description:
                    "Developed secure responsive web applications and collaborated with senior developers on complex security projects. Gained expertise in modern cybersecurity technologies and secure development practices.",
                achievements: [
                    "Built 10+ secure responsive web applications for various clients",
                    "Contributed to open-source security projects with 500+ GitHub stars",
                    "Completed advanced cybersecurity and React certification programs",
                ],
                technologies: ["JavaScript", "React", "CSS", "HTML", "Git", "Figma"],
            },
        ],
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                institution: "New York University",
                location: "New York, NY",
                startDate: "Aug 2015",
                endDate: "May 2018",
                gpa: "3.7/4.0",
                honors: "Cum Laude",
                relevantCourses: [
                    "Data Structures & Algorithms",
                    "Cybersecurity Engineering",
                    "Database Security",
                    "Computer Networks",
                    "Cryptography",
                ],
            },
        ],
        projects: [
            {
                name: "Secure Task Management SaaS",
                description:
                    "Full-stack secure project management application with real-time collaboration, encrypted file sharing, and security analytics dashboard.",
                technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS S3"],
                link: "https://secure-taskmanager-demo.elliotalderson.dev",
                github: "https://github.com/elliotalderson/secure-task-manager-saas",
                highlights: [
                    "Supports 1000+ concurrent users with encrypted real-time updates",
                    "Integrated secure payment processing with end-to-end encryption",
                    "Deployed on AWS with security-focused auto-scaling capabilities",
                ],
            },
            {
                name: "Open Source Security Component Library",
                description:
                    "React security component library with 50+ secure components, comprehensive security documentation, and TypeScript support.",
                technologies: ["React", "TypeScript", "Storybook", "Rollup", "Jest"],
                link: "https://secure-ui-library.elliotalderson.dev",
                github: "https://github.com/elliotalderson/react-security-library",
                highlights: [
                    "1000+ weekly downloads on npm",
                    "Used by 20+ security-focused companies in production",
                    "100% security test coverage with comprehensive documentation",
                ],
            },
            {
                name: "Real-time Security Analytics Dashboard",
                description:
                    "Security visualization platform for threat analytics with real-time metrics, custom security reports, and automated threat detection.",
                technologies: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL"],
                github: "https://github.com/elliotalderson/security-analytics-dashboard",
                highlights: [
                    "Processes 100k+ security events per minute",
                    "Custom security visualization components with D3.js",
                    "Automated threat report generation and security notifications",
                ],
            },
        ],
        skills: [
            {
                category: "Programming Languages",
                items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
            },
            {
                category: "Frontend Technologies",
                items: ["React", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
            },
            {
                category: "Backend Technologies",
                items: [
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "GraphQL",
                ],
            },
            {
                category: "Security & DevOps",
                items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
            },
            {
                category: "Tools & Methodologies",
                items: ["Git", "Jest", "Cypress", "Agile", "Scrum", "Code Review"],
            },
        ],
        certifications: [
            {
                name: "AWS Certified Security Specialist",
                issuer: "Amazon Web Services",
                date: "Jun 2023",
                link: "https://aws.amazon.com/certification/",
            },
            {
                name: "Certified Information Systems Security Professional",
                issuer: "ISC²",
                date: "Mar 2023",
                link: "https://www.isc2.org/certifications",
            },
        ]
    },
});
