"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Loader2 } from "lucide-react"

const egyptianCities = [
  "القاهرة","الجيزة","الإسكندرية","الدقهلية","الشرقية","المنوفية","القليوبية",
  "البحيرة","الغربية","كفر الشيخ","دمياط","بورسعيد","الإسماعيلية","السويس",
  "شمال سيناء","جنوب سيناء","البحر الأحمر","الفيوم","بني سويف","المنيا",
  "أسيوط","سوهاج","قنا","الأقصر","أسوان","الوادي الجديد","مطروح",
]

type FormStep = "details" | "success"

export function OrderForm() {
  const [step, setStep] = useState<FormStep>("details")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // بيانات الفورم
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // 🔒 توكن البوت الآمن من .env.local
      const TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
      const CHAT_ID = "1798381739"

      const message = `
📦 طلب جديد
👤 الاسم: ${name}
📞 الهاتف: ${phone}
🏙️ المحافظة: ${city}
📍 العنوان: ${address}
`

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      })

      setStep("success")
    } catch (err) {
      console.error(err)
      setError("حدث خطأ، حاول مرة أخرى")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (step === "success") {
    return (
      <section id="order-form" className="py-24 px-4">
        <Card className="max-w-xl mx-auto bg-card border-primary/20">
          <CardContent className="pt-10 pb-10 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-sans text-2xl font-bold mb-4">تم تأكيد طلبك بنجاح!</h3>
            <p className="text-muted-foreground">سيتم التواصل معك خلال 24 ساعة لترتيب الشحن</p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section id="order-form" className="py-24 px-4">
      <div className="container mx-auto max-w-xl">
        <Card className="bg-card border-border">
          <CardHeader className="text-center pb-2">
            <CardTitle className="font-sans text-3xl">اطلب الآن</CardTitle>
            <p className="text-muted-foreground mt-2">املأ البيانات وهنتواصل معاك لتأكيد الطلب</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم بالكامل</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-secondary border-border focus:border-primary"
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">المحافظة</Label>
                <Select required value={city} onValueChange={setCity}>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="اختر المحافظة" />
                  </SelectTrigger>
                  <SelectContent>
                    {egyptianCities.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">العنوان بالتفصيل</Label>
                <Input
                  id="address"
                  placeholder="الشارع - المنطقة - علامة مميزة"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              {error && <p className="text-destructive text-sm text-center">{error}</p>}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    جاري تأكيد الطلب...
                  </>
                ) : (
                  "تأكيد الطلب"
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                الدفع عند الاستلام •
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
