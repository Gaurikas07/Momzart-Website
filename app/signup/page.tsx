export default function SignupPage() {
  return (
    <section className="mx-auto max-w-md space-y-4">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <form className="space-y-3 rounded-xl border bg-white p-4">
        <input className="w-full rounded border p-2" placeholder="Name" />
        <input className="w-full rounded border p-2" placeholder="Email" />
        <input className="w-full rounded border p-2" type="password" placeholder="Password" />
        <button className="w-full rounded-full bg-brand p-2 text-white">Sign Up</button>
      </form>
    </section>
  );
}
