import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const products = [
  { id: '1', title: 'Amber Oud Candle', price: 1499, category: 'Best Seller', rating: 4.8 },
  { id: '2', title: 'Vanilla Rose Candle', price: 1199, category: 'New Arrival', rating: 4.6 },
  { id: '3', title: 'Coastal Linen Candle', price: 999, category: 'Featured', rating: 4.5 }
];

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-2xl bg-gradient-to-r from-brand to-amber-700 p-10 text-white">
        <p className="text-sm uppercase tracking-[0.2em]">Handcrafted Luxury</p>
        <h1 className="mt-3 text-4xl font-black">Momzart Premium Candle Collection</h1>
        <p className="mt-4 max-w-xl">Discover best sellers, new arrivals, and signature fragrances curated for modern homes.</p>
        <Link href="/products" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-brand">Shop Now</Link>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {['Luxury', 'Floral', 'Fresh', 'Gift Sets'].map((category) => (
            <Link key={category} href={`/products?category=${category}`} className="rounded-xl border bg-white p-6 text-center font-semibold">{category}</Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Featured / Best Sellers / New Arrivals</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
