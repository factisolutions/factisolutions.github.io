"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import CharacterCounter from "./character-counter"

interface FormFieldProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
  validate?: (value: string) => { valid: boolean; message?: string }
  validateOnChange?: boolean
  rows?: number
  maxLength?: number
  minLength?: number
  showCharacterCount?: boolean
}

export default function FormField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  className,
  validate,
  validateOnChange = false,
  rows = 4,
  maxLength,
  minLength,
  showCharacterCount = false,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [validation, setValidation] = useState<{ valid: boolean; message?: string }>({ valid: true })

  // Run validation when value changes (if validateOnChange is true) or when field is touched
  useEffect(() => {
    if (validate && ((validateOnChange && value) || isTouched)) {
      setValidation(validate(value))
    }
  }, [value, validate, validateOnChange, isTouched])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    if (onBlur) onBlur(e)
  }

  const isTextarea = type === "textarea"

  return (
    <div className={cn("mb-4", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {isTextarea ? (
          <motion.textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={rows}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            className={cn(
              "w-full px-3 py-2 border rounded-md transition-all duration-200 focus:outline-none focus:ring-2",
              isFocused
                ? "border-brand-blue ring-brand-blue/20"
                : validation.valid
                  ? value && isTouched
                    ? "border-green-500"
                    : "border-gray-300"
                  : "border-red-500",
            )}
            whileFocus={{ scale: 1.01 }}
          />
        ) : (
          <motion.input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            className={cn(
              "w-full px-3 py-2 border rounded-md transition-all duration-200 focus:outline-none focus:ring-2",
              isFocused
                ? "border-brand-blue ring-brand-blue/20"
                : validation.valid
                  ? value && isTouched
                    ? "border-green-500"
                    : "border-gray-300"
                  : "border-red-500",
            )}
            whileFocus={{ scale: 1.01 }}
          />
        )}

        {/* Validation icons */}
        <AnimatePresence>
          {value && isTouched && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {validation.valid ? (
                <Check className="text-green-500" size={18} />
              ) : (
                <AlertCircle className="text-red-500" size={18} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {!validation.valid && validation.message && (
          <motion.div
            className="text-red-500 text-sm mt-1"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {validation.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character counter for textareas */}
      {isTextarea && showCharacterCount && <CharacterCounter current={value.length} max={maxLength} min={minLength} />}
    </div>
  )
}
