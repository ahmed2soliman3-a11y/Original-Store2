import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl text-center">

        {/* اللوجو */}
        <Image
          src="/logo png.png"
          alt="Original Store"
          width={120}
          height={40}
          className="h-8 w-auto mx-auto mb-4"
        />

        {/* أيقونات السوشيال */}
        <div className="flex justify-center gap-6 mb-4 text-2xl">
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100076287960804&locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/original12eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@original_store_12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>

        </div>

        {/* الحقوق */}
        <p className="text-muted-foreground text-sm">
          © 2026 Original Store. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
