"use client";
import Link from "next/link";
import { useState } from "react";
import { formatMoney, items } from "@/lib/data";

const chapters = [
  { id: "salt", title: "I · Salt", ids: [0, 1, 2] },
  { id: "smoke", title: "II · Smoke", ids: [3, 4, 5] },
  { id: "silence", title: "III · Silence", ids: [6, 7, 8, 9] },
];

export default function MenuPage() {
  const [open, setOpen] = useState(chapters[0].id);
  const [party, setParty] = useState(4);
  return (
    <div data-style="surreal-dining" className="mx-auto max-w-4xl px-5 py-16 md:px-8">
      <h1 className="font-display text-6xl italic">Menu by chapter</h1>
      <p className="mt-2 text-mute">Expand each movement to view courses.</p>
      <div className="mt-10 space-y-4">
        {chapters.map((ch) => (
          <div key={ch.id} className="border border-line">
            <button type="button" className="flex w-full items-center justify-between p-4 text-left" onClick={() => setOpen(open === ch.id ? "" : ch.id)}>
              <span className="font-display text-2xl italic">{ch.title}</span>
              <span>{open === ch.id ? "−" : "+"}</span>
            </button>
            {open === ch.id ? (
              <ul className="border-t border-line px-4 pb-4">
                {ch.ids.map((idx) => {
                  const item = items[idx];
                  if (!item) return null;
                  return (
                    <li key={item.id} className="flex justify-between gap-4 py-3 text-sm border-b border-line/50 last:border-0">
                      <span>{item.title}</span>
                      <span className="text-accent">{formatMoney(item.price)}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-14 rounded border border-accent/40 bg-surface/80 p-6">
        <h2 className="font-display text-2xl italic">Private party reserve</h2>
        <label className="mt-4 block text-sm">Guests
          <input type="number" min={2} max={12} value={party} onChange={(e) => setParty(Number(e.target.value))} className="ml-2 w-16 rounded border border-line bg-canvas px-2 py-1" />
        </label>
        <Link href="/book" className="mt-4 inline-block border border-accent px-5 py-2 text-sm uppercase tracking-widest text-accent">Reserve {party} seats (demo)</Link>
      </div>
    </div>
  );
}
