import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/Theme'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Kanban task management web app',
  description: "Frontend Mentor's task management application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${jakarta.className} text-black dark:text-white`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar>{children}</Navbar>
        </ThemeProvider>
      </body>
    </html>
  )
}
