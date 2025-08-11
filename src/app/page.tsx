import { Navbar } from '@/components/Navbar'
import TechIcons from '@/components/TechIcons'
import { Badge } from '@/components/ui/badge'
import { TextH2, TextH3 } from '@/components/ui/text'
import WorkCard from '@/components/WorkCard'
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
          Experienced Full-Stack Developer (10+ years) specializing in TypeScript, React, Vue, Node.js, Bun, and Laravel. Proven record of rebuilding customer-facing apps, designing RESTful APIs, and leading frontend teams for data-intensive applications. Focused on performance, scalable architecture, and measurable business outcomes.
        </p>
      </div>
      <div>
        <TextH2>Work Experiences</TextH2>
        <div className="flex flex-col gap-4 mt-4">
          {WORK_EXP.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              date={work.date}
              pos={work.pos}
              logo={work.logo}
            >
              {work.description}
            </WorkCard>
          ))}
        </div>
      </div>
      <div>
        <TextH2>Tech Stack</TextH2>
        <div className="flex flex-col gap-4">
          <div>
            <TextH3>Frontend</TextH3>
            <div>
              <Badge>TypeScript</Badge>
              <Badge>Javascript</Badge>
              <Badge>React</Badge>
              <Badge>Next</Badge>
              <Badge>Vue</Badge>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TextH2>Get in Touch</TextH2>
        <div>
          <p>Some Text</p>
          <p>Some Text 2</p>
          <p>Some Text 3</p>
          <p>Some Text 4</p>
        </div>
      </div>
      <Navbar />
    </main>
  )
}
