"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)
    targetDate.setHours(23, 59, 59, 999)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { value: timeLeft.seconds, label: "ثانية" },
    { value: timeLeft.minutes, label: "دقيقة" },
    { value: timeLeft.hours, label: "ساعة" },
    { value: timeLeft.days, label: "يوم" },
  ]

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-card border border-border rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <span className="font-sans text-2xl md:text-3xl font-bold text-primary">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-muted-foreground text-xs mt-2">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}
