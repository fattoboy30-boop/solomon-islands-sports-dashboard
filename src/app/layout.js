import './globals.css'
import AnimatedBackground from '../components/AnimatedBackground'

export const metadata = {
  title: 'Solomon Islands Sports Dashboard',
  description: 'Track Solomon Islands sports performance against world standards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
