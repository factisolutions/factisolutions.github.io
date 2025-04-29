"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TooltipProps {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
  delay?: number
}

export default function Tooltip({ children, content, position = "top", delay = 0.5 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  // Position styles
  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "8px" }
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "8px" }
      case "left":
        return { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "8px" }
      case "right":
        return { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "8px" }
      default:
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "8px" }
    }
  }

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      ...(position === "top" && { y: 10 }),
      ...(position === "bottom" && { y: -10 }),
      ...(position === "left" && { x: 10 }),
      ...(position === "right" && { x: -10 }),
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
    },
  }

  if (!isMounted) return <>{children}</>

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      ref={triggerRef}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute z-50 whitespace-nowrap px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded pointer-events-none"
            style={getPositionStyles()}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            {content}
            {/* Arrow */}
            <div
              className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
                position === "top"
                  ? "bottom-[-4px] left-1/2 -translate-x-1/2"
                  : position === "bottom"
                    ? "top-[-4px] left-1/2 -translate-x-1/2"
                    : position === "left"
                      ? "right-[-4px] top-1/2 -translate-y-1/2"
                      : "left-[-4px] top-1/2 -translate-y-1/2"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
