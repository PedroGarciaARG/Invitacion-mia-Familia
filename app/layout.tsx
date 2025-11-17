import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Invitación XV Años - Mía',
  description: 'Celebremos juntos los 15 años de Mía - 27 de Diciembre 2025',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c67I2n3M3Dgwpb3XNtqlaGllPx2yUm.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c67I2n3M3Dgwpb3XNtqlaGllPx2yUm.png',
  },
  openGraph: {
    title: 'Invitación XV Años - Mía',
    description: 'Celebremos juntos los 15 años de Mía - 27 de Diciembre 2025',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c67I2n3M3Dgwpb3XNtqlaGllPx2yUm.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
