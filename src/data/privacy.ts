export type PrivacyBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "h3"; text: string };

export type PrivacySection = {
  num: string;
  label: string;
  blocks: PrivacyBlock[];
};

export const effectiveDate = "21 April 2026";

export const tldr: string[] = [
  "Your canvases stay on your iPad. We don't upload them.",
  "We only store your email if you join the waitlist — to send you the TestFlight link.",
  "When you run a node, you call the model provider directly with your own key or credits. We don't see the content.",
  "You can delete your email any time: reply to any waitlist message or email hello@thirtyseven.ai.",
];

export const sections: PrivacySection[] = [
  {
    num: "01",
    label: "Who we are",
    blocks: [
      {
        kind: "p",
        text: "thirtyseven is a product of [CONTROLLER_NAME] (\"we\", \"us\"), based in the United Kingdom. For the purposes of UK GDPR and the Data Protection Act 2018, we are the data controller for the personal data described in this notice.",
      },
      {
        kind: "p",
        text: "Registered address: [CONTROLLER_ADDRESS]. Company number: [COMPANY_NUMBER]. ICO registration: [ICO_REGISTRATION]. You can reach us any time at hello@thirtyseven.ai.",
      },
    ],
  },
  {
    num: "02",
    label: "What we collect",
    blocks: [
      { kind: "h3", text: "Waitlist (website)" },
      {
        kind: "p",
        text: "If you submit the waitlist form, we store the email address you provide and the time you submitted it. Nothing else.",
      },
      { kind: "h3", text: "App usage (on-device)" },
      {
        kind: "p",
        text: "The thirtyseven iPad app is local-first. Your canvases, drafts, prompts, and generated outputs live on your device. We do not sync, upload, read, or back up that content.",
      },
      { kind: "h3", text: "When you run a node" },
      {
        kind: "p",
        text: "Running a node sends a request from your device directly to the model provider you chose (for example Anthropic, Google, Recraft, ElevenLabs, or Runway), using your own API key or credits. The request and response pass between your iPad and the provider. We are not in that loop and we do not see the content.",
      },
      { kind: "h3", text: "Server logs" },
      {
        kind: "p",
        text: "Our web and email hosts keep short-lived operational logs (IP address, user-agent, timestamps) for security, abuse prevention, and debugging. These are not used to profile you.",
      },
    ],
  },
  {
    num: "03",
    label: "Why we use it",
    blocks: [
      {
        kind: "ul",
        items: [
          "To email you a TestFlight invite and occasional release notes if you joined the waitlist.",
          "To reply when you contact us.",
          "To keep the service secure and the infrastructure healthy.",
          "To comply with our legal obligations.",
        ],
      },
    ],
  },
  {
    num: "04",
    label: "Legal bases",
    blocks: [
      {
        kind: "p",
        text: "Under Article 6 of the UK GDPR, we rely on the following lawful bases:",
      },
      {
        kind: "ul",
        items: [
          "Consent — for adding you to the waitlist and sending you marketing emails. You can withdraw consent at any time.",
          "Legitimate interests — for minimal server logging needed to operate and secure the service. We balance this against your rights; if you object, get in touch.",
          "Contract — if and when you sign up to a paid plan, to deliver the service you've paid for.",
          "Legal obligation — where a law requires us to retain or produce information (for example tax records).",
        ],
      },
    ],
  },
  {
    num: "05",
    label: "Who we share it with",
    blocks: [
      {
        kind: "p",
        text: "We keep the list short and we name them:",
      },
      {
        kind: "ul",
        items: [
          "Resend — delivers our transactional and waitlist emails.",
          "Vercel — hosts this website and its logs.",
          "Apple — distributes the app via TestFlight and, later, the App Store. Apple's privacy notice applies to anything you do in those surfaces.",
          "The model providers you choose — Anthropic, Google, Recraft, ElevenLabs, Runway, and similar. You connect to them with your own credentials, so their privacy policies apply to that traffic.",
        ],
      },
      {
        kind: "p",
        text: "We do not sell your personal data, and we do not share it with advertisers.",
      },
    ],
  },
  {
    num: "06",
    label: "International transfers",
    blocks: [
      {
        kind: "p",
        text: "Some of the processors above are based outside the United Kingdom, including in the European Economic Area and the United States. Where data is transferred outside the UK, we rely on appropriate safeguards — the UK International Data Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, or adequacy decisions — to protect it.",
      },
    ],
  },
  {
    num: "07",
    label: "How long we keep it",
    blocks: [
      {
        kind: "ul",
        items: [
          "Waitlist email — until you unsubscribe, or 24 months after your last interaction with us, whichever comes first.",
          "Email correspondence — up to 24 months after the conversation ends, so we have context if you write back.",
          "Server logs — typically 30 days, occasionally longer where we are investigating an incident.",
          "Records we must keep by law (for example tax) — for the period required by that law.",
        ],
      },
    ],
  },
  {
    num: "08",
    label: "Your rights",
    blocks: [
      {
        kind: "p",
        text: "Under UK GDPR you have the right to:",
      },
      {
        kind: "ul",
        items: [
          "Access the personal data we hold about you.",
          "Ask us to correct it if it's wrong.",
          "Ask us to erase it.",
          "Restrict or object to how we use it.",
          "Receive a copy in a portable format.",
          "Withdraw consent at any time (this doesn't affect what we did before).",
          "Complain to the Information Commissioner's Office at https://ico.org.uk/make-a-complaint/ — though we'd appreciate the chance to fix things first.",
        ],
      },
      {
        kind: "p",
        text: "To exercise any of these, email hello@thirtyseven.ai. We aim to respond within one month.",
      },
    ],
  },
  {
    num: "09",
    label: "Children",
    blocks: [
      {
        kind: "p",
        text: "thirtyseven is built for working creatives. It is not aimed at children, and we don't knowingly collect personal data from anyone under 16. If you think a child has signed up, email us and we'll remove their information.",
      },
    ],
  },
  {
    num: "10",
    label: "Security",
    blocks: [
      {
        kind: "p",
        text: "The best security is not collecting data in the first place, which is why the app is local-first. Where we do hold data — your waitlist email, server logs — it travels over TLS, is stored on reputable hosts with encryption at rest, and is accessible only to the small number of people who need it. No system is perfectly secure, but we take it seriously.",
      },
    ],
  },
  {
    num: "11",
    label: "Changes to this policy",
    blocks: [
      {
        kind: "p",
        text: "We'll update this page when our practices change and revise the effective date at the top. If the change is material and affects you directly (for example a new processor receiving waitlist emails), we'll email waitlisters to let you know.",
      },
    ],
  },
  {
    num: "12",
    label: "Contact",
    blocks: [
      {
        kind: "p",
        text: "Questions, corrections, or data requests: hello@thirtyseven.ai. Post: [CONTROLLER_NAME], [CONTROLLER_ADDRESS].",
      },
    ],
  },
];
