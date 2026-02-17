export default function CartPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="rounded-xl border bg-white p-4">
        <div className="flex items-center justify-between border-b py-3"><span>Amber Oud Candle x 2</span><span>₹2,998</span></div>
        <div className="flex items-center justify-between border-b py-3"><span>Vanilla Rose Candle x 1</span><span>₹1,199</span></div>
        <div className="flex items-center justify-between py-4 text-xl font-bold"><span>Total</span><span>₹4,197</span></div>
      </div>
    </section>
  );
}
