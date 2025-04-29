"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface PasswordStrengthProps {
  password: string
  className?: string
}

export default function PasswordStrength({ password, className = "" }: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!password) {
      setStrength(0)
      setMessage("")
      return
    }

    // Calculate password strength
    let score = 0

    // Length check
    if (password.length >= 8) score += 1
    if (password.length >= 12) score += 1

    // Character variety checks
    if (/[A-Z]/.test(password)) score += 1 // Has uppercase
    if (/[a-z]/.test(password)) score += 1 // Has lowercase
    if (/[0-9]/.test(password)) score += 1 // Has number
    if (/[^A-Za-z0-9]/.test(password)) score += 1 // Has special char

    // Normalize to 0-100
    const normalizedScore = Math.min(Math.floor((score / 6) * 100), 100)
    setStrength(normalizedScore)

    // Set message based on strength
    if (normalizedScore < 30) {
      setMessage("Fraca")
    } else if (normalizedScore < 60) {
      setMessage("Média")
    } else if (normalizedScore < 80) {
      setMessage("Boa")
    } else {
      setMessage("Forte")
    }
  }, [password])

  // Get color based on strength
  const getColor = () => {
    if (strength < 30) return "#ef4444" // red
    if (strength < 60) return "#f59e0b" // amber
    if (strength < 80) return "#10b981" // emerald
    return "#059669" // green
  }

  if (!password) return null

  return (
    <div className={`mt-1 ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500">Força da senha</span>
        <span className="text-xs font-medium" style={{ color: getColor() }}>
          {message}
        </span>
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: getColor() }}
          initial={{ width: 0 }}
          animate={{ width: `${strength}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
