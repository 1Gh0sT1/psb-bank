import NationalPaymentSystemContent from "@/components/NationalPaymentSystemContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Payment System | Banking & Currency | Pacific Settlement Bank",
  description: "Enabling optimal financial inclusion through an interoperable National Payment System and leapfrogging payment technology.",
};

export default function NationalPaymentSystemPage() {
  return <NationalPaymentSystemContent />;
}
