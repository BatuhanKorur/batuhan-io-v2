import ContactCard from '@/components/ContactCard'
import { AuroraText } from '@/components/magicui/aurora-text'
import { Navbar } from '@/components/Navbar'
import TechIcons from '@/components/TechIcons'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { TextH2, TextH3 } from '@/components/ui/text'
import { WorkTrigger } from '@/components/WorkCard'
import { DESCRIPTION, TECH_SECTIONS, WORK_EXP } from '@/data'

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <header>
        <h1 className="font-bold font-sans text-4xl md:text-5xl">Hello, I'm Batuhan</h1>
        <div className="flex items-center">
          <TechIcons />
          <AuroraText className="font-mono font-bold text-[22px] pl-3 pt-[3px]">Full-Stack Developer</AuroraText>
        </div>
      </header>

      <section aria-labelledby="about-heading">
        <TextH2>About</TextH2>
        <p className="text-primary text-[17px] leading-6.5">
          { DESCRIPTION }
        </p>
      </section>

      <section aria-labelledby="work-heading">
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
                <p className="text-base text-primary leading-6 ml-14 mb-6 -mt-1">
                  {exp.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section aria-labelledby="tech-stack-heading">
        <TextH2>Tech Stack</TextH2>
        <div className="mt-5 flex flex-col gap-4">
          {TECH_SECTIONS.map(section => (
            <div key={section.title}>
              <TextH3>{section.title}</TextH3>
              <div className="space-x-3 space-y-3">
                {section.items.map(item => (
                  <Badge key={item.label} icon={item.icon}>
                    {item.label}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mt-10 mb-20" />

      <section className="mb-30">
        <TextH2 className="text-center mb-6 text-2xl md:text-3xl">Get in Touch</TextH2>
        <ContactCard />
      </section>
      <Navbar />
    </main>
  )
}
