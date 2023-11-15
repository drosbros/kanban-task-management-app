import Image from 'next/image'

function Header() {
  return (
    <header className='z-30 bg-white dark:bg-gray-dark border-b-2 border-lines-light dark:border-lines-dark flex justify-between items-center'>
      <div>
        <div className='hidden md:block'>
          <div className='p-4'>
            <Image data-hide-on-theme='dark' src='/brand/logo-dark.svg' alt='kanban logo' width={153} height={26} />
            <Image data-hide-on-theme='light' src='/brand/logo-light.svg' alt='kanban logo' width={153} height={26} />
          </div>
        </div>
        <div className='md:hidden p-4'>
          <Image src={'/brand/logo-mobile.svg'} alt='kanban logo' width={24} height={25} />
        </div>
      </div>
      <div>
        <Image src={'/icon/icon-options.svg'} alt='options' width={4} height={15} />
      </div>
    </header>
  )
}

export default Header
