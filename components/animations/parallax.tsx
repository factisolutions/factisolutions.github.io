"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  direction?: "up" | "down"
  className?: string
}

export default function Parallax({ children, speed = 0.5, direction = "up", className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate the y offset based on scroll progress
  // Negative speed for upward movement, positive for downward
  const finalSpeed = direction === "up" ? -speed * 100 : speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [0, finalSpeed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}
