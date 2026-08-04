import type { Metadata } from "next";
import { config } from "@/src/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Get in touch with ${config.brand.name}. Let's discuss your next website, custom software, or AI automation project.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
