import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <section className="mx-auto max-w-xl space-y-4 rounded-xl border bg-white p-6 text-center">
      <h1 className="text-3xl font-bold text-green-700">Order Confirmed 🎉</h1>
      <p>Your Momzart order has been placed successfully.</p>
      <Link href="/orders" className="inline-block rounded-full bg-brand px-5 py-2 text-white">Track Orders</Link>
    </section>
  );
}
