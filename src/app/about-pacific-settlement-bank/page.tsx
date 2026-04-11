import AboutUsContent from "@/components/AboutUsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | About Pacific Settlement Bank",
  description: "Learn about the history, mission, and governance of Pacific Settlement Bank (PSB). Established in 2011 to bridge traditional capital markets and the digital economy.",
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
