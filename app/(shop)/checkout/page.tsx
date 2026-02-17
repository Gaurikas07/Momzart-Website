export default function CheckoutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <form className="grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-2">
        <input className="rounded border p-2" placeholder="Full name" />
        <input className="rounded border p-2" placeholder="Phone" />
        <input className="rounded border p-2 md:col-span-2" placeholder="Address line 1" />
        <input className="rounded border p-2" placeholder="City" />
        <input className="rounded border p-2" placeholder="State" />
        <input className="rounded border p-2" placeholder="Postal code" />
        <button className="rounded-full bg-brand px-5 py-2 text-white md:col-span-2">Pay with Razorpay</button>
      </form>
    </section>
  );
}
