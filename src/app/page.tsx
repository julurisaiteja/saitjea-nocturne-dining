import Image from "next/image";
import Link from "next/link";
import { brand, items, formatMoney } from "@/lib/data";
import { AddButton } from "@/components/AddButton";
import { PromoStrip } from "@/components/PromoStrip";
import { ReviewRail } from "@/components/ReviewRail";

export default function HomePage() {
  const featured = items.slice(0, 4);
  return (
    <div data-style="surreal-dining">
      <PromoStrip />
      <section className="relative min-h-[100svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-70 anim-drift" autoPlay muted loop playsInline poster={brand.heroStill}>
          <source src={brand.heroVideo!} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-canvas" />
        <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
          <p className="float-type font-display text-7xl italic anim-rise md:text-9xl">{brand.name}</p>
          <h1 className="mt-4 max-w-md anim-rise text-lg text-mute" style={{animationDelay:"120ms"}}>{brand.tagline}</h1>
          <div className="mt-8 flex anim-rise gap-3" style={{animationDelay:"220ms"}}>
            <Link href="/book" className="border border-accent px-6 py-3 text-sm tracking-widest uppercase text-accent">{brand.cta}</Link>
            <Link href="/menu" className="px-6 py-3 text-sm tracking-widest uppercase text-mute">Courses</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="clip-chapter relative aspect-[21/9] overflow-hidden">
          <Image src={items[1].image} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <p className="mt-6 font-display text-3xl italic">A chapter plated in shadow and citrus oil.</p>
      </section>
      <section className="overflow-hidden border-y border-line py-6">
        <div className="anim-marquee flex w-max gap-10 whitespace-nowrap px-4 text-sm uppercase tracking-[0.3em] text-mute">
          {[...featured, ...featured].map((item, i) => (
            <span key={i}>{item.title} · {formatMoney(item.price)}</span>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-4">
        {featured.map((item) => (
          <article key={item.id}>
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="25vw" />
            </div>
            <h3 className="mt-3 font-display text-2xl italic">{item.title}</h3>
            <p className="text-sm text-mute">{item.description}</p>
            <div className="mt-3"><AddButton item={item} label="Add course" /></div>
          </article>
        ))}
      </section>
      
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl italic anim-rise">Night chapters</h2>
        <p className="mt-3 max-w-xl text-mute">Three movements — salt, smoke, silence — each with its own light temperature.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Salt","Smoke","Silence"].map((ch,i)=>(
            <div key={ch} className="border border-line bg-surface/60 p-6 anim-rise" style={{animationDelay:`${i*80}ms`}}>
              <p className="font-display text-3xl italic text-accent">{ch}</p>
              <p className="mt-2 text-sm text-mute">Courses fire in sequence; pause between chapters is intentional.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-line py-16">
        <div className="anim-marquee flex w-max gap-12 whitespace-nowrap px-4 font-display text-5xl italic text-mute/40">
          {Array.from({length:8}).map((_,i)=><span key={i}>Nocturne ·</span>)}
        </div>
      </section>

      <ReviewRail />
    </div>
  );
}
