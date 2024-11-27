import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'

const products = [
  { id: 1, name: "iPhone 12", price: 69999, image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg" },
  { id: 2, name: "MacBook Air", price: 92900, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg" },
  { id: 3, name: "Bose QuietComfort 45", price: 29900, image: "https://m.media-amazon.com/images/I/51JbsHSktkL._SX679_.jpg" },
  { id: 4, name: "Apple Watch Series 6", price: 40900, image: "https://m.media-amazon.com/images/I/71qMIJnrhFL._SX679_.jpg" },
  { id: 5, name: "iPad Air", price: 54900, image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._SX679_.jpg" },
  { id: 6, name: "Nintendo Switch OLED", price: 31999, image: "https://m.media-amazon.com/images/I/51yJ+OqktYL._SX679_.jpg" },
  { id: 7, name: "PlayStation 5", price: 49990, image: "https://m.media-amazon.com/images/I/51051FiD9UL._SX679_.jpg" },
  { id: 8, name: "AirPods Pro", price: 24900, image: "https://m.media-amazon.com/images/I/71zny7BTRlL._SX679_.jpg" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  )
}

