"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

interface FormValidationProps {
  isValid: boolean
  message?: string
  showIcon?: boolean
}

export default function FormValidation({ isValid, message, showIcon = true }: FormValidationProps) {
  return (
    <div className="mt-1">
      <AnimatePresence>
        {message && (
          <motion.div
            className={`flex items-start ${isValid ? "text-green-600" : "text-red-500"}`}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {showIcon && (
              <motion.div
                className="mr-1 mt-0.5 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isValid ? <Check size={14} /> : <X size={14} />}
              </motion.div>
            )}
            <motion.span
              className="text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {message}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
