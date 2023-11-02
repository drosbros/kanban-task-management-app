import { useState } from 'react'

export default function useDisclosure(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen((prev) => !prev)

  return { isOpen, onOpen, onClose, onToggle }
}
