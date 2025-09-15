import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">Song4U</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#packages" className="hover:text-slate-900">Packages</a>
            <a href="#samples" className="hover:text-slate-900">Samples</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex gap-2">
            <a href="#start" className="rounded-full px-4 py-2 text-white bg-sky-600 hover:bg-sky-700 text-sm font-semibold">Start my song</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-stone-50" />
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              A custom song for your <span className="text-sky-600">unforgettable day</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Professional composers & vocalists craft your story into a bespoke track for weddings, proposals, or any special moment.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#start" className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-semibold">Start my song</a>
              <a href="#samples" className="rounded-lg border border-slate-300 hover:bg-slate-50 px-5 py-3 font-semibold">Listen to samples</a>
            </div>
            <p className="mt-3 text-sm text-slate-500">100% human-made • Any genre</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop"
              alt="Couple dancing"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-28">
        <h2 className="text-3xl font-extrabold">How it works</h2>
        <ol className="mt-8 grid md:grid-cols-5 gap-6">
          {[
            {n:1,t:"Tell us your story",d:"Share names, memories, tone & genre."},
            {n:2,t:"Pick a package",d:"Choose length, vocalist, and style."},
            {n:3,t:"Approve lyrics",d:"We draft lyrics; you request edits."},
            {n:4,t:"Review demo",d:"Hear a rough mix and give feedback."},
            {n:5,t:"Receive song",d:"Get WAV/MP3 + lyric sheet + instrumental."},
          ].map(s => (
            <li key={s.n} className="rounded-2xl border border-slate-200 p-4">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">{s.n}</div>
              <h3 className="mt-3 font-bold">{s.t}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-stone-50 py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-extrabold">Packages</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {name:"Starter",price:"£399",items:["60–90 sec custom song","1 vocalist","2 revision rounds","MP3 + WAV"], cta:"Start Starter"},
              {name:"Signature",price:"£699",items:["2–3 min full song","Pro vocalist","Unlimited lyric tweaks (3 days)","Instrumental + lyric sheet"], cta:"Start Signature"},
              {name:"Deluxe",price:"£999",items:["3–4 min premium production","Choice of genre & singer","Priority turnaround","Stems for videographer"], cta:"Start Deluxe"},
            ].map((p, i) => (
              <div key={p.name} className={`rounded-2xl border p-6 bg-white ${i===1?"ring-2 ring-sky-500":""}`}>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.items.map(it=> <li key={it} className="flex gap-2"><span>✓</span>{it}</li>)}
                </ul>
                <a href="#start" className={`mt-6 inline-block w-full text-center rounded-lg px-4 py-2 font-semibold ${i===1?"bg-sky-600 text-white hover:bg-sky-700":"border border-slate-300 hover:bg-slate-50"}`}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-28">
        <h2 className="text-3xl font-extrabold">Listen to sample songs</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(n => (
            <figure key={n} className="rounded-2xl border border-slate-200 p-4">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200"
                alt="waveform"
                className="rounded-lg h-36 w-full object-cover"
              />
              <figcaption className="mt-3 font-semibold">Sample {n}</figcaption>
              <audio className="mt-2 w-full" controls>
                <source src="https://www.kozco.com/tech/LRMonoPhase4.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact anchor (footer acts as contact) */}
      <footer id="contact" className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-extrabold">Song4U</div>
            <p className="text-sm text-slate-600 mt-2">Custom songs for weddings & special moments.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-slate-600 mt-2">Email: hello@song4u.co.uk<br/>Phone: +44 0000 000000</p>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-2 flex gap-3 text-sm text-slate-600">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}