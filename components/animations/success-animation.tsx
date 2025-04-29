"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Confetti from "./confetti"
import { Button } from "../ui/button"

interface SuccessAnimationProps {
  message?: string
  onReset?: () => void
}

export default function SuccessAnimation({
  message = "Mensagem enviada com sucesso!",
  onReset,
}: SuccessAnimationProps) {
  return (
    <div className="relative">
      {/* Confetti animation */}
      <Confetti />

      <motion.div
        className="bg-white rounded-lg p-8 shadow-lg text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Success icon with circular animation */}
        <motion.div
          className="mx-auto mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Check className="text-green-600" size={48} strokeWidth={3} />
            </motion.div>
          </motion.div>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-green-500"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ delay: 0.6, duration: 1, repeat: 2 }}
          />
        </motion.div>

        {/* Success message with text animation */}
        <motion.h3
          className="text-2xl font-bold mb-2 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Sucesso!
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {message}
        </motion.p>

        {onReset && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button onClick={onReset} variant="outline" className="mt-4">
              Enviar outra mensagem
            </Button>
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-brand-blue to-brand-teal rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </motion.div>
    </div>
  )
}
