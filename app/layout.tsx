import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata = {
  title: 'About UCC Netsoc',
  description: 'The Networking, Gaming, and Technology Society of University College Cork.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-brand-primary`}>
        <main className='text-white'>
          {children}
        </main>
      </body>
    </html>
  )
}
