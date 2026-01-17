import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { PricingSection } from "@/components/pricing-section"
import { OrderForm } from "@/components/order-form"
import { TrustBadges } from "@/components/trust-badges"
import { StickyOrderButton } from "@/components/sticky-order-button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <PricingSection />
      <OrderForm />
      <TrustBadges />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}
