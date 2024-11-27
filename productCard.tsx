import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-105 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out z-0"></div>
        <div className="relative z-10">
          <Image src={image} alt={name} width={200} height={200} className="w-full h-48 object-contain mb-4" />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{name}</h3>
          <p className="text-gray-600 group-hover:text-white transition-colors duration-300">₹{price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}

