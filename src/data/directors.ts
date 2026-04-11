export interface Director {
  id: string;
  name: string;
  title: string;
  bio: string[];
  bloc: string;
}

export const directors: Director[] = [
  {
    id: 'jonathan-albury',
    bloc: 'European',
    name: 'Sir Jonathan Albury-Sanders',
    title: 'Sovereign Stability & Reserve Management',
    bio: [
      'Chairman Emeritus, Commonwealth Banking Group | 35+ years in offshore banking.',
      'Primary Focus: Sovereign Stability & Reserve Management',
    ],
  },
  {
    id: 'margaret-pryce',
    bloc: 'European',
    name: 'Dame Margaret Pryce',
    title: 'Quantum-Resistant Defense & Data Sovereignty',
    bio: [
      'Former UK Cybersecurity Commissioner (2018–2023) | Architect of GDPR-for-Banking.',
      'Primary Focus: Quantum-Resistant Defense & Data Sovereignty',
    ],
  },
  {
    id: 'christopher-vance',
    bloc: 'European',
    name: 'Christopher J. Vance',
    title: 'Global Sanctions & Cross-Border Compliance',
    bio: [
      'Former Deputy Director, US Treasury (Office of Foreign Assets Control) | International Tax Attorney.',
      'Primary Focus: Global Sanctions & Cross-Border Compliance',
      'Role at PSB: Ensures that all settlement pathways through the Pacific Ledger remain 100% compliant with global anti-money laundering and transparency standards.',
    ],
  },
  {
    id: 'sebastian-vane',
    bloc: 'European',
    name: 'Lord Sebastian Vane',
    title: 'Common Law Fiduciary Standards',
    bio: [
      'Former Governor of the Bank of England (Overseas Territories Division) | Privy Council Advisor.',
      'Primary Focus: Common Law Fiduciary Standards',
      'Role at PSB: Lord Vane acts as the primary architect of PSB’s internal governance, ensuring the bank’s legal framework is impenetrable by international litigation.',
    ],
  },
  {
    id: 'mei-chen',
    bloc: 'Asian',
    name: 'Prof. Lin Mei Chen',
    title: 'Pacific Ledger Architecture & AI Monitoring',
    bio: [
      'Chair of Blockchain Technology, National University of Singapore.',
      'Primary Focus: Pacific Ledger Architecture & AI Monitoring',
    ],
  },
  {
    id: 'omar-al-sayed',
    bloc: 'Asian',
    name: 'Dr. Omar Al-Sayed',
    title: 'Sovereign Wealth Interoperability',
    bio: [
      'Senior Investment Advisor to the Abu Dhabi Investment Authority (ADIA).',
      'Primary Focus: Sovereign Wealth Interoperability',
      'Role at PSB: Dr. Al-Sayed bridges the gap between Middle Eastern capital and Pacific infrastructure, positioning PSB as the preferred settlement hub for Petrodollar-to-Digital transitions.',
    ],
  },
  {
    id: 'yukihiro-nakamoto',
    bloc: 'Asian',
    name: 'Yukihiro Nakamoto',
    title: 'Yen-Settlement Corridors & Institutional Liquidity',
    bio: [
      'Former Executive VP, Mitsubishi UFJ Financial Group (MUFG) | Expert in East Asian Liquidity.',
      'Primary Focus: Yen-Settlement Corridors & Institutional Liquidity',
      'Role at PSB: Directs the bank’s strategy for the Japanese and South Korean markets, ensuring deep liquidity for East Asian corporate clients.',
    ],
  },
  {
    id: 'maria-tomasi',
    bloc: 'Pacific',
    name: 'Hon. Maria Tomasi',
    title: 'PFRC Regulatory Partnerships',
    bio: [
      'Former Minister of Finance, Republic of Vanuatu.',
      'Primary Focus: PFRC Regulatory Partnerships',
    ],
  },
  {
    id: 'kaipo-kealoha',
    bloc: 'Pacific',
    name: 'James "Kaipo" Kealoha',
    title: 'Hybrid Asset Custody & VASP Frameworks',
    bio: [
      'Fintech Entrepreneur (Hawaii) | CEO of Oceanic Blockchain Solutions.',
      'Primary Focus: Hybrid Asset Custody & VASP Frameworks',
    ],
  },
  {
    id: 'teuila-tuiasau',
    bloc: 'Pacific',
    name: 'Dame Teuila Tuiasau',
    title: 'Asset Protection & Judicial Excellence',
    bio: [
      'Former Chief Justice of the Supreme Court of Samoa | Specialist in International Trusts.',
      'Primary Focus: Asset Protection & Judicial Excellence',
      'Role at PSB: Ensures that the bank’s custodial structures are legally superior to any traditional offshore jurisdiction, providing a "safe haven" for institutional assets.',
    ],
  },
  {
    id: 'aminata-diallo',
    bloc: 'Emerging',
    name: 'Dr. Aminata Diallo',
    title: 'Africa-Pacific Trade Corridors',
    bio: [
      'Senior Advisor to the West African Central Bank.',
      'Primary Focus: Africa-Pacific Trade Corridors',
    ],
  },
  {
    id: 'sophie-moreau',
    bloc: 'Emerging',
    name: 'Sophie Moreau',
    title: 'Ultra-High-Net-Worth (UHNW) Asset Preservation',
    bio: [
      'Founder, Monaco Wealth Advisory | Swiss-trained (Geneva).',
      'Primary Focus: Ultra-High-Net-Worth (UHNW) Asset Preservation',
    ],
  },
  {
    id: 'elena-rodriguez',
    bloc: 'Emerging',
    name: 'Dr. Elena Rodriguez',
    title: 'Real-Time Settlement Systems & Fintech Scalability',
    bio: [
      'Former Director, Central Bank of Brazil | Architect of the Pix Instant Payment system.',
      'Primary Focus: Real-Time Settlement Systems & Fintech Scalability',
      'Role at PSB: Dr. Rodriguez applies her experience with nation-scale instant payments to the Pacific Ledger, ensuring the system can handle billions of transactions per second.',
    ],
  },
  {
    id: 'bjorn-sorensen',
    bloc: 'Emerging',
    name: 'Bjorn Sorensen',
    title: 'Blue Economy & ESG Debt Issuance',
    bio: [
      'Lead Underwriter for the Nordic "Blue Bonds" | UN Special Envoy for Maritime Finance.',
      'Primary Focus: Blue Economy & ESG Debt Issuance',
      'Role at PSB: Oversees the issuance of sovereign-backed Blue Bonds, aligning PSB’s balance sheet with global environmental sustainability goals.',
    ],
  },
];
