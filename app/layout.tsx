import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catherine Sangiovanni - Developer Portfolio',
  description: 'A portfolio created using NextJS, Typescript, and TailwindCSS!',
  type: "website",
  robots: {
    follow: true,
    index: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark:bg-gray-800 w-full">
          <div className='header'></div>
          <div>{children}</div>
          <div className='footer'></div>
        </main>
      </body>
    </html>
  )
}
