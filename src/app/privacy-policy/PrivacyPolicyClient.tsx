import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";

const sections: LegalSection[] = [
  { title: "1. Who is responsible for your information", paragraphs: [
    "The relevant Kairos entity providing the service is responsible for your personal information. Kairos Nexus Global, LLC provides U.S.-facing services and Kairos Nexus Ltd supports relevant operations in Nigeria. Full legal and contact details are available on request and in the applicable engagement documentation. Where a separate Client or Talent agreement applies, it is provided privately to the relevant party before the engagement begins.",
  ] },
  { title: "2. Information we collect", paragraphs: [
    "Kairos does not describe its ordinary verification process as a criminal, credit, or formal background check. If separate screening is ever required, we will provide the relevant notice and obtain consent or use another lawful basis where required.",
    "Kairos does not record or transcribe calls scheduled through the Platform. If we introduce recording or transcription, we will tell participants in advance and obtain consent where required.",
  ], lists: [{ items: [
    "Account and contact details: name, email, phone number, profile photo, role, company information, and sign-in details.",
    "Profile information: headline, roles, professional bio, skills, experience level, work preference (for example, remote), availability, and verification badges. Parts of a Talent profile are public (see Section 3).",
    "Professional information: CV, work history, education, certifications, portfolio, case-study and skill-assessment submissions and results, and references.",
    "Verification information: identity documents, identity-verification status, and information used to validate qualifications or work samples.",
    "Hiring information: job posts, scopes of work, case studies, applications, recommendations, application stage, and related notes.",
    "Messages and files: the content of in-app messages, attachments you share, and related details such as sender, recipient, time sent, and read status.",
    "Scheduling information: proposed and confirmed interview or call times, time zone, participants, meeting links, and calendar event details. If you connect a calendar such as Google Calendar, we access only what is needed to create and manage Kairos interview events.",
    "Contracts and documents: contracts and documents you upload or prepare on the Platform, including scope, deliverables, terms, milestones, and acceptance records.",
    "Employment and assignment information: where Kairos employs or engages you, payroll, role, performance, assignment, and legally required employment records.",
    "Technical and support information: device, browser, IP address, Platform activity, notification settings, and communications with us.",
  ] }] },
  { title: "3. Public talent profiles", paragraphs: [
    "Kairos is a talent marketplace, so Talent profiles are designed to be seen. When you publish a Talent profile, the following information may be visible to anyone who visits kairosng.com, including people who are not signed in:",
    "We do not publicly display your email address, phone number, home address, date of birth, identity documents, or identity numbers such as NIN. More detailed information, such as your CV, certifications, and assessment results, is shown only to signed-in Clients reviewing you for a role, and contact happens through Kairos messaging. Once a call is scheduled, participants can see each other's account email address in the calendar invitation (see Section 4).",
    "Because public profiles can be viewed, copied, or indexed by search engines and others outside our control, only include information you are comfortable making public. You can edit your profile or hide it from public Kairos pages in Profile Settings at any time, and you can ask us to hide or remove it by contacting info@kairosnexusglobal.com. When a profile is hidden or removed, we take it off the Platform within a reasonable time, but copies already held by third parties, such as search-engine caches, may take longer to disappear.",
    "We display public profiles to operate the marketplace and help Talent be found, based on our contract with you and our legitimate interests. You can object to this display at any time. We will not feature an individual Talent in advertising or promotional campaigns outside the Platform without that person's permission.",
  ], lists: [{ afterParagraph: 1, items: [
    "Name, profile photo, headline, and roles.",
    "Professional bio and skills.",
    "Experience level, work preference, and availability.",
    "Verification badges, such as identity-verified, skill-verified, or Kairos Verified status, as they stood at the time of the relevant review.",
  ] }] },
  { title: "4. Messaging, calls, and contracts", paragraphs: [
    "Messaging lets Clients and Talent discuss opportunities without exchanging personal contact details (scheduling a call is the exception; see below). A Client starts a conversation with a Talent. Messages and attachments are visible to the participants in that conversation. Authorised Kairos personnel may access messages only where needed to provide support, investigate a report, prevent fraud or abuse, enforce our Terms, resolve a dispute, or meet a legal obligation. We may use automated tools to detect spam, malware, and suspicious activity.",
    "Please do not share sensitive information, such as identity numbers, bank details, or passwords, in messages. Kairos will never ask for your password through messaging.",
    "When a call or interview is scheduled, Kairos shares the details needed to hold it, such as names, the meeting time, and the meeting link, with the participants and with the calendar and conferencing providers used. Calls are scheduled through Google Calendar and Google Meet, which are operated by Google. When a call is scheduled, the email address linked to your Kairos account will appear in the calendar invitation and will be visible to the other participants. Kairos cannot hide it, because Google controls how invitations display. Google handles this information under its own privacy policy. If you prefer not to share your personal email, use a professional email address for your Kairos account.",
    "Contracts and documents you upload or prepare are shared with the other party to that engagement and are accessible to Kairos only as needed to operate the Platform, provide support, or meet legal obligations.",
    "We send in-app and email notifications about account activity, messages, scheduled calls, and applications. You can manage optional notifications in your settings, but some service and security notices cannot be turned off while you have an account.",
  ] },
  { title: "5. How we use information", paragraphs: [
    "We use information to operate accounts and the Platform; display public Talent profiles; verify identity and qualifications; match and introduce Talent and Clients; enable messaging, call scheduling, and contract tools; send notifications; administer managed staffing assignments; process invoices and payment administration where agreed; prevent fraud and protect the Platform; communicate with you; meet legal obligations; and improve our services. In a managed staffing assignment, Kairos may use relevant employment, assignment, and payment information to employ or engage the Talent, invoice the Client, and pay the Talent.",
    "Our legal bases may include performing a contract, taking steps at your request before a contract, legitimate interests such as operating a public marketplace, security, and fraud prevention, legal obligations, and consent where required.",
  ] },
  { title: "6. AI-assisted vetting and matching", paragraphs: [
    "Kairos uses AI-assisted tools to review submitted materials, such as CVs, skill assessments, and case-study responses, and to suggest matches between Talent and roles. These tools support our team. They do not make final verification, hiring, or employment decisions on their own: a Kairos admin reviews outcomes that significantly affect you, such as approving or declining verification, and Clients make their own hiring decisions.",
    "You can ask us to explain how an AI-assisted outcome affecting you was reached, ask for human review, and contest the outcome by contacting info@kairosnexusglobal.com. We do not use your personal information to train third-party AI models without an appropriate lawful basis and notice.",
  ] },
  { title: "7. How we share information", paragraphs: [
    "We share only what is reasonably needed:",
    "In a managed staffing assignment, we share the information needed to coordinate the assignment, but not more employment or identity information than is necessary. We do not share identity documents with Clients unless there is a clear need, a lawful basis, and appropriate notice. We do not sell personal information.",
  ], lists: [{ afterParagraph: 1, items: [
    "Publicly: the public parts of Talent profiles described in Section 3.",
    "With other users: with Clients and Talent involved in an opportunity, conversation, scheduled call, contract, or assignment.",
    "With service providers: that host, verify, analyse, secure, or support our services, including messaging, notification, email, calendar, and video-conferencing providers.",
    "With advisers and authorities: professional advisers, and authorities where legally required.",
    "In a business change: with a successor in a merger, financing, or reorganisation.",
  ] }] },
  { title: "8. International transfers", paragraphs: [
    "Kairos operates across borders. Information may be processed in Nigeria, the United States, and other locations where approved providers operate. When required, we use contractual protections and appropriate technical and organisational safeguards for cross-border transfers. Nigerian personal data is transferred only in accordance with the Nigeria Data Protection Act 2023 and applicable requirements.",
  ] },
  { title: "9. Security and retention", paragraphs: [
    "We use proportionate safeguards, including restricted access, password and multi-factor protections for sensitive systems, encrypted connections, monitoring, and approved service providers. No system is completely secure.",
    "We keep information only for as long as needed for the purposes above, for an active relationship or assignment, to resolve a dispute, or to meet legal, tax, employment, or recordkeeping obligations. Identity-verification data is retained only for the applicable verification and legal-retention period. Messages, attachments, scheduling records, and contracts are kept while the related accounts are active and for a limited period afterwards to handle disputes, safety, and legal requirements. Removing a message or file from your own view does not remove the other participant's copy.",
  ] },
  { title: "10. Your choices and rights", paragraphs: [
    "Subject to applicable law, you may ask to access, correct, delete, restrict, or receive a copy of your information; object to certain processing, including public display of your profile; request human review of AI-assisted outcomes; or withdraw consent. You can also edit your profile, manage notification settings, and disconnect a linked calendar at any time. We may need to confirm your identity and may retain information where law permits or requires it. To make a request, contact info@kairosnexusglobal.com. You may also complain to the relevant data-protection authority, including the Nigeria Data Protection Commission.",
  ] },
  { title: "11. Cookies and children", paragraphs: [
    "We use essential cookies for account and site functionality and may use analytics cookies with consent where required. The Platform is not intended for anyone under 18, and we do not knowingly collect their information.",
  ] },
  { title: "12. Changes and contact", paragraphs: [
    "We may update this Notice from time to time, including as we launch new Platform features. We will post the updated version and provide additional notice when required. Questions, rights requests, complaints, and security concerns can be sent to info@kairosnexusglobal.com.",
  ] },
];

export function PrivacyPolicyClient({ embedded = false }: { embedded?: boolean }) {
  return (
    <LegalDocument
      title="Privacy Notice"
      effectiveDate="October 12, 2026"
      lastUpdated="October 12, 2026"
      intro="This Notice explains how Kairos collects, uses, shares, and protects personal information when you visit our site, create a profile, appear in our public talent directory, message or schedule calls with other users, apply for or perform an assignment, or otherwise engage with our services."
      sections={sections}
      embedded={embedded}
    />
  );
}
