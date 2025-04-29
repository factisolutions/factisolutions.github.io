"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import ScrollReveal from "./animations/scroll-reveal"
import SuccessAnimation from "./animations/success-animation"
import FormField from "./ui/form-field"
import { Button } from "./ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    // Validate name
    if (!formData.name.trim()) {
      errors.name = "Nome é obrigatório"
    } else if (formData.name.trim().length < 3) {
      errors.name = "Nome deve ter pelo menos 3 caracteres"
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = "Email é obrigatório"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email inválido"
    }

    // Validate phone
    const phoneRegex = /^[0-9\s\-+$$$$]{8,20}$/
    if (!formData.phone.trim()) {
      errors.phone = "Telefone é obrigatório"
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Telefone inválido"
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = "Mensagem é obrigatória"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Mensagem deve ter pelo menos 10 caracteres"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields before submission
    if (!validateForm()) {
      // Shake the form to indicate validation errors
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      // In a real implementation, you would send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFormErrors({})
    } catch (error) {
      setSubmitError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitSuccess(false)
    setSubmitError("")
    setFormErrors({})
  }

  // Validation functions for each field
  const validateName = (value: string) => {
    if (!value.trim()) {
      return { valid: false, message: "Nome é obrigatório" }
    } else if (value.trim().length < 3) {
      return { valid: false, message: "Nome deve ter pelo menos 3 caracteres" }
    }
    return { valid: true }
  }

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value.trim()) {
      return { valid: false, message: "Email é obrigatório" }
    } else if (!emailRegex.test(value)) {
      return { valid: false, message: "Email inválido" }
    }
    return { valid: true }
  }

  const validatePhone = (value: string) => {
    const phoneRegex = /^[0-9\s\-+$$$$]{8,20}$/
    if (!value.trim()) {
      return { valid: false, message: "Telefone é obrigatório" }
    } else if (!phoneRegex.test(value)) {
      return { valid: false, message: "Telefone inválido" }
    }
    return { valid: true }
  }

  const validateMessage = (value: string) => {
    if (!value.trim()) {
      return { valid: false, message: "Mensagem é obrigatória" }
    } else if (value.trim().length < 10) {
      return { valid: false, message: "Mensagem deve ter pelo menos 10 caracteres" }
    }
    return { valid: true }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
      <ScrollReveal>
        <h2 className="text-2xl font-bold mb-2">Envie uma mensagem</h2>
        <p className="text-gray-600 mb-6">
          Preencha o formulário abaixo e entraremos em contato o mais breve possível.
        </p>
      </ScrollReveal>

      {submitSuccess ? (
        <SuccessAnimation
          message="Sua mensagem foi enviada com sucesso! Entraremos em contato em breve."
          onReset={resetForm}
        />
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <ScrollReveal direction="up" delay={0.1}>
            <FormField
              id="name"
              name="name"
              label="Nome"
              value={formData.name}
              onChange={handleChange}
              required
              validate={validateName}
              validateOnChange={true}
              placeholder="Seu nome completo"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <FormField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              validate={validateEmail}
              validateOnChange={true}
              placeholder="seu.email@exemplo.com"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <FormField
              id="phone"
              name="phone"
              label="Telefone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              validate={validatePhone}
              validateOnChange={true}
              placeholder="(00) 00000-0000"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <FormField
              id="message"
              name="message"
              label="Mensagem"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              required
              validate={validateMessage}
              validateOnChange={true}
              rows={5}
              minLength={10}
              maxLength={500}
              showCharacterCount={true}
              placeholder="Digite sua mensagem aqui..."
            />
          </ScrollReveal>

          {submitError && (
            <ScrollReveal>
              <motion.div
                className="bg-red-50 border border-red-200 text-red-700 p-4 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {submitError}
              </motion.div>
            </ScrollReveal>
          )}

          <ScrollReveal direction="up" delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={Object.keys(formErrors).length > 0 ? { x: [0, -10, 10, -10, 10, 0] } : {}}
              transition={Object.keys(formErrors).length > 0 ? { duration: 0.5 } : {}}
            >
              <Button type="submit" fullWidth={true} disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    Enviando...
                  </div>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </motion.div>
          </ScrollReveal>
        </motion.form>
      )}
    </div>
  )
}
