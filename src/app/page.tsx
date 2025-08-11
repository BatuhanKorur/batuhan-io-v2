import { Navbar } from '@/components/Navbar'
import TechIcons from '@/components/TechIcons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { TextH2, TextH3 } from '@/components/ui/text'

import { WorkTrigger } from '@/components/WorkCard'
import { WORK_EXP } from '@/data/resume'

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Hello, I'm Batuhan</h1>
        <div className="flex items-center space-x-1 mt-0.5">
          <TechIcons />
          <p className="font-mono font-semibold text-indigo-300">Full-Stack Software Engineer</p>
        </div>
      </div>
      <div>
        <TextH2>About</TextH2>
        <p className="text-pretty text-primary leading-6">
          Full-Stack Developer with 10+ years of experience, specialising in TypeScript, React, Next, Vue, Node.js, and SQL. Proven record of rebuilding customer-facing apps, designing RESTful APIs, and leading frontend teams for data-intensive applications. Focused on performance, scalable architecture, and measurable business outcomes.
        </p>
      </div>
      <div>
        <TextH2>Work Experiences</TextH2>
        <Accordion type="single" collapsible>
          {WORK_EXP.map((exp, index) => (
            <AccordionItem value={`item${index}`} key={index}>
              <AccordionTrigger>
                <WorkTrigger
                  title={exp.title}
                  logo={exp.logo}
                  date={exp.date}
                  position={exp.pos}
                >
                </WorkTrigger>
              </AccordionTrigger>
              <AccordionContent>
                {exp.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <TextH2>Tech Stack</TextH2>
        <div className="flex flex-col gap-4">
          <div>
            <TextH3>Frontend</TextH3>
            <div>
              <Badge icon="vscode-icons:file-type-typescript-official">TypeScript</Badge>
              <Badge icon="vscode-icons:file-type-js-official">Javascript</Badge>
              <Badge icon="vscode-icons:file-type-reactjs">React</Badge>
              <Badge>Next</Badge>
              <Badge icon="vscode-icons:file-type-vue">Vue</Badge>
              <Badge icon="vscode-icons:file-type-capacitor">Capacitor</Badge>
              <Badge icon="logos:ionic-icon">Ionic</Badge>
              <Badge icon="vscode-icons:file-type-tailwind">Tailwind</Badge>
            </div>
          </div>
          <div>
            <TextH3>Backend</TextH3>
            <div>
              <Badge icon="vscode-icons:file-type-node">Node</Badge>
              <Badge icon="vscode-icons:file-type-bun">Bun</Badge>
              <Badge>Express.js</Badge>
              <Badge>WebSockets</Badge>
              <Badge icon="vscode-icons:file-type-mongo">MongoDB</Badge>
              <Badge icon="vscode-icons:file-type-pgsql">SQL</Badge>
              <Badge>Redis</Badge>
              <Badge icon="vscode-icons:file-type-php3">PHP</Badge>
            </div>
          </div>
          <div>
            <TextH3>Toolbox</TextH3>
            <div>
              <Badge>Docker</Badge>
              <Badge icon="skill-icons:aws-dark">AWS</Badge>
              <Badge>Vercel</Badge>
              <Badge icon="logos:firebase">Firebase</Badge>
              <Badge icon="logos:storyblok-icon">Storyblok</Badge>
              <Badge icon="logos:terminal">Linux</Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="text-center mb-20">
        <TextH2>Get in Touch</TextH2>
        <div className="text-center">
          <p>Some text about contacting is here</p>
        </div>
      </div>
      <Navbar />
    </main>
  )
}
