"use client"

import type React from "react"

import { motion } from "framer-motion"

interface HoverScaleProps {
  children: React.ReactNode
  scale?: number
  className?: string
}

export default function HoverScale({ children, scale = 1.03, className = "" }: HoverScaleProps) {
  return (
    <motion.div className={className} whileHover={{ scale }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}
