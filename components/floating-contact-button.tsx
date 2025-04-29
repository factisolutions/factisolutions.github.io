"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import Tooltip from "./ui/tooltip"

interface ContactOption {
  icon: React.ReactNode
  label: string
  href: string
  color: string
  tooltip: string
}

export default function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const [shouldRender, setShouldRender] = useState(true)

  // Don't show on the contact page
  useEffect(() => {
    if (pathname === "/contato") {
      setShouldRender(false)
    } else {
      setShouldRender(true)
    }
  }, [pathname])

  // Show button after scrolling down
  useEffect(() => {
    if (shouldRender) {
      const handleScroll = () => {
        const scrollY = window.scrollY
        const showThreshold = 300 // Show after scrolling 300px

        setIsVisible(scrollY > showThreshold)
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Check initial position

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [shouldRender])

  const contactOptions: ContactOption[] = [
    {
      icon: <Phone size={20} />,
      label: "Telefone",
      href: "tel:+551151966199",
      color: "bg-green-500 hover:bg-green-600",
      tooltip: "Ligar agora",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:contactus@facti.solutions",
      color: "bg-blue-500 hover:bg-blue-600",
      tooltip: "Enviar email",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "Formulário",
      href: "/contato",
      color: "bg-purple-500 hover:bg-purple-600",
      tooltip: "Formulário de contato",
    },
  ]

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <AnimatePresence>
      {shouldRender && isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-col items-end space-y-3 mb-3"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Tooltip content={option.tooltip} position="left">
                      <Link
                        href={option.href}
                        className={`flex items-center space-x-2 text-white px-4 py-2 rounded-full shadow-lg ${option.color} transition-transform transform hover:scale-105`}
                      >
                        <span>{option.icon}</span>
                        <span className="text-sm font-medium">{option.label}</span>
                      </Link>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <Tooltip content={isExpanded ? "Fechar" : "Fale Conosco"} position="left">
              <motion.button
                onClick={toggleExpanded}
                className={`flex items-center justify-center p-4 rounded-full shadow-lg text-white transition-colors ${
                  isExpanded ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-brand-teal to-brand-blue"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isExpanded ? "Fechar opções de contato" : "Abrir opções de contato"}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: isExpanded ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
              </motion.button>
            </Tooltip>

            {/* Pulse effect */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-blue"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
