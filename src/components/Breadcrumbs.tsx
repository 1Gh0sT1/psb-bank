'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'white' | 'navy' | 'gold';
}

export default function Breadcrumbs({ items, variant = 'white' }: BreadcrumbsProps) {
  const isWhite = variant === 'white';
  const isNavy = variant === 'navy';
  const isGold = variant === 'gold';

  const hasHome = items.some(item => item.label.toLowerCase() === 'home');

  return (
    <nav className="mb-12 flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4 flex-wrap gap-y-4">
        {/* Fixed Home Link - only if not in items */}
        {!hasHome && (
          <li className="flex items-center">
            <Link 
              href="/" 
              className={`
                text-[9px] font-black uppercase tracking-[0.4em] transition-colors
                ${isWhite ? 'text-white/30 hover:text-gold' : ''}
                ${isNavy ? 'text-navy/30 hover:text-gold' : ''}
                ${isGold ? 'text-gold/40 hover:text-white' : ''}
              `}
            >
              Home
            </Link>
          </li>
        )}

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {/* Separator Line */}
            <span className={`h-[1px] w-4 mx-2 ${isWhite ? 'bg-gold/30' : 'bg-gold/40'}`} />
            
            {item.href ? (
              <Link
                href={item.href}
                className={`
                  text-[9px] font-black uppercase tracking-[0.4em] transition-colors
                  ${isWhite ? 'text-white/30 hover:text-gold' : ''}
                  ${isNavy ? 'text-navy/30 hover:text-gold' : ''}
                  ${isGold ? 'text-gold/40 hover:text-white' : ''}
                `}
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={`
                  text-[9px] font-black uppercase tracking-[0.4em]
                  ${isWhite ? 'text-gold' : ''}
                  ${isNavy ? 'text-gold' : ''}
                  ${isGold ? 'text-white' : ''}
                `}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
