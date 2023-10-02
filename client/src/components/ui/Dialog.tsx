import { VariantProps, cva } from 'class-variance-authority'
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'

const dialogVariants = cva('', {
  variants: {},
})

type Props = VariantProps<typeof dialogVariants> & {
  isOpen: boolean
  onClose: () => void
  title: string
}

const Dialog = ({ isOpen, onClose, title }: Props) => {
  return (
    <HeadlessDialog open={isOpen} onClose={onClose}>
      <HeadlessDialog.Title>{title}</HeadlessDialog.Title>
    </HeadlessDialog>
  )
}

export default Dialog
