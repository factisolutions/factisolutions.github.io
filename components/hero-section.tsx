"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function HeroSection({ title, subtitle, centered = true, className = "" }: HeroSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto ${centered ? "text-center" : ""}`}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
