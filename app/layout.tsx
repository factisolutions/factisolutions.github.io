import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import MotionConfigProvider from "@/components/animations/motion-config"
// Import the FloatingContactButton component
import FloatingContactButton from "@/components/floating-contact-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FACTI Solutions | Governança de TI e Inteligência Artificial",
  description:
    "Consultoria especializada em governança de TI, infraestrutura e implementação de IA para pequenas e médias empresas no Brasil.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <MotionConfigProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
          <FloatingContactButton />
        </MotionConfigProvider>
      </body>
    </html>
  )
}
