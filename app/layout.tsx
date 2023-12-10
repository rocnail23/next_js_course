import type { Metadata } from 'next'
import { Inter ,Space_Grotesk} from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'],
weight:["100","200","300", "400","500","600","700","800","900"],
variable:"--font-inter" })

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'],
weight:["300", "400","500","600","700"],
variable:"--font-grotesk" })


export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'a programming platform for asnwer question about programing web',
  icons: "./favicon.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      elements:{
        formButtonPrimary: 'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500'
      }
    }}>
    <html lang="en">
    <h1 className='h1-bold'>hola</h1>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
      
        {children}
        
        </body>
    </html>
    </ClerkProvider>
  )
}
