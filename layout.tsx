import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import DirectChatbotWidget from '@/components/DirectChatbotWidget'
import Head from './head'
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
  title: 'Flowgenie - Automate Growth with AI Workflows & Chat Widgets',
  description: 'We design intelligent automations that generate leads, start conversations, and scale your business. Specializing in AI-powered workflows, lead generation automations, and custom chatbot widgets.',
  keywords: 'AI automation, lead generation, chatbot widgets, business automation, workflow design',
  authors: [{ name: 'Flowgenie Team' }],
  openGraph: {
    title: 'Flowgenie - Automate Growth with AI Workflows & Chat Widgets',
    description: 'We design intelligent automations that generate leads, start conversations, and scale your business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning={true}>
      <Head />
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <DirectChatbotWidget />
      </body>
    </html>
  )
}
