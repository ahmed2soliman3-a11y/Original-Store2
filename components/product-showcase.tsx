"use client"

import { Card, CardContent } from "@/components/ui/card"


export function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-4">مجموعة فاخرة</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6"> عطور عالمية</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اختيار مميز من أشهر العطور الرجالية العالمية لتناسب جميع المناسبات
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {perfumes.map((perfume, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="relative w-full aspect-[2/3] mb-4 overflow-hidden rounded-lg bg-secondary">
                  <Image
                    src={perfume.image || "/placeholder.svg"}
                    alt={perfume.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-2 text-foreground">{perfume.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{perfume.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
