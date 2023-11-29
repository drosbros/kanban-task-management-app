import Header from '@components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'
import { ThemeProvider } from '@components/ThemeProvider'
import type { Metadata } from 'next'

import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SidebarTransition from './SidebarTransition'
import { ApolloWrapper } from './ApolloWrapper'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanban task management web app',
  description: "Frontend Mentor's task management application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${jakarta.className} text-black dark:text-white`}>
        <ApolloWrapper>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='min-h-screen flex flex-col'>
              <Header />
              <div className='relative grow h-1 bg-gray-light dark:bg-gray-very-dark'>
                <Sidebar />
                <SidebarTransition>{children}</SidebarTransition>
              </div>
            </div>
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
