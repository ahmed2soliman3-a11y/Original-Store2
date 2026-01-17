import { Truck, Shield, Star, Headphones } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "شحن سريع",
    description: "توصيل خلال 2-5 أيام",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "منتجات أصلية 100%",
  },
  {
    icon: Star,
    title: "تقييم عالي",
    description: "+5000 عميل راضي",
  },
  {
    icon: Headphones,
    title: "دعم متواصل",
    description: "خدمة عملاء 24/7",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-muted-foreground text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
