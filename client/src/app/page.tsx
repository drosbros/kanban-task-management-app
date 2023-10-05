import Button from '@/components/ui/Button'

import fs from 'fs/promises'
import path from 'path'
import BoardDisplay from './BoardDisplay'

async function getMockData() {
  const filePath = path.join(process.cwd(), 'json/data.json')
  const json = (await fs.readFile(filePath)).toString()
  return JSON.parse(json) as { boards: Board[] }
}

export default async function Home() {
  const { boards } = await getMockData()

  return <main className='bg-white dark:bg-gray-very-dark min-h-screen grid place-items-center'></main>
}
