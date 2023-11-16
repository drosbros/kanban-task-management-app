import Button from '@components/ui/Button'
import { cn } from '@lib/utils'
import { ComponentProps } from 'react'
import Image from 'next/image'

type Props = ComponentProps<typeof Button> & {
  isActive: boolean
}

function SidebarButton({ className, isActive, ...rest }: Props) {
  return (
    <Button
      {...rest}
      variant={'unstyled'}
      className={cn(className, 'px-8 py-3 font-bold text-md rounded-l-none w-11/12 text-gray-medium', {
        'bg-purple-default text-white': isActive,
        'hover:bg-purple-default/10 dark:hover:bg-white hover:text-purple-default': !isActive,
      })}
    />
  )
}

export default SidebarButton
