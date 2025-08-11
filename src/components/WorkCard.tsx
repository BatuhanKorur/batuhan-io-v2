import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function WorkTrigger({ title, logo, date, position }: {
  title: string
  logo?: string
  date?: string
  position?: string
}) {
  return (
    <div className="flex w-full space-x-3">
      <Avatar className="size-11 shrink-0">
        <AvatarImage src={logo}></AvatarImage>
        <AvatarFallback>{title && title.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-semibold">{ title }</p>
          <p className="text-[15px] opacity-80">{ date }</p>
        </div>
        <p className="text-[15px] text-muted-foreground">{ position }</p>
      </div>
    </div>
  )
}
