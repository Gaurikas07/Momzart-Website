import ProductCard from '@/components/ProductCard';

const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Momzart Candle ${i + 1}`,
  price: 799 + i * 60,
  category: i % 2 ? 'Floral' : 'Luxury',
  rating: 4 + (i % 5) / 10
}));

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Candles</h1>
      <div className="grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-4">
        <input className="rounded border p-2" placeholder="Category" />
        <input className="rounded border p-2" placeholder="Min price" />
        <select className="rounded border p-2"><option>Sort: Popularity</option><option>Price low to high</option></select>
        <input className="rounded border p-2" placeholder="Rating 4+" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {mockProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3, 4].map((page) => <button key={page} className="rounded border px-3 py-1">{page}</button>)}
      </div>
    </div>
  );
}
