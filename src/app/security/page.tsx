import type { Metadata } from "next";
import { SecurityClient } from "./SecurityClient";

export const metadata: Metadata = {
  title: "Security & Compliance | Kairos Nexus Global",
  description: "Kairos Nexus Global's current approach to information security, responsible AI, compliance, and incident response.",
};

export default function SecurityPage() {
  return <SecurityClient />;
}
