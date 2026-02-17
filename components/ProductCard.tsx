import Link from 'next/link';

type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-amber-100 bg-white p-4 shadow-sm">
      <div className="mb-3 h-40 rounded-lg bg-amber-50" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-zinc-500">{product.category}</p>
      <p className="mt-2 font-bold text-brand">₹{product.price}</p>
      <p className="text-sm">⭐ {product.rating ?? 4.5}</p>
      <Link href={`/product/${product.id}`} className="mt-3 inline-block text-sm font-semibold text-accent">
        View details
      </Link>
    </article>
  );
}
