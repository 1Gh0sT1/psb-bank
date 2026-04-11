const partners = [
  {
    name: "Bank of South Pacific (BSP)",
    country: "Papua New Guinea",
    why: "Regional Pacific leader in cross-border settlements and institutional banking. Ideal for expanding PSB’s Pacific liquidity footprint.",
    logo: "/images/partners/Bank_of_South_Pacific.jpg"
  },
  {
    name: "Vanuatu National Bank (VNB)",
    country: "Vanuatu",
    why: "State-owned institution with expertise in sovereign trusts and maritime finance. Integrates with PSB’s regional fiduciary infrastructure.",
    logo: "/images/partners/Vanuatu_National_Bank.jpg"
  },
  {
    name: "Bank of the Cook Islands (BCI)",
    country: "Cook Islands",
    why: "Specializes in corporate structuring and tax-neutral settlement accounts. Aligns with PSB’s multi-jurisdictional compliance protocols.",
    logo: "/images/partners/Bank_of_the_Cook_Islands.png"
  },
  {
    name: "National Bank of Dominica (NBD)",
    country: "Dominica",
    why: "Focuses on sustainable infrastructure financing and sovereign savings products. Matches PSB’s long-term conservation finance goals.",
    logo: "/images/partners/National_Bank_of_Dominica.png"
  },
  {
    name: "Mauritius Commercial Bank (MCB)",
    country: "Mauritius",
    why: "A global hub for Africa-Asia trade finance and institutional liquidity. Complements PSB’s Emerging Markets settlement corridors.",
    logo: "/images/partners/Mauritius_Commercial_Bank.png"
  },
  {
    name: "Bank of St. Helena (BoSH)",
    country: "St. Helena",
    why: "Niche financial institution with expertise in remote jurisdiction settlement and forensic audit records.",
    logo: "/images/partners/Bank_of_St_Helena.png"
  },
  {
    name: "Seychelles International Mercantile Banking Corporation (SIMBC)",
    country: "Seychelles",
    why: "Specializes in digital asset custody and secure international clearing. Fits PSB’s sovereign digital economy infrastructure.",
    logo: "/images/partners/Seychelles_International_Mercantile_Banking_Corporation.jpg"
  },
  {
    name: "Cayman National Bank (CNB)",
    country: "Oceania",
    why: "Premier private banking institution with deep wealth management expertise. Core partner for PSB’s global asset preservation strategy.",
    logo: "/images/partners/Cayman_National_Bank.png"
  },
  {
    name: "Anguilla Commercial Bank (ACB)",
    country: "Anguilla",
    why: "Focuses on complex trusts and fintech innovation. Aligns with PSB’s real-time settlement and digital mandate.",
    logo: "/images/partners/Anguilla_Commercial_Bank.png"
  },
  {
    name: "Banco Nacional de São Tomé e Príncipe (BNSTP)",
    country: "São Tomé and Príncipe",
    why: "Institutional partner focused on small island economies and multi-lateral settlement protocols across the Atlantic-Pacific axis.",
    logo: "/images/partners/Banco_Nacional_de_São_Tomé_e_Príncipe.png"
  }
];

export default function PartnersSection() {
  return (
    <section className="py-24 lg:py-48 bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="mb-24 border-l-4 border-gold pl-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-6 italic">International Network</h2>
          <h3 className="font-serif text-5xl lg:text-7xl text-navy leading-tight italic">Strategic Partners.</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-zinc-100">
          {partners.map((bank, i) => (
            <div key={i} className="group p-6 sm:p-8 lg:p-12 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="h-14 w-full flex items-center justify-center mb-10 overflow-hidden px-4">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-full max-w-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-4">
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gold">{bank.country}</p>
                <h4 className="font-serif text-lg text-navy leading-tight mb-4 group-hover:text-gold transition-colors">{bank.name}</h4>
                <p className="text-[11px] text-navy/40 font-light leading-relaxed italic line-clamp-4">
                  {bank.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
