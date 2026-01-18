"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-4 pt-32 md:pt-40 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Image */}
        <div className="mb-8 mt-8 flex justify-center">
          <Image
            src="/hero-image3.jpg"
            alt="عطور Original Store"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 leading-tight tracking-wide">
          <span className="block text-foreground italic">
            الجودة اللي تدور عليها
          </span>

          <span className="block text-primary mt-2 drop-shadow-sm">
            والسعر اللي ما يتفوتش
          </span>

          <span className="block text-muted-foreground text-lg md:text-2xl mt-4 font-inter tracking-normal">
            تفاصيل صغيرة… بتصنع فرق كبير
          </span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          مجموعة حصرية من أفخم العطور العالمية
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToOrder}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full"
          >
            اطلب الآن
          </Button>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
