import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";

const sections: LegalSection[] = [
  { title: "1. How we protect information", lists: [{ items: [
    "We limit access to personal and business information to authorised people who need it for their role.",
    "We use secure connections for data sent to and from our services and protect sensitive stored information using approved infrastructure and service providers.",
    "We require extra sign-in safeguards for privileged and administrative access and review access when people change roles or leave.",
    "We separate live systems from testing environments where practical, monitor important activity, and keep security logs for investigation and improvement.",
    "We assess service providers that handle sensitive information and require appropriate confidentiality and security obligations.",
  ] }] },
  { title: "2. Identity and Talent verification", paragraphs: ["We treat identity documents and verification information as sensitive. Access is limited to the people and systems involved in verification, and we retain this information only for the verification purpose and applicable legal requirements. We do not share identity documents with Clients unless there is a clear need, a lawful basis, and appropriate notice."] },
  { title: "3. Public profiles, messaging, and scheduling", lists: [{ items: [
    "Public profiles: only professional details are public. Contact details, identity documents, and identity numbers are never shown on a public profile.",
    "Messaging: conversations stay on the Platform so users do not need to exchange personal contact details. Staff access to messages is limited to support, safety, fraud-prevention, and legal purposes, and we use automated checks to detect spam and malicious files.",
    "Scheduling: calls run on Google Calendar and Google Meet. Connected calendars are used only to create and manage Kairos interview events, and users can disconnect them at any time. Participants' account email addresses appear in calendar invitations, which Google controls. Kairos does not record or transcribe calls.",
    "Contracts: uploaded contracts and documents are available only to the parties to the engagement and to authorised Kairos personnel who need access.",
  ] }] },
  { title: "4. Managed staffing and workplace concerns", paragraphs: ["Managed staffing applies only to selected assignments confirmed in a private written agreement with the relevant Client and Talent. In those assignments, Kairos employs or otherwise engages the Talent, receives the Client's payment, and pays the Talent under the applicable arrangement. The Client directs project work but must provide a lawful, respectful, and safe working environment, promptly report concerns, and cooperate with Kairos on investigations and remedial steps."] },
  { title: "5. Responsible use of AI", paragraphs: ["Kairos uses AI-assisted tools for vetting, search, matching, and operational support. They assist people: a Kairos admin reviews every verification outcome, and the tools do not make final verification, employment, or other high-impact decisions on their own. Users can ask for an explanation or human review of an AI-assisted outcome. We do not use personal information to train third-party AI models without an appropriate lawful basis and notice."] },
  { title: "6. Compliance approach", paragraphs: ["Our program is designed to support applicable privacy, employment, and security obligations, including the Nigeria Data Protection Act 2023 and relevant U.S. privacy requirements. We use privacy-by-design practices, review new features such as public profiles, messaging, and scheduling before launch, maintain internal governance records, and update controls as our services and legal obligations evolve. We do not claim SOC 2 or ISO certification unless and until independently certified."] },
  { title: "7. Incident response", paragraphs: ["We investigate suspected security incidents, contain confirmed issues, assess affected information, and notify affected people and authorities where required by law. We also document lessons learned and improve controls after significant incidents."] },
  { title: "8. Contact", paragraphs: ["Report a security concern, suspicious message, or misuse of the Platform, or send privacy questions, to info@kairosnexusglobal.com."] },
];

export function SecurityClient() {
  return <LegalDocument title="Security & Compliance" lastUpdated="October 12, 2026" intro="Kairos is building a trusted global-talent service. We protect information through practical safeguards, clear ownership, and ongoing review. This page describes our current approach; it is not a certification claim or a guarantee that no security incident will occur." sections={sections} />;
}
