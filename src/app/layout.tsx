import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered tools. Create stunning campaigns, analyze performance, and scale your brand with cutting-edge artificial intelligence.',
  keywords: 'AI marketing, brand management, digital marketing, artificial intelligence, marketing automation',
  authors: [{ name: 'ADmyBRAND Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools. Create stunning campaigns, analyze performance, and scale your brand.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 