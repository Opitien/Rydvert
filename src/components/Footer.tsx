import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div>
            <Image src="/logo-white.svg" alt="Rydvert" width={110} height={26} className="h-6 w-auto mb-3" />
            <p className="text-white/20 text-sm">Advertise on the move.</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-white/30">
            <Link href="#product"         className="hover:text-white transition-colors">Product</Link>
            <Link href="#for-businesses"  className="hover:text-white transition-colors">For Businesses</Link>
            <Link href="#for-drivers"     className="hover:text-white transition-colors">For Vehicle Owners</Link>
            <Link href="#how-it-works"    className="hover:text-white transition-colors">How it works</Link>
          </nav>

          <div className="text-white/20 text-xs">
            © {new Date().getFullYear()} Rydvert · rydvert.com
          </div>

        </div>
      </div>
    </footer>
  );
}
