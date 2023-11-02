import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@components/theme'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'

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
          <div className='flex'>
            <div className='hidden md:block'>
              <Sidebar />
            </div>
            <div className='w-full'>
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
