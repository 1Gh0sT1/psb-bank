import WealthManagementContent from "@/components/WealthManagementContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wealth Management | Banking & Markets | Pacific Settlement Bank",
  description: "Swiss fiduciary traditions meet post-quantum digital security. Bespoke wealth ecosystem for sovereign wealth funds and multinational family offices.",
};

export default function WealthManagementPage() {
  return <WealthManagementContent />;
}
