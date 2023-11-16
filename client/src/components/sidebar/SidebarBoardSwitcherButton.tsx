import Button from '@components/ui/Button'
import { cn } from '@lib/utils'
import { ComponentProps } from 'react'
import Image from 'next/image'

type Props = ComponentProps<typeof Button> & {
  isActive: boolean
  boardName: string
}

function SidebarButton({ className, isActive, boardName, ...rest }: Props) {
  return (
    <Button
      {...rest}
      variant={'unstyled'}
      className={cn(className, 'px-8 rounded-l-none w-11/12 text-gray-medium', {
        'bg-purple-default text-white': isActive,
      })}
    />
  )
}

export default SidebarButton
