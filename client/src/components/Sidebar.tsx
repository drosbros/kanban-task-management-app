import Image from 'next/image'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='bg-white dark:bg-gray-dark min-h-screen border-r-2 border-lines-light dark:border-lines-dark'>
      <div className='p-8'>
        <Image data-hide-on-theme='dark' src='/logo-dark.svg' alt='kanban logo' width={153} height={26} />
        <Image data-hide-on-theme='light' src='/logo-light.svg' alt='kanban logo' width={153} height={26} />
      </div>
    </div>
  )
}

export default Sidebar
