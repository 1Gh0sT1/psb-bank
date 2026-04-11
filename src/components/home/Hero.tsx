import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-64 pb-48 lg:pt-80 lg:pb-72">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
        <Image 
          src="/assets/kit/marks/psb-mark-white.svg" 
          alt="" 
          width={1000}
          height={1000}
          className="w-full h-full object-contain" 
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="max-w-5xl">
          <div className="mb-12 flex items-center space-x-6">
            <div className="h-[1px] w-12 bg-gold" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">
              Sovereign Financial Framework Act (2011)
            </h2>
          </div>

          <h1 className="font-serif text-5xl tracking-tight text-white sm:text-9xl lg:text-[11rem] leading-[0.85] mb-16">
            Sovereign. <br />
            Secure. <span className="text-gold italic">Infinite.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div />

            <div className="flex flex-wrap gap-8 lg:justify-end">
              <Link
                href="/about-pacific-settlement-bank"
                className="bg-gold px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-navy hover:bg-white transition-all shadow-2xl"
              >
                Our Mandate
              </Link>
              <Link href="/list-of-partner-banks" className="border border-white/20 px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:border-gold hover:text-gold transition-all">
                Access Registries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
