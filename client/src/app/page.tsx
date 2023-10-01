import Button from '@components/ui/Button'

export default function Home() {
  return (
    <main className='bg-white dark:bg-gray-very-dark min-h-screen grid place-items-center'>
      <Button variant={'primary'} size={'large'} className='min-w-[300px]'>
        Button Primary (L)
      </Button>
      <Button variant={'primary'}>Button Primary</Button>
      <Button variant={'secondary'}>Button Primary (L)</Button>
      <Button variant={'destructive'}>Button Primary (L)</Button>
    </main>
  )
}
