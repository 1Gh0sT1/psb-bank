'use client';

import React, { useState, useMemo } from 'react';

interface RegistryGridProps {
  initialData: any[];
  columns: {
    key: string;
    label: string;
    type?: 'text' | 'status' | 'mono';
  }[];
  searchPlaceholder?: string;
}

export default function RegistryGrid({ initialData, columns, searchPlaceholder }: RegistryGridProps) {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!search) return initialData;
    const lower = search.toLowerCase();
    return initialData.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === 'string' && val.toLowerCase().includes(lower)
      )
    );
  }, [search, initialData]);

  return (
    <div className="w-full bg-white shadow-xl shadow-navy/5 border border-zinc-200">
      {/* Search Bar - Minimalist Document Header */}
      <div className="relative group border-b border-zinc-200 bg-white">
        <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
          <svg className="w-4 h-4 text-navy/20 group-focus-within:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full py-8 pl-16 pr-8 text-sm text-navy bg-transparent outline-none placeholder:text-navy/20 uppercase tracking-[0.2em] font-black transition-colors"
          placeholder={searchPlaceholder || "Filter Sovereign Records..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-focus-within:w-full" />
      </div>

      {/* Public Registry Table */}
      <div className="overflow-x-auto bg-white scrollbar-thin scrollbar-thumb-gold/20">
        <table className="w-full text-left border-collapse min-w-[700px] md:min-w-full">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 w-16 whitespace-nowrap">
                S/NO
              </th>
              {columns.map((col) => (
                <th 
                  key={col.key} 
                  scope="col" 
                  className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-8 py-24 text-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/20 italic">
                     Query Returned No Valid Records in the Current District Scope.
                   </p>
                </td>
              </tr>
            ) : (
              filteredData.map((item, idx) => (
                <tr 
                  key={item.id} 
                  className="hover:bg-zinc-50/80 transition-colors group"
                >
                  <td className="px-4 md:px-8 py-5">
                     <span className="font-mono text-[10px] text-navy/30 group-hover:text-gold transition-colors">
                        {(idx + 1).toString().padStart(3, '0')}
                     </span>
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 md:px-8 py-5 whitespace-nowrap sm:whitespace-normal">
                      {col.type === 'status' ? (
                        <div className="flex items-center gap-2">
                           <span className={`w-1.5 h-1.5 rounded-full ${
                              item[col.key] === 'Active' || item[col.key] === 'Verified' ? 'bg-emerald-500' : 
                              item[col.key] === 'Pending' ? 'bg-gold' : 'bg-red-500'
                            }`} />
                           <span className={`text-[10px] font-bold uppercase tracking-widest ${
                               item[col.key] === 'Active' || item[col.key] === 'Verified' ? 'text-navy' : 'text-navy/50'
                             }`}
                           >
                             {item[col.key]}
                           </span>
                        </div>
                      ) : col.type === 'mono' ? (
                        <span className="font-mono text-[11px] md:text-[12px] text-navy/60 group-hover:text-navy transition-colors tracking-tight">
                           {item[col.key] || '---'}
                        </span>
                      ) : (
                        <span className={`
                          ${col.key === 'name' || col.key === 'title' ? 'text-xs md:text-sm font-black uppercase tracking-wider text-navy' : 'text-xs md:text-sm font-medium text-navy/70'}
                          transition-all duration-300
                        `}>
                          {item[col.key] || '---'}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination Stub */}
      <div className="px-8 py-6 border-t border-zinc-200 bg-zinc-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-[9px] font-black uppercase tracking-[0.3em] text-navy/30">
            Displaying Record <span className="text-navy">{filteredData.length > 0 ? '001' : '000'}</span> to <span className="text-navy">{filteredData.length.toString().padStart(3, '0')}</span> of <span className="text-navy">{initialData.length.toString().padStart(3, '0')}</span>
         </p>
         <div className="flex items-center gap-6">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-navy/30 hover:text-navy cursor-not-allowed">Previous</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-navy/30 hover:text-navy cursor-not-allowed">Next</span>
         </div>
      </div>
    </div>
  );
}
