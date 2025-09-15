import React from "react";

export default function Hero({
  title = "A custom song for your unforgettable day",
  subtitle = "Professional composers & vocalists craft your story into a bespoke track.",
  ctaText = "Start my song",
  ctaHref = "#start",
  secondaryText = "Listen to samples",
  secondaryHref = "#samples",
  imageUrl = "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop",
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  imageUrl?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-stone-50" />
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {title.split("unforgettable").length > 1 ? (
              <>
                {title.split("unforgettable")[0]}
                <span className="text-sky-600">unforgettable</span>
                {title.split("unforgettable")[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mt-5 text-lg text-slate-600">{subtitle}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={ctaHref}
              className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-semibold"
            >
              {ctaText}
            </a>
            <a
              href={secondaryHref}
              className="rounded-lg border border-slate-300 hover:bg-slate-50 px-5 py-3 font-semibold"
            >
              {secondaryText}
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">100% human-made • Any genre</p>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Hero"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
