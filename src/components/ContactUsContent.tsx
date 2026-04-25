'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { submitContactForm } from '@/lib/actions';

export default function ContactUsContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; message?: string; errors?: any } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitContactForm(formData);

    setIsSubmitting(false);
    setResult(res);

    if (res.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-navy">
      {/* 1. Page Intro / Header - Secure Communications Port */}
      <section className="pt-64 lg:pt-96 pb-24 bg-navy relative overflow-hidden">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="flex flex-col gap-12">
            <Breadcrumbs
              variant="white"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact Us' }
              ]}
            />

            <div className="max-w-4xl border-l border-gold/50 pl-8 md:pl-16">
              <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-gold mb-6">Contact Us</h2>
              <h1 className="text-5xl lg:text-9xl font-serif text-white tracking-tight mb-8">
                Sovereign. Secure. <span className="text-gold">Infinite.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Framework */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

            {/* Left Column: Headquarters & Nodes */}
            <div className="lg:col-span-7 space-y-32">

              {/* Head Office: New Zealand */}
              <section>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16 border-b border-zinc-100 pb-8 flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  🏛 Head Office: New Zealand
                </h3>
                <div className="bg-zinc-50 p-12 lg:p-16 border border-zinc-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000" />

                  <div className="space-y-12 relative z-10">
                    <div>
                      <h4 className="text-2xl font-serif text-navy mb-4">Regional Headquarters & Global Treasury</h4>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">PACIFIC SETTLEMENT BANK (PSB)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Address</span>
                        <p className="text-sm font-light text-navy leading-loose font-mono">
                          Level 28, 1 Queen Street,<br />Britomart, Auckland 1010, New Zealand
                        </p>
                      </div>
                      <div className="space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Contact</span>
                        <p className="text-sm font-light text-navy leading-loose">
                          Email: hq@pacificapitalnetwork.com<br />
                          Phone: +64 9 300 1234
                        </p>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-zinc-200 flex flex-col gap-8">
                      <div className="w-full h-80 bg-navy mt-4 relative overflow-hidden saturate-[0.1] contrast-125 brightness-75">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8!2d174.7679!3d-36.8443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06db0e39f%3A0x7dc21c6db4a1e1f0!2s1%20Queen%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1714070000000!5m2!1sen!2snz"
                          width="100%"
                          height="100%"
                          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 pointer-events-none border border-gold/20" />
                        <div className="absolute top-4 left-4 bg-navy text-gold text-[8px] font-black uppercase tracking-widest px-3 py-1">
                          Location: Auckland, New Zealand
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Regional Branches & Liaison Offices */}
              <section>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">🌐 Regional Branches & Liaison Offices</h3>
                <div className="space-y-6">
                  {[
                    { name: "Australia", address: "Level 45, 188 George St, Circular Quay, Sydney, NSW 2000", email: "australia@pacificapitalnetwork.com", phone: "+61 2 9230 4500" },
                    { name: "Papua New Guinea", address: "Harbour City, Port Moresby, NCD 121", email: "png@pacificapitalnetwork.com", phone: "+675 321 8890" },
                    { name: "Fiji", address: "35 Victoria Parade, Suva", email: "fiji@pacificapitalnetwork.com", phone: "+679 331 2244" },
                    { name: "Solomon Islands", address: "Mendana Avenue, Honiara", email: "solomons@pacificapitalnetwork.com", phone: "+677 21567" },
                    { name: "Vanuatu", address: "Lini Highway, Port Vila, Efate", email: "vanuatu@pacificapitalnetwork.com", phone: "+678 22345" },
                    { name: "Samoa", address: "Beach Road, Apia", email: "samoa@pacificapitalnetwork.com", phone: "+685 24100" },
                    { name: "Tonga", address: "Vuna Road, Finance Plaza, Nuku\u0027alofa", email: "tonga@pacificapitalnetwork.com", phone: "+676 23890" },
                    { name: "Kiribati", address: "Bairiki, Tarawa", email: "kiribati@pacificapitalnetwork.com", phone: "+686 72021" },
                    { name: "Marshall Islands", address: "Delap Village, Majuro 96960", email: "marshall@pacificapitalnetwork.com", phone: "+692 625 5678" },
                    { name: "Micronesia (FSM)", address: "Main Street, Kolonia, Pohnpei 96941", email: "fsm@pacificapitalnetwork.com", phone: "+691 320 2345" },
                    { name: "Palau", address: "Main Street, Koror 96940", email: "palau@pacificapitalnetwork.com", phone: "+680 488 1234" },
                    { name: "Nauru", address: "Aiwo District, Republic of Nauru", email: "nauru@pacificapitalnetwork.com", phone: "+674 557 3210" },
                    { name: "Tuvalu", address: "Vaiaku, Funafuti", email: "tuvalu@pacificapitalnetwork.com", phone: "+688 20123" },
                  ].map((branch, i) => (
                    <div key={i} className="py-8 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors px-6 -mx-6">
                      <span className="text-[11px] font-black uppercase tracking-widest text-navy block mb-3">{branch.name}</span>
                      <p className="text-xs font-light text-zinc-500 italic mb-1">Address: {branch.address}</p>
                      <p className="text-xs font-light text-zinc-500">
                        Email: <a href={`mailto:${branch.email}`} className="text-navy hover:text-gold transition-colors">{branch.email}</a> | Phone: {branch.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Institutional Support */}
              <section className="bg-navy p-12 lg:p-16 text-white relative">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5rem] text-gold mb-12">🛡️ Institutional Support</h3>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/30">General Inquiries</span>
                    <p className="text-lg font-light text-white/80 leading-relaxed font-mono">
                      <a href="mailto:info@pacificapitalnetwork.com" className="hover:text-gold transition-colors">info@pacificapitalnetwork.com</a>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Corporate & Treasury</span>
                    <p className="text-lg font-light text-white/80 leading-relaxed font-mono">
                      <a href="mailto:treasury@pacificapitalnetwork.com" className="hover:text-gold transition-colors">treasury@pacificapitalnetwork.com</a>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Compliance & Audit</span>
                    <p className="text-lg font-light text-white/80 leading-relaxed font-mono">
                      <a href="mailto:compliance@pacificapitalnetwork.com" className="hover:text-gold transition-colors">compliance@pacificapitalnetwork.com</a>
                    </p>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-light text-white/40 leading-relaxed italic">
                    NOTICE: All banking transactions and regulatory inquiries are processed centrally through our secure digital portal. Physical branch access is strictly for pre-arranged institutional appointments. Please contact your local representative via the provided official email to schedule a consultation.
                  </p>
                </div>
              </section>

            </div>

            {/* Right Column: Secure Communication Matrix & Portal */}
            <div className="lg:col-span-5 space-y-24 md:space-y-32">

              {/* Operational Hours */}
              <section>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">Operational Hours</h3>
                <div className="space-y-10">
                  {[
                    { desk: "Institutional Desk (Apia)", time: "Monday–Friday | 08:00 – 17:00 (GMT+13)" },
                    { desk: "Global Settlement Desk", time: "24/7/365 (Automated via Pacific Ledger)" },
                    { desk: "Forensic Support", time: "24/7 for urgent compliance and cybersecurity incidents." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-navy/40">{item.desk}</span>
                      <p className="text-[11px] font-black uppercase tracking-widest text-navy">{item.time}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Secure Communication Protocols */}
              <section className="border-t border-zinc-100 pt-16">
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">Secure Communication Protocols</h3>
                <div className="space-y-12">
                  {[
                    { label: "General Inquiries", value: "info@pacificapitalnetwork.com" },
                    { label: "Corporate & Treasury", value: "treasury@pacificapitalnetwork.com" },
                    { label: "Compliance & Audit", value: "compliance@pacificapitalnetwork.com" }
                  ].map((proto, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{proto.label}</span>
                      <a href={`mailto:${proto.value}`} className="text-lg font-mono text-navy hover:text-gold transition-colors">{proto.value}</a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Secure Contact Portal (Form) */}
              <section id="secure-portal" className="bg-zinc-900 p-8 sm:p-12 lg:p-16 text-white relative">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-8">Secure Contact Portal</h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-12">
                  All data is encrypted via AES-256 and hashed via SHA-256 before transmission.<br className="hidden sm:block" />
                  *(All submissions are AES-256 encrypted)*
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-2">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name*"
                        required
                        className="bg-transparent border-b border-white/10 py-4 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold transition-colors block w-full"
                      />
                      {result?.errors?.name && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-1">{result.errors.name[0]}</p>}
                    </div>

                    <div className="space-y-2">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email*"
                        required
                        className="bg-transparent border-b border-white/10 py-4 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold transition-colors block w-full"
                      />
                      {result?.errors?.email && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-1">{result.errors.email[0]}</p>}
                    </div>

                    <div className="space-y-2">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject*"
                        required
                        className="bg-transparent border-b border-white/10 py-4 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold transition-colors block w-full"
                      />
                      {result?.errors?.subject && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-1">{result.errors.subject[0]}</p>}
                    </div>

                    <textarea
                      name="message"
                      placeholder="Your Message (Optional)"
                      className="bg-transparent border border-white/10 p-6 h-40 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold transition-colors block w-full resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-navy py-6 text-[11px] font-black uppercase tracking-[0.6em] hover:bg-white transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Encrypting...' : 'Submit Securely'}
                    {!isSubmitting && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </button>

                  {result?.success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-widest text-center"
                    >
                      {result.message}
                    </motion.div>
                  )}
                </form>
              </section>

            </div>
          </div>

          {/* Mandatory Compliance Notes */}
          <section className="mt-40 pt-24 border-t border-zinc-100 pb-20">
            <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">Mandatory Compliance Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  title: "Zero-Knowledge Policy",
                  text: "PSB does not store unencrypted PII (Personally Identifiable Information) on public-facing servers."
                },
                {
                  title: "Biometric Pre-Authorization",
                  text: "Physical access to any PSB node requires a 72-hour notice and biometric clearance via the Sovereign Digital Identity (SDI) protocol. No walk-ins permitted."
                },
                {
                  title: "Cyber-Sanitization",
                  text: "All physical mail is subjected to 3D-radiographic screening and digitized in a secure offline environment."
                }
              ].map((note, i) => (
                <div key={i} className="space-y-6 group">
                  <h5 className="text-[11px] font-black uppercase tracking-widest text-navy group-hover:text-gold transition-colors underline underline-offset-8 decoration-gold/20">{note.title}</h5>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed m-0 italic">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Quote / Closing Statement */}
          <section className="pt-40 pb-20 flex flex-col items-center text-center gap-12 border-t border-zinc-100">
            <div className="flex flex-col items-center gap-8 group">
              <div className="w-[1px] h-20 bg-gold/30 group-hover:h-32 transition-all duration-1000" />
              <p className="text-3xl lg:text-4xl font-serif italic text-navy/90 leading-relaxed max-w-4xl tracking-tight">
                "Privacy is not a feature; it is a sovereign right."
              </p>
              <div className="flex flex-col items-center mt-6 gap-2">
                <span className="text-gold text-2xl font-serif italic">Pacific Settlement Bank</span>
                <span className="text-[11px] font-black uppercase tracking-[0.5rem] text-navy/30">Redefining the Architecture of Trust</span>
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
}
