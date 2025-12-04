import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'

export const metadata: Metadata = {
  title: 'Alex Chen | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Building beautiful, functional, and user-friendly digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  openGraph: {
    title: 'Alex Chen | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="dark" attribute="class">
          <ScrollProgress />
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



