"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { MotionConfig } from "framer-motion"

interface MotionConfigProviderProps {
  children: React.ReactNode
}

export default function MotionConfigProvider({ children }: MotionConfigProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    // Add listener for changes
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>{children}</MotionConfig>
}
