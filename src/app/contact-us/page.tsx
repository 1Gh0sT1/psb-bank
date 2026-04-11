import ContactUsContent from "@/components/ContactUsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pacific Settlement Bank",
  description: "Reach our global headquarters in Majuro or our regional nodes in Samoa, Vanuatu, and Palau. Secure AES-256 encrypted communication portal.",
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
