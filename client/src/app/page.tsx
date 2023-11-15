import fs from 'fs/promises'
import path from 'path'
import Main from './Main'
import Sidebar from '@components/sidebar/Sidebar'
import { cn } from '@lib/utils'

async function getMockData() {
  const filePath = path.join(process.cwd(), 'json/data.json')
  const json = (await fs.readFile(filePath)).toString()
  return JSON.parse(json) as { boards: Board[] }
}

export default async function Home() {
  const { boards } = await getMockData()

  return (
    <>
      <Sidebar className={cn('fixed left-0 min-w-[18rem] z-20 transition-transform')} />
      <Main boards={boards} />
    </>
  )
}
