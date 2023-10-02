import Button from '@ui/Button'
import Dropdown from '@ui/Dropdown'
import Image from 'next/image'
import { ReactNode } from 'react'

const commonClasses = 'bg-white dark:bg-gray-dark'

const DesktopNavbar = ({ children }: Props) => {
  return (
    <div className={`hidden md:flex ${commonClasses}`}>
      <nav className='min-h-screen p-4 border-r-[1px] border-lines-light dark:border-lines-dark'>
        <Image src={'/logo-light.svg'} alt='kanban logo' width={153} height={26} />
      </nav>
      <div className='flex-grow'>
        <header className='p-4 border-b-[1px] border-lines-light dark:border-lines-dark'>
          <Dropdown />
        </header>
        {children}
      </div>
    </div>
  )
}

const MobileNavbar = ({ children }: Props) => {
  return (
    <div className='md:hidden block'>
      <nav className={`flex items-center justify-between p-4 ${commonClasses}`}>
        <div className='flex gap-4'>
          <Image src={'/logo-mobile.svg'} alt='kanban logo' width={24} height={25} />
          <Dropdown />
        </div>

        <div className='flex gap-4'>
          <Button className='px-4'>
            <Image src={'/icon-add-task-mobile.svg'} alt='add issue' width={13} height={13} />
          </Button>
          <Image src={'/icon-options.svg'} alt='options' width={4} height={15} />
        </div>
      </nav>
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}

const Navbar = ({ children }: Props) => {
  return (
    <>
      <DesktopNavbar>{children}</DesktopNavbar>
      <MobileNavbar>{children}</MobileNavbar>
    </>
  )
}

export default Navbar
