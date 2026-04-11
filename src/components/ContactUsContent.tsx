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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Left Column: Headquarters & Nodes */}
            <div className="lg:col-span-7 space-y-32">
              
              {/* Global Headquarters Section */}
              <section>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16 border-b border-zinc-100 pb-8 flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Global Headquarters
                </h3>
                <div className="bg-zinc-50 p-12 lg:p-16 border border-zinc-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                  
                  <div className="space-y-12 relative z-10">
                    <div>
                      <h4 className="text-2xl font-serif text-navy mb-4">SNPF Building</h4>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">Global Headquarters & Private Banking</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Location</span>
                        <p className="text-sm font-light text-navy leading-loose">Majuro, Republic of the <br />Marshall Islands (MH)</p>
                      </div>
                      <div className="space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Address</span>
                        <p className="text-sm font-light text-navy leading-loose font-mono">
                          Level 4, SNPF Building,<br />
                          Beach Road, Apia, Samoa.
                        </p>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-zinc-200 flex flex-col gap-8">
                       <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-2">
                             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Institutional Integrity Support</span>
                             <span className="text-3xl font-serif text-navy">Ref: +1 345 949 6754</span>
                          </div>
                       </div>
                       
                       <div className="w-full h-80 bg-navy mt-4 relative overflow-hidden saturate-[0.1] contrast-125 brightness-75">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.6133037418!2d171.37123447910158!3d7.085002499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c330f6a27e7eb%3A0xe5495c643916972e!2sMajuro%2C%20Marshall%20Islands!5e0!3m2!1sen!2s!4v1712600000000!5m2!1sen!2s" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                          <div className="absolute inset-0 pointer-events-none border border-gold/20" />
                          <div className="absolute top-4 left-4 bg-navy text-gold text-[8px] font-black uppercase tracking-widest px-3 py-1">
                             Location: Samoa Headquarters
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Strategic Regional Nodes */}
              <section>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">Strategic Regional Nodes</h3>
                <div className="space-y-6">
                   {[
                     { name: "Samoa Digital Hub (Clearing)", address: "SNPF Building, Beach Road, Apia | +685 24100" },
                     { name: "Vanuatu Fiduciary Center", address: "Govant Building, Kumul Highway, Port Vila | +678 22189" },
                     { name: "Palau Fintech Innovation", address: "WCTC Central Plaza, Main Street, Koror | +680 488 2440" },
                     { name: "Cook Islands Wealth Node", address: "Victoria Road, Avarua, Rarotonga | +682 29363" }
                   ].map((node, i) => (
                     <div key={i} className="flex justify-between items-center py-8 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors px-6 -mx-6">
                        <span className="text-[11px] font-black uppercase tracking-widest text-navy">{node.name}</span>
                        <span className="text-xs font-light text-zinc-500 italic max-w-md text-right">{node.address}</span>
                     </div>
                   ))}
                </div>
              </section>

              {/* Global Correspondence & Logistics */}
              <section className="bg-navy p-12 lg:p-16 text-white relative h-full">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5rem] text-gold mb-12">Global Correspondence & Logistics</h3>
                <div className="space-y-12">
                   <div className="space-y-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Mailing Address</span>
                      <p className="text-lg font-light text-white/80 leading-relaxed font-mono">
                          P.O. Box 4200, SNPF Building, Apia, Samoa.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Sovereign Courier Service</span>
                      <p className="text-sm font-light text-white/60 leading-relaxed italic">
                         Available for physical asset transfers (Gold/Documents) via PSB-authorized private logistics.
                      </p>
                   </div>
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
                      { label: "General Inquiries", value: "info@psb-pacific.com" },
                      { label: "Institutional Compliance", value: "compliance@psb-pacific.com" },
                      { label: "Governor’s Office", value: "governor@psb-pacific.com" }
                    ].map((proto, i) => (
                      <div key={i} className="flex flex-col gap-2">
                         <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{proto.label}</span>
                         <a href={`mailto:${proto.value}`} className="text-lg font-mono text-navy hover:text-gold transition-colors">{proto.value}</a>
                      </div>
                    ))}
                    <div className="pt-8">
                       <button className="w-full flex items-center justify-center gap-4 border border-navy/10 py-5 text-[10px] font-black uppercase tracking-[0.4rem] text-navy hover:bg-navy hover:text-white transition-all">
                          Download PSB Public PGP Key
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                       </button>
                    </div>
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
