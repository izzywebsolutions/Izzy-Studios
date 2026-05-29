import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our premium web design, AI systems, workflow automation, and custom SaaS platforms built for scale.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
