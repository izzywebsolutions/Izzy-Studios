import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "View our portfolio of custom software systems, SaaS platforms, and AI automation solutions built by Izzy Digital Studio.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
