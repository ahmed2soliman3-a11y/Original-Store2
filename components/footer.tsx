import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl text-center">
        <Image src="/logo.png" alt="Original Store" width={120} height={40} className="h-8 w-auto mx-auto mb-4" />
        <p className="text-muted-foreground text-sm">© 2026 Original Store. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
