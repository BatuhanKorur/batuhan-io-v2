import Link from 'next/link'
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal'

export default function ContactCard() {
  return (
    <Terminal className="min-h-[300px]">
      <TypingAnimation>&gt; send an email</TypingAnimation>
      <Link href="mailto:batuhankorur95@gmail.com">
        <AnimatedSpan className="text-muted-foreground">  bkorur95@gmail.com</AnimatedSpan>
      </Link>
      <TypingAnimation className="opacity-0">&gt;</TypingAnimation>
      <TypingAnimation>&gt; github</TypingAnimation>
      <Link href="https://github.com/batuhankorur" target="_blank">
        <AnimatedSpan className="text-muted-foreground">  https://github.com/batuhankorur</AnimatedSpan>
      </Link>
      <TypingAnimation className="opacity-0">&gt;</TypingAnimation>
      <TypingAnimation>&gt; linkedin</TypingAnimation>
      <Link href="https://www.linkedin.com/in/batuhankorur/" target="_blank">
        <AnimatedSpan className="text-muted-foreground">  https://www.linkedin.com/in/batuhankorur/</AnimatedSpan>
      </Link>
    </Terminal>
  )
}
