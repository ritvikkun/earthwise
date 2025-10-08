export default function About() {
  return (
    <main className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            About <span className="text-emerald-700">EarthWise</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our mission is to make sustainable product choices easy, credible, and practical —
            no greenwashing, no guesswork.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold text-gray-900">Why we started</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          We were frustrated by vague eco-claims and confusing labels. EarthWise distills the
          signal from the noise with a transparent scoring model across four factors: materials,
          packaging, shipping, and end-of-life.
        </p>
        <p className="mt-3 leading-relaxed text-gray-700">
          Every recommendation comes with a short rationale and sources so you can understand the
          tradeoffs — and pick the swap that fits your budget and values.
        </p>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <h3 className="text-2xl font-bold text-gray-900">Our values</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">🌿</div>
            <h4 className="font-semibold text-gray-900">Transparency</h4>
            <p className="mt-2 text-sm text-gray-600">
              Plain-English scoring with criteria and sources. We show the tradeoffs, not hype.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">🛠️</div>
            <h4 className="font-semibold text-gray-900">Practicality</h4>
            <p className="mt-2 text-sm text-gray-600">
              Affordable swaps you’ll actually use — good for the planet and your routine.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">🔎</div>
            <h4 className="font-semibold text-gray-900">Trust</h4>
            <p className="mt-2 text-sm text-gray-600">
              Independent methodology; clear, repeatable rules over marketing claims.
            </p>
          </div>
        </div>
      </section>

      {/* WAITLIST STAT */}
      <section className="bg-emerald-700 py-12 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-3xl font-extrabold md:text-4xl">5,000+</div>
          <div className="text-white/85">Waitlist members</div>
        </div>
      </section>
    </main>
  );
}
