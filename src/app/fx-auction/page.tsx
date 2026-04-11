import FXAuctionContent from "@/components/FXAuctionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FX Auction | Banking & Markets | Pacific Settlement Bank",
  description: "Official institutional asset auctions for central banks, sovereign wealth funds, and multinational conglomerates. Powered by the Pacific Ledger protocol.",
};

export default function FXAuctionPage() {
  return <FXAuctionContent />;
}
