import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-gray-600">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Now inviting early access
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Sustainable product choices,{" "}
            <span className="text-emerald-700">without the guesswork.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            EarthWise scores everyday products across materials, packaging,
            shipping, and end-of-life. Get practical, credible swaps—no greenwashing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/waitlist"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Join the waitlist
            </Link>
            <a
              href="#how"
              className="rounded-full border px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="sr-only">Why people choose EarthWise</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">🌿</div>
            <h3 className="text-lg font-semibold text-gray-900">Transparent scoring</h3>
            <p className="mt-2 text-gray-600">
              Clear criteria across materials, packaging, shipping distance, and end-of-life.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">✅</div>
            <h3 className="text-lg font-semibold text-gray-900">Practical swaps</h3>
            <p className="mt-2 text-gray-600">
              Affordable alternatives you’ll actually use—no guilt trips, just better options.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900">No greenwashing</h3>
            <p className="mt-2 text-gray-600">
              Evidence-based summaries with sources. We show the tradeoffs, not hype.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-16">
        <span className="rounded-full border px-3 py-1 text-sm text-gray-600">How it works</span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Compare. Understand. Choose.
        </h2>
        <ol className="mt-6 space-y-3 text-gray-700">
          <li>1) Search a category (cleaning, kitchen, personal care)</li>
          <li>2) Compare EarthWise Scores side-by-side</li>
          <li>3) Pick the swap that fits your budget & values</li>
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/waitlist"
            className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Get early access
          </Link>
          <a
            href="#faq"
            className="rounded-full border px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50"
          >
            Read FAQ
          </a>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
          <blockquote className="text-lg leading-relaxed text-gray-800">
            “EarthWise helped our household actually switch products we feel good about —
            without spending hours researching and second-guessing every claim.”
          </blockquote>
          <div className="mt-4 text-sm font-semibold text-gray-900">Jacob C.</div>
          <div className="text-xs text-gray-500">Early access member</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
        <h3 className="text-xl font-bold text-gray-900">FAQ</h3>
        <div className="mt-6 divide-y rounded-2xl border bg-white">
          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-gray-900">
              What is the EarthWise Score?
            </summary>
            <p className="mt-2 text-gray-700">
              A transparent rating based on materials, packaging, shipping, and end-of-life.
            </p>
          </details>
          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-gray-900">
              How do I join the waitlist?
            </summary>
            <p className="mt-2 text-gray-700">
              Head to the waitlist page, drop your email, and we’ll invite you as we open access.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
