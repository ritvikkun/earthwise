export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Insights & <span className="text-emerald-700">Resources</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            Guides, articles, and stories on sustainability, consumer choices,
            and the future of eco-friendly living.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Placeholder card */}
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-500">Coming soon</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Blog articles will appear here.
            </h3>
            <p className="mt-2 text-gray-600">
              We’re preparing practical guides and evidence-based explainers.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
