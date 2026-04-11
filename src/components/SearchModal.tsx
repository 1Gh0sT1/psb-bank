'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import contentData from '@/data/content.json';

interface SearchResult {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Search logic
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase();
    const matches: SearchResult[] = [];

    // 1. Search in content.json
    contentData.forEach((item: any) => {
      const plainText = item.html.replace(/<[^>]*>/g, ' ');
      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const contentMatch = plainText.toLowerCase().includes(cleanQuery);

      if (titleMatch || contentMatch) {
        let excerpt = '';
        if (contentMatch) {
          const index = plainText.toLowerCase().indexOf(cleanQuery);
          const start = Math.max(0, index - 60);
          const end = Math.min(plainText.length, index + 100);
          excerpt = (start > 0 ? '...' : '') + plainText.substring(start, end).trim() + '...';
        } else {
          excerpt = plainText.substring(0, 120).trim() + '...';
        }

        // Fix path for introduction
        const finalSlug = item.slug === 'introduction' ? '/about-pacific-settlement-bank' : `/${item.slug}`;

        matches.push({
          title: item.title,
          slug: finalSlug,
          excerpt: excerpt,
          category: 'Institutional'
        });
      }
    });

    // 2. Comprehensive indexing of all static sections
    const staticPages = [
      // About Section
      { title: 'Who We Are', slug: '/about-pacific-settlement-bank', excerpt: 'Institutional history, mission and sovereign mandate of PSB.', category: 'Institutional' },
      { title: 'Board of Directors', slug: '/board-of-directors', excerpt: 'The supreme governing and fiduciary body of the institution.', category: 'Governance' },
      { title: 'Strategic Functions', slug: '/functions', excerpt: 'A detailed look at our hybrid settlement and fiduciary roles.', category: 'Institutional' },
      { title: 'Careers', slug: '/careers', excerpt: 'Join our team of global experts in finance and technology.', category: 'Institutional' },
      
      // Banking & Markets
      { title: 'Exchange Rates', slug: '/exchange-rates', excerpt: 'Real-time multi-currency exchange rates and history.', category: 'Banking & Markets' },
      { title: 'FX Auction', slug: '/fx-auction', excerpt: 'Sovereign-tier asset auctions for institutional investors.', category: 'Banking & Markets' },
      { title: 'Partner Banks', slug: '/list-of-partner-banks', excerpt: 'Official registry of correspondent and partner banks.', category: 'Registries' },
      { title: 'Forex Bureaus', slug: '/list-of-forex-bureaus', excerpt: 'Directory of licensed foreign exchange bureaus.', category: 'Registries' },
      
      // Publications
      { title: 'Licensing Records', slug: '/licensing', excerpt: 'Institutional licensing frameworks and active mandates.', category: 'Publications' },
      { title: 'Monetary Policy', slug: '/monetary-policy', excerpt: 'Official policy statements and stability frameworks.', category: 'Publications' },
      { title: 'Regulations', slug: '/regulations', excerpt: 'The Sovereign Financial Framework Act and institutional rules.', category: 'Publications' },
      { title: 'Monetary Statistics', slug: '/monetary-statistics', excerpt: 'Quarterly reports and institutional economic data.', category: 'Publications' },
      
      // Critical Links
      { title: 'Governor’s Statement', slug: '/governors-statement', excerpt: 'Official address on institutional stability and future growth.', category: 'Executive' },
      { title: 'Contact Us', slug: '/contact-us', excerpt: 'Global headquarters and regional operational nodes.', category: 'Support' },
      { title: 'Latest News', slug: '/news', excerpt: 'Official announcements and institutional updates.', category: 'Media' },
    ];

    staticPages.forEach(p => {
      const matchTitle = p.title.toLowerCase().includes(cleanQuery);
      const matchExcerpt = p.excerpt.toLowerCase().includes(cleanQuery);
      
      if ((matchTitle || matchExcerpt) && !matches.some(m => m.slug === p.slug)) {
        matches.push(p);
      }
    });

    setResults(matches.slice(0, 10)); // Slightly more results
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 px-4 sm:pt-32 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden border border-gold/20 pointer-events-auto"
          >
            {/* Search Input Area */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-zinc-100">
              <SearchIcon className="w-6 h-6 text-gold" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search the portal..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-navy font-serif italic text-xl placeholder:text-navy/20"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-navy/40" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.length > 0 && results.length === 0 ? (
                <div className="py-20 px-10 text-center">
                  <p className="text-navy/40 font-serif italic text-lg">No results found for "{query}"</p>
                </div>
              ) : results.length > 0 ? (
                <div className="py-4">
                  <div className="px-6 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/60">Search Results</span>
                  </div>
                  <div className="space-y-1">
                    {results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={result.slug}
                        onClick={onClose}
                        className="flex flex-col gap-1 px-8 py-5 hover:bg-zinc-50 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-gold/40 group-hover:text-gold transition-colors" />
                            <h4 className="text-navy font-serif italic text-lg font-bold group-hover:text-gold transition-colors">
                              {result.title}
                            </h4>
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-navy/20 group-hover:text-navy/40">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-sm text-navy/60 pl-7 line-clamp-2">
                          {result.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-12 px-10">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-navy/20 mb-6">Suggestions</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Board of Directors', 'Exchange Rates', 'Monetary Policy', 'Contact'].map(s => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="text-left px-5 py-3 bg-zinc-50 border border-zinc-100 text-navy/60 text-xs font-bold hover:border-gold hover:text-gold transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-zinc-50 px-8 py-4 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-widest text-navy/30">
                <span className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-white border border-zinc-200 rounded text-navy/60 shadow-sm">ESC</span> to Close
                </span>
              </div>
              <div className="flex items-center gap-2 text-gold opacity-40">
                 <span className="text-[10px] uppercase font-bold tracking-widest">Sovereign Search Node ALPHA</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
