"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // reuse the same API you used for the contact form
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Waitlist Signup",
          email,
          message: `New waitlist subscriber: ${email}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="relative border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(16,185,129,0.10),transparent)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Join the <span className="text-emerald-700">Waitlist</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Be among the first to try EarthWise and help us shape the scoring model.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining..." : "Join Now"}
          </button>

          {/* Confirmation / error messages — same pattern as contact page */}
          <div className="min-h-[1.5rem]" aria-live="polite">
            {status === "success" && (
              <p className="mt-2 text-center text-sm font-medium text-emerald-700">
                 Thanks! You’ve been added to the waitlist.
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-center text-sm font-medium text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
