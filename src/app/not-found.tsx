import Link from 'next/link'
import { TypingAnimation } from '@/components/magicui/typing-animation'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
      <TypingAnimation className="text-7xl mt-20">404</TypingAnimation>
      <p className="text-lg font-semibold">Page Not Found</p>
      <div className="mt-20">
        <Link href="/">
          Go Back
        </Link>
      </div>
    </div>
  )
}
