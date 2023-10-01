import AddTaskButton from '@components/ui/buttons/AddTaskButton'
import Image from 'next/image'

const commonClasses = 'bg-white dark:bg-gray-dark'

const DesktopNavbar = () => {
  return <nav className={`hidden md:flex ${commonClasses}`}>Desktop</nav>
}

const MobileNavbar = () => {
  return (
    <nav className={`flex items-center justify-between md:hidden p-2 ${commonClasses}`}>
      <div>
        <Image src={'/logo-mobile.svg'} alt="" width={24} height={25} />
      </div>

      <div>
        <Image src={'/icon-options.svg'} alt="" width={4} height={15} />
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
