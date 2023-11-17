
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './output.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prototipo Listas Posicionables',
  description: 'Aplicación web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
