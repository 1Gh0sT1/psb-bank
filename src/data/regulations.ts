export interface RegulatoryAuthority {
  jurisdiction: string;
  body: string;
  license: string;
  focus: string;
  expiry: string;
  url: string;
}

export const regulatoryAuthorities: RegulatoryAuthority[] = [
  { jurisdiction: "Marshall Islands (HQ)", body: "Pacific Financial Regulation Commission (PFRC)", license: "PSB-PFRC-2026-X01", focus: "Global Liquidity & Ledger Governance", expiry: "31.12.2028", url: "https://www.rmigovernment.org/" },
  { jurisdiction: "Samoa", body: "Central Bank of Samoa (CBS)", license: "PSB-SAM-778-DIG", focus: "Institutional Digital Asset Custody", expiry: "15.11.2027", url: "https://www.cbs.gov.ws/" },
  { jurisdiction: "Vanuatu", body: "Vanuatu Financial Services Commission (VFSC)", license: "PSB-VFS-990-AM", focus: "Wealth Management & Fiduciary Services", expiry: "30.06.2027", url: "https://www.vfsc.vu/" },
  { jurisdiction: "Cook Islands", body: "Financial Supervisory Commission (FSC)", license: "PSB-CK-0012-TX", focus: "Tax-Neutral Estate Structuring", expiry: "28.02.2027", url: "https://www.fsc.gov.ck/" },
  { jurisdiction: "Palau", body: "Palau Financial Crimes Commission (PFCC)", license: "PSB-PW-FIN-005", focus: "Fintech Innovation & ESG Debt", expiry: "31.12.2027", url: "https://www.palaugov.pw/" },
  { jurisdiction: "Fiji", body: "Reserve Bank of Fiji (RBF)", license: "PSB-RBF-FJI-112", focus: "Regional Trade Finance & Settlements", expiry: "31.03.2027", url: "https://www.rbf.gov.fj/" },
  { jurisdiction: "Tonga", body: "National Reserve Bank of Tonga (NRBT)", license: "PSB-TGA-882-LQ", focus: "Commodity Hedging & Multi-Currency", expiry: "15.09.2026", url: "http://www.reservebank.to/" },
  { jurisdiction: "Solomon Islands", body: "Central Bank of Solomon Islands (CBSI)", license: "PSB-SOL-334-IF", focus: "Infrastructure Development Bonds", expiry: "30.10.2027", url: "http://www.cbsi.com.sb/" },
  { jurisdiction: "Nauru", body: "Nauru Financial Services Authority (NFSA)", license: "PSB-NRU-009-S", focus: "Sovereign Reserve Management", expiry: "31.12.2026", url: "http://www.naurugov.nr/" },
  { jurisdiction: "French Polynesia", body: "Institut d’émission d’Outre-Mer (IEOM)", license: "PSB-PYF-441-EU", focus: "Euro-Pacific Liquidity Corridors", expiry: "31.05.2027", url: "https://www.ieom.fr/" },
  { jurisdiction: "Papua New Guinea", body: "Bank of Papua New Guinea (BPNG)", license: "PSB-PNG-770-XM", focus: "Extractive Industry Capital Flows", expiry: "20.12.2026", url: "https://www.bankpng.gov.pg/" },
  { jurisdiction: "Kiribati", body: "Ministry of Finance & Economic Dev (MFED)", license: "PSB-KIR-223-G", focus: "Blue Economy & Climate Finance", expiry: "14.07.2027", url: "https://www.mfed.gov.ki/" },
];
