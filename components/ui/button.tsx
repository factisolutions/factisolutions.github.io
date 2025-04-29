"use client"

import React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:shadow-md hover:scale-[1.02] focus:ring-brand-blue",
        secondary:
          "bg-white text-brand-blue border border-brand-blue hover:bg-blue-50 focus:ring-brand-blue hover:shadow-md",
        dark: "bg-brand-navy text-white hover:bg-opacity-90 focus:ring-brand-navy hover:shadow-md",
        outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 shadow-none",
        link: "bg-transparent text-brand-blue underline-offset-4 hover:underline shadow-none p-0 h-auto",
        gradient:
          "bg-gradient-to-r from-brand-teal to-brand-blue btn-gradient-animate text-white hover:shadow-md hover:scale-[1.02] focus:ring-brand-blue",
        animated:
          "bg-gradient-to-r from-brand-teal to-brand-blue btn-gradient-animate text-white hover:shadow-lg hover:scale-[1.05] focus:ring-brand-blue relative overflow-hidden",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
  fullWidth?: boolean
  whileHover?: any
  whileTap?: any
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, href, children, whileHover, whileTap, ...props }, ref) => {
    if (href) {
      if (whileHover || whileTap) {
        return (
          <motion.div whileHover={whileHover} whileTap={whileTap}>
            <Link href={href} className={cn(buttonVariants({ variant, size, fullWidth, className }))}>
              <span className="relative z-10">{children}</span>
            </Link>
          </motion.div>
        )
      }
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size, fullWidth, className }))}>
          <span className="relative z-10">{children}</span>
        </Link>
      )
    }

    if (whileHover || whileTap) {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
          {...props}
          whileHover={whileHover}
          whileTap={whileTap}
        >
          <span className="relative z-10">{children}</span>
        </motion.button>
      )
    }

    return (
      <button className={cn(buttonVariants({ variant, size, fullWidth, className }))} ref={ref} {...props}>
        <span className="relative z-10">{children}</span>
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
