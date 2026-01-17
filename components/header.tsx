import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Image src="/logo.png" alt="Original Store" width={180} height={80} className="h-16 w-auto" />
      </div>
    </header>
  )
}
