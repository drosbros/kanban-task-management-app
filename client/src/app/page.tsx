import Button from '@/components/ui/Button'

import fs from 'fs/promises'
import path from 'path'

async function getMockData() {
  const filePath = path.join(process.cwd(), 'json/data.json')
  const json = (await fs.readFile(filePath)).toString()
  return JSON.parse(json)
}

export default async function Home() {
  const { boards } = await getMockData()

  return <main>Home Page</main>
}
