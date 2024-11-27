import Link from 'next/link'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#2874f0] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Flipkart</Link>
        <div className="relative flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full py-2 px-4 rounded-sm text-black"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

