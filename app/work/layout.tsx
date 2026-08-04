import type { Metadata } from "next";
import { config } from "@/src/config";

export const metadata: Metadata = {
  title: "Work",
  description:
    `View our portfolio of custom software systems, SaaS platforms, and AI automation solutions built by ${config.brand.name}.`,
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
