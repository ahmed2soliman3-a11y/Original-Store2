"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
      const CHAT_ID = "1798381739"

      if (!TOKEN) {
        throw new Error("Telegram token not found")
      }

      const message = `
📦 طلب جديد
👤 الاسم: ${name}
📞 الهاتف: ${phone}
🏙️ المحافظة: ${city}
📍 العنوان: ${address}
`

      const res = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      )

      if (!res.ok) throw new Error("Telegram API error")

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
      <section className="py-24 px-4">
        <Card className="max-w-xl mx-auto text-center">
          <CardContent className="pt-10 pb-10">
            <CheckCircle2 className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">تم تأكيد الطلب</h3>
            <p className="text-muted-foreground">
              سيتم التواصل معك خلال 24 ساعة
            </p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">اطلب الآن</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input placeholder="الاسم بالكامل" required value={name} onChange={e => setName(e.target.value)} />
              <Input placeholder="رقم الهاتف" required value={phone} onChange={e => setPhone(e.target.value)} />
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المحافظة" />
                </SelectTrigger>
                <SelectContent>
                  {egyptianCities.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input placeholder="العنوان بالتفصيل" required value={address} onChange={e => setAddress(e.target.value)} />

              {error && <p className="text-red-500 text-center">{error}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "جاري الإرسال..." : "تأكيد الطلب"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
