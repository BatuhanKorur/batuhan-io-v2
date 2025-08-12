export const DESCRIPTION = `
          Full-Stack Developer with 10+ years of experience, specialising in TypeScript, React, Next, Vue, Node.js, and SQL. Proven record of rebuilding customer-facing apps, designing RESTful APIs, and leading frontend teams for data-intensive applications. Focused on performance, scalable architecture, and measurable business outcomes.

`
export const SOCIAL_LINKS = {
  github: 'https://github.com/BatuhanKorur',
  linkedin: 'https://linkedin.com/in/batuhankorur',
  instagram: 'https://instagram.com/batuhan.korur',
}

export const WORK_EXP = [
  {
    title: 'Dedecta',
    date: '2024 - Present',
    pos: 'Lead Front-End Developer',
    logo: '/dedecta.png',
    description: 'At Dedecta, I led the frontend development of a data analysis web app built with Vue.js, TypeScript, and Pinia. We added features like real-time charts, advanced filtering, and PDF report exports, and worked closely with the backend team to connect everything through REST APIs and WebSockets.',
  },
  {
    title: 'Reachin',
    date: '2023 - 2024',
    pos: 'Co-Founder / Full Stack Developer',
    logo: '/reachin.png',
    description: 'I co-founded Reachin and built the first prototype of our hybrid mobile app using Capacitor and Ionic. I also set up the backend with Laravel/PHP and created an admin panel in Next.js so the team could manage users, send notifications, and handle finances.',
  },
  {
    title: 'Brickhunter',
    date: '2022 - 2024',
    pos: 'Full Stack Developer',
    logo: '/brickhunter.png',
    description: 'At Brickhunter, I rebuilt their e-commerce frontend from scratch in Vue 3, replacing an old codebase. We switched to Storyblok as a headless CMS so the marketing team could edit content without touching code, and I also updated their internal CRM with new tools.',
  },
  {
    title: 'Universal Packing Specialists',
    date: '2020-2022',
    pos: 'Full Stack Developer',
    logo: '/ups.png',
    description: 'I developed the main web app used by the company to manage customers, quotes, invoices, and deliveries. I also built a mobile app for couriers to update delivery statuses, generate PDFs, and optimise their delivery routes.',
  },
  {
    title: 'Okami Creative',
    date: '2015-2020',
    pos: 'Founder / Developer',
    logo: '/okami.png',
    description: 'I started Okami Creative while in university, building websites, mobile apps, and UI libraries for clients in different industries. Some of my favourite projects were a valet parking management system, a tablet-based restaurant menu, and the Krom Wireframe Kit for designers.',
  },
]

interface TechItem { icon: string, label: string }
interface TechSection { title: string, items: readonly TechItem[] }
export const TECH_SECTIONS: readonly TechSection[] = [
  {
    title: 'Frontend',
    items: [
      { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
      { icon: 'vscode-icons:file-type-js-official', label: 'JavaScript' },
      { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
      { icon: 'vscode-icons:file-type-next', label: 'Next' },
      { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
      { icon: 'vscode-icons:file-type-capacitor', label: 'Capacitor' },
      { icon: 'logos:ionic-icon', label: 'Ionic' },
      { icon: 'vscode-icons:file-type-tailwind', label: 'Tailwind' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: 'vscode-icons:file-type-node', label: 'Node' },
      { icon: 'vscode-icons:file-type-bun', label: 'Bun' },
      { icon: 'skill-icons:expressjs-dark', label: 'Express.js' },
      { icon: 'vscode-icons:file-type-mongo', label: 'MongoDB' },
      { icon: 'vscode-icons:file-type-pgsql', label: 'SQL' },
      { icon: 'devicon:redis', label: 'Redis' },
      { icon: 'vscode-icons:file-type-php3', label: 'PHP' },
    ],
  },
  {
    title: 'Toolbox',
    items: [
      { icon: 'skill-icons:docker', label: 'Docker' },
      { icon: 'skill-icons:aws-dark', label: 'AWS' },
      { icon: 'logos:firebase', label: 'Firebase' },
      { icon: 'logos:storyblok-icon', label: 'Storyblok' },
      { icon: 'logos:terminal', label: 'Linux' },
    ],
  },
]
