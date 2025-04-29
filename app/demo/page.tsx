"use client"

import { useState } from "react"
import AnimatedLogo from "@/components/animated-logo"
import LoadingSpinner from "@/components/loading-spinner"
import { Button } from "@/components/ui/button"

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Logo Animation Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Icon Only</h2>
          <div className="flex justify-center">
            <AnimatedLogo size="lg" variant="icon" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Full Logo</h2>
          <div className="flex justify-center">
            <AnimatedLogo size="lg" variant="full" />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-xl font-bold mb-4">Loading Spinner Demo</h2>
        <div className="flex flex-col items-center">
          <Button onClick={simulateLoading} disabled={isLoading}>
            {isLoading ? "Loading..." : "Simulate Loading"}
          </Button>

          {isLoading && (
            <div className="mt-8">
              <LoadingSpinner text="Carregando..." />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Size Variations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="mb-2">Small</p>
            <AnimatedLogo size="sm" />
          </div>

          <div className="text-center">
            <p className="mb-2">Medium</p>
            <AnimatedLogo size="md" />
          </div>

          <div className="text-center">
            <p className="mb-2">Large</p>
            <AnimatedLogo size="lg" />
          </div>

          <div className="text-center">
            <p className="mb-2">Extra Large</p>
            <AnimatedLogo size="xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
