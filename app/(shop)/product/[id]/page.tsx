export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-4 h-80 rounded-xl bg-amber-100" />
        <div className="h-20 rounded bg-amber-50" />
        <div className="h-20 rounded bg-amber-50" />
        <div className="h-20 rounded bg-amber-50" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Momzart Signature Candle #{params.id}</h1>
        <p className="text-zinc-600">Hand-poured soy wax candle with long-lasting premium fragrance profile.</p>
        <p className="text-2xl font-black text-brand">₹1,499</p>
        <div className="flex gap-3">
          <button className="rounded-full bg-brand px-5 py-2 text-white">Add to Cart</button>
          <button className="rounded-full border px-5 py-2">Wishlist</button>
        </div>
        <div>
          <h2 className="font-semibold">Reviews</h2>
          <p>⭐ 4.8 (128 ratings)</p>
        </div>
      </div>
    </section>
  );
}
