import Button from '@ui/Button'
import Dropdown from '@ui/Dropdown'
import Image from 'next/image'

const commonClasses = 'bg-white dark:bg-gray-dark'

const DesktopNavbar = () => {
  return <nav className={`hidden md:flex ${commonClasses}`}>Desktop</nav>
}

const MobileNavbar = () => {
  return (
    <nav className={`flex items-center justify-between md:hidden p-4 ${commonClasses}`}>
      <div className='flex gap-4'>
        <Image src={'/logo-mobile.svg'} alt='' width={24} height={25} />
        <Dropdown />
      </div>

      <div className='flex gap-4'>
        <Button className='px-4'>
          <Image src={'/icon-add-task-mobile.svg'} alt='add issue' width={13} height={13} />
        </Button>
        <Image src={'/icon-options.svg'} alt='options' width={4} height={15} />
      </div>
    </nav>
  )
}

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  )
}

export default Navbar
