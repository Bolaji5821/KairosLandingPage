import type { Metadata } from "next";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Notice | Kairos Nexus Global",
  description: "Kairos Nexus Global Privacy Notice explaining how we collect, use, share, and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
