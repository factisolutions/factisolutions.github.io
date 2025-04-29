"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

// Import the Logo component
import Logo from "./logo"
import { Button } from "./ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Use the Logo component with animation */}
        <Logo variant="full" size="md" animated={true} />

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            <motion.li custom={0} variants={navItemVariants} initial="hidden" animate="visible">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
                }`}
              >
                Início
              </Link>
            </motion.li>
            <motion.li custom={1} variants={navItemVariants} initial="hidden" animate="visible">
              <Link
                href="/servicos"
                className={`text-sm font-medium transition-colors ${
                  isActive("/servicos") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
                }`}
              >
                Serviços
              </Link>
            </motion.li>
            <motion.li custom={2} variants={navItemVariants} initial="hidden" animate="visible">
              <Link
                href="/sobre"
                className={`text-sm font-medium transition-colors ${
                  isActive("/sobre") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
                }`}
              >
                Sobre
              </Link>
            </motion.li>
          </ul>

          <motion.div custom={3} variants={navItemVariants} initial="hidden" animate="visible" className="relative">
            {/* Pulsing glow effect behind button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue rounded-md blur-md"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <Button
              href="/contato"
              size="default"
              variant="gradient"
              className="relative z-10 border-2 border-white border-opacity-20"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ color: ["#fff", "#f0f0f0", "#fff"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Fale Conosco
              </motion.span>
            </Button>
          </motion.div>
        </nav>

        <motion.button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t overflow-hidden"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <motion.li variants={mobileNavItemVariants}>
                <Link
                  href="/"
                  className={`block text-base font-medium ${isActive("/") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
              </motion.li>
              <motion.li variants={mobileNavItemVariants}>
                <Link
                  href="/servicos"
                  className={`block text-base font-medium ${isActive("/servicos") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
              </motion.li>
              <motion.li variants={mobileNavItemVariants}>
                <Link
                  href="/sobre"
                  className={`block text-base font-medium ${isActive("/sobre") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
              </motion.li>
            </ul>
            <motion.div variants={mobileNavItemVariants} className="mt-6 relative">
              {/* Pulsing glow effect behind button */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue rounded-md blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <Button
                href="/contato"
                fullWidth={true}
                variant="gradient"
                className="relative z-10 border-2 border-white border-opacity-20"
              >
                <motion.span
                  animate={{ color: ["#fff", "#f0f0f0", "#fff"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Fale Conosco
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
