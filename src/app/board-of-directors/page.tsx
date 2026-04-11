import BoardOfDirectorsContent from "@/components/BoardOfDirectorsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors | Corporate Governance",
  description: "Meet the supreme governing and fiduciary body of Pacific Settlement Bank (PSB). A multi-jurisdictional board of experts in finance, cybersecurity, and law.",
};

export default function BoardOfDirectorsPage() {
  return <BoardOfDirectorsContent />;
}