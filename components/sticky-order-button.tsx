"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border z-50 md:hidden">
      <Button
        onClick={scrollToOrder}
        size="lg"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full"
      >
        اطلب الآن - 500 ج.م
      </Button>
    </div>
  )
}
