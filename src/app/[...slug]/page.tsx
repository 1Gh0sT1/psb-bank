import { notFound } from "next/navigation";
import content from "@/data/content.json";
import GenericPage from "@/components/GenericPage";
import { Metadata } from "next";

export function generateStaticParams() {
  return content.map((page) => ({
    slug: [page.slug],
  }));
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const unpackedParams = await params;
  const slugPath = unpackedParams.slug.join("/");
  const pageData = content.find((p) => p.slug === slugPath);

  if (!pageData) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: pageData.title,
    description: `Official records and details regarding ${pageData.title} at Pacific Settlement Bank.`,
  };
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  // wait for params to be unpacked according to latest Next.js 15+ patterns
  const unpackedParams = await params;
  const slugPath = unpackedParams.slug.join("/");

  const pageData = content.find((p) => p.slug === slugPath);

  if (!pageData) {
    notFound();
  }

  return <GenericPage title={pageData.title} html={pageData.html} />;
}
