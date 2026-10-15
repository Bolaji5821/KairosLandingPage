import type { Metadata } from "next";
import { TermsOfServiceClient } from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Website Terms of Use | Kairos Nexus Global",
  description: "Website Terms of Use governing kairosng.com and related Kairos services.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
