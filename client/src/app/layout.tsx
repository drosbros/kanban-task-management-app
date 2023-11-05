import Header from '@components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'
import { ThemeProvider } from '@components/theme/ThemeProvider'
import type { Metadata } from 'next'

import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SidebarShowButton from '@components/sidebar/SidebarShowButton'
import PageTransition from './PageTransition'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Kanban task management web app',
  description: "Frontend Mentor's task management application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${jakarta.className} text-black dark:text-white`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex grow relative bg:white dark:bg-gray-very-dark'>
              <Sidebar />
              <PageTransition>{children}</PageTransition>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
