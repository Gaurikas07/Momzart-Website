export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="space-y-3 rounded-xl border bg-white p-4">
        <input className="w-full rounded border p-2" placeholder="Email" />
        <input className="w-full rounded border p-2" type="password" placeholder="Password" />
        <button className="w-full rounded-full bg-brand p-2 text-white">Sign In</button>
      </form>
    </section>
  );
}
