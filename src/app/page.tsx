import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import QuickLinks from "@/components/home/QuickLinks";
import AboutSection from "@/components/home/AboutSection";
import PartnersSection from "@/components/home/PartnersSection";
import GovernanceSection from "@/components/home/GovernanceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pacific Settlement Bank | Sovereign Financial Framework",
  description: "Official portal of the Pacific Settlement Bank (PSB). Sovereign. Secure. Infinite. Ensuring institutional capital preservation and high-stakes fiduciary engineering.",
};

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <NewsSection />
      <QuickLinks />
      <AboutSection />
      <PartnersSection />
      <GovernanceSection />
    </div>
  );
}
