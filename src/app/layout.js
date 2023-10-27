import { Inter } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/QueryContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Claire Voyante',
  description: 'Cryptological Fortune Teller',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryProvider>
      <body className={inter.className}>{children}</body>
      </QueryProvider>
    </html>
  )
}
