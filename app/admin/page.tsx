export default function AdminPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4">Revenue Analytics</div>
        <div className="rounded-xl border bg-white p-4">Orders Management</div>
        <div className="rounded-xl border bg-white p-4">Inventory Overview</div>
      </div>
      <div className="rounded-xl border bg-white p-4">Product CRUD panel: add / edit / delete candles.</div>
    </section>
  );
}
