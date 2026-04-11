import PocketBase from 'pocketbase';

// Connect to PocketBase server
const pbUrl = process.env.NEXT_PUBLIC_PB_URL || 'http://127.0.0.1:8090';
export const pb = new PocketBase(pbUrl);

// Disable auto-cancellation to allow concurrent requests in Next.js
pb.autoCancellation(false);

export interface BankRecord {
  id: string;
  name: string;
  country: string;
  status: string;
  start_of_operations?: string;
  swift_bic?: string;
}

export interface BrokerRecord {
  id: string;
  name: string;
  country: string;
  status: string;
  license_authority: string;
  license_expiry: string;
}
