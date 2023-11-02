import Image from 'next/image'

function Header() {
  return (
    <header className='p-4 bg-white dark:bg-gray-dark border-b-2 border-lines-light dark:border-lines-dark flex justify-between items-center'>
      <div>
        <div className='md:hidden'>
          <Image src={'/logo-mobile.svg'} alt='kanban logo' width={24} height={25} />
        </div>
      </div>
      <div>
        <Image src={'/icon-options.svg'} alt='options' width={4} height={15} />
      </div>
    </header>
  )
}

export default Header
