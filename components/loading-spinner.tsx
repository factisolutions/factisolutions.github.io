"use client"

import { motion } from "framer-motion"
import AnimatedLogo from "./animated-logo"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({ size = "md", text, fullScreen = false }: LoadingSpinnerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-white bg-opacity-90 z-50" : ""
      }`}
    >
      <AnimatedLogo size={size} />

      {text && (
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}
