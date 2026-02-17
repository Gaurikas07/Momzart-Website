import Link from 'next/link';

export default function OfflinePage() {
  return (
    <section className="mx-auto mt-16 max-w-lg rounded-2xl border bg-white p-8 text-center">
      <h1 className="text-3xl font-bold text-brand">You are offline</h1>
      <p className="mt-3 text-zinc-600">Momzart is still available in offline mode for recently visited pages.</p>
      <Link href="/" className="mt-5 inline-block rounded-full bg-brand px-5 py-2 text-white">
        Back to Home
      </Link>
    </section>
  );
}
