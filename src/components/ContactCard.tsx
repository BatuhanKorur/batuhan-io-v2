import {
  Terminal,
  TerminalText,
} from '@/components/magicui/terminal'

export default function ContactCard() {
  return (
    <Terminal>
      <TerminalText>&gt; send an email</TerminalText>
      <TerminalText>  bkorur95@gmail.com</TerminalText>
      <TerminalText> </TerminalText>
      <TerminalText>&gt; github </TerminalText>
      <TerminalText>  https://github.com/batuhankorur</TerminalText>
      <TerminalText> </TerminalText>
      <TerminalText>&gt; linkedIn </TerminalText>
      <TerminalText>  https://www.linkedin.com/in/batuhankorur/</TerminalText>
    </Terminal>
  )
}
