import Sidebar from '@components/sidebar/Sidebar'
import fs from 'fs/promises'
import path from 'path'
import SidebarTransition from './SidebarTransition'
import BoardView from './BoardView'

async function getMockData() {
  const filePath = path.join(process.cwd(), 'json/data.json')
  const json = (await fs.readFile(filePath)).toString()
  return JSON.parse(json)
}

export default async function Home() {
  const { boards } = await getMockData()

  return <BoardView boards={boards} />
}
