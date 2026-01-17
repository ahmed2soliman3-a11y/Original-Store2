import { CountdownTimer } from "./countdown-timer"
import { Sparkles } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm">عرض لفترة محدودة</span>
        </div>

        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8">سعر خاص لا يُفوَّت</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
         
        <span className="font-sans text-5xl md:text-6xl font-bold text-primary">500 ج.م</span>

        </div>

        <p className="text-muted-foreground mb-10">ينتهي العرض خلال:</p>

        <CountdownTimer />
      </div>
    </section>
  )
}
