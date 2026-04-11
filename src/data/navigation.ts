export interface NavLink {
  name: string;
  href: string;
}

export interface NavGroup {
  name: string;
  links?: NavLink[];
  href?: string;
}

export const navigation: NavGroup[] = [
  {
    name: 'About PSB',
    links: [
      { name: 'About PSB', href: '/about-pacific-settlement-bank' },
      { name: 'Board of Directors', href: '/board-of-directors' },
      { name: 'Functions', href: '/functions' },
      { name: 'Careers', href: '/careers' },
    ]
  },
  {
    name: 'Banking & Markets',
    links: [
      { name: 'Exchange Rates', href: '/exchange-rates' },
      { name: 'FX Auction', href: '/fx-auction' },
      { name: 'Partner Banks', href: '/list-of-partner-banks' },
      { name: 'Forex Bureaus', href: '/list-of-forex-bureaus' },
    ]
  },
  {
    name: 'Publications',
    links: [
      { name: 'Licensing', href: '/licensing' },
      { name: 'Monetary Policy', href: '/monetary-policy' },
      { name: 'Regulations', href: '/regulations' },
      { name: 'Monetary Statistics', href: '/monetary-statistics' },
    ]
  },
  {
    name: 'Governor’s Statement',
    href: '/governors-statement'
  },
  {
    name: 'Contact Us',
    href: '/contact-us'
  }
];
