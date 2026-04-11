'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';

import { navigation } from '@/data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] font-sans antialiased pointer-events-none">
      <div 
        className={`bg-white border-b border-zinc-100 transition-all duration-700 overflow-hidden pointer-events-auto ${
          isScrolled ? 'h-0 opacity-0' : 'h-auto py-2 sm:h-12'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row h-full items-center justify-between gap-2 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 overflow-hidden">
             <a href="tel:+13459496754" className="whitespace-nowrap text-[8px] sm:text-[10px] font-bold text-navy hover:text-gold transition-colors tracking-widest flex items-center shrink-0">
                +1 345 949 6754
             </a>
             <a href="mailto:info@psbbank.com" className="whitespace-nowrap text-[8px] sm:text-[10px] font-bold text-navy hover:text-gold transition-colors tracking-widest flex items-center shrink-0">
                info@psbbank.com
             </a>
          </div>
          
          <div className="hidden sm:flex items-center gap-8 text-[10px] uppercase font-bold tracking-widest text-navy/20 whitespace-nowrap overflow-hidden">
             <span>PACIFIC SETTLEMENT BANK</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation - Swiss Elite Bar */}
      <div className={`mx-auto transition-all duration-500 pointer-events-auto ${
        isScrolled ? 'max-w-full' : 'max-w-[1600px] lg:mt-4'
      }`}>
        <nav 
          className={`
            relative bg-white/90 backdrop-blur-md border-b-[0.5px] border-gold/10
            transition-all duration-700
            ${isScrolled ? 'shadow-xl' : 'lg:border lg:rounded-none'}
          `}
        >
          <div className="mx-auto px-8 lg:px-12 flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <img 
                  src="/assets/kit/header-footer/psb-header-blue.png" 
                  alt="Pacific Settlement Bank" 
                  className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Menu Links */}
            <div className="hidden lg:flex items-center h-full gap-10">
              {navigation.map((group) => (
                <div key={group.name} className="group relative h-full flex items-center">
                  {group.href ? (
                    <Link 
                      href={group.href} 
                      className="text-[11px] font-black uppercase tracking-[0.4em] text-navy hover:text-gold transition-all flex items-center h-full border-b-2 border-transparent hover:border-gold"
                    >
                      {group.name}
                    </Link>
                  ) : (
                    <>
                      <button className="text-[11px] font-black uppercase tracking-[0.4em] text-navy hover:text-gold transition-all flex items-center h-full border-b-2 border-transparent hover:border-gold">
                        {group.name}
                        <svg className="ml-3 w-2 h-2 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className="absolute top-full left-0 w-80 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-10 z-[10001] border-[0.5px] border-zinc-100">
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
                        <div className="px-10 space-y-6">
                           {group.links?.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block text-[11px] font-black uppercase tracking-widest text-navy/60 hover:text-navy hover:translate-x-2 transition-all"
                              >
                                {link.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 sm:gap-10">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-navy hover:text-gold transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link 
                href="/"
                className="hidden sm:flex items-center px-6 py-3 bg-navy text-gold text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold hover:text-navy transition-all duration-500 shadow-xl border border-gold/10"
              >
                Online Banking
              </Link>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }} 
                className="lg:hidden p-2 text-navy relative z-[1001]"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9999] p-12 pt-40 overflow-y-auto pointer-events-auto">
            <div className="flex flex-col gap-16 mx-auto max-w-sm">
                <Link 
                  href="/"
                  className="flex items-center justify-center gap-4 px-8 py-6 bg-navy text-gold text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Online Banking
                </Link>

                {navigation.map((group) => (
                    <div key={group.name} className="border-b border-zinc-100 pb-12">
                        {group.href ? (
                          <Link 
                            href={group.href} 
                            className="text-[12px] font-black uppercase tracking-widest text-gold mb-10 block"
                            onClick={() => setIsOpen(false)}
                          >
                            {group.name}
                          </Link>
                        ) : (
                          <>
                            <p className="text-[12px] font-black uppercase tracking-widest text-gold mb-10">{group.name}</p>
                            <div className="flex flex-col gap-8 pl-8 border-l-2 border-gold/10">
                                {group.links?.map((link) => (
                                    <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-widest text-navy/40" onClick={() => setIsOpen(false)}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                          </>
                        )}
                    </div>
                ))}
            </div>
        </div>
      )}
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
}
