import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";

type Props = {
  email: string;
};

const AMBER = "#e8c672";
const BG = "#0a0a0b";
const FG = "#ece8e1";

const EXPECT_ITEMS = [
  {
    num: "01",
    title: "Release notes, twice a month",
    body: "New nodes, model upgrades, and what we fixed. Short. Dated. Skimmable.",
  },
  {
    num: "02",
    title: "Workflow teardowns",
    body: "Real canvases from studios we admire — fully wired, remixable, open.",
  },
  {
    num: "03",
    title: "Invite-only drops",
    body: "Private betas, model partnerships, and the odd physical zine. Subscribers first.",
  },
];

// Inline SVG lives in its own string so we can drop it into a <div> via
// dangerouslySetInnerHTML. Outlook strips inline SVG — acceptable for now;
// swap to a CDN-hosted PNG via <Img> if we ever see a lot of Outlook opens.
const NODE_MOTIF_SVG = `
<svg width="100%" height="190" viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" style="display:block;">
  <defs>
    <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
    </pattern>
  </defs>
  <rect width="520" height="190" fill="url(#dots)" />
  <g fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1">
    <path d="M 110 50 C 175 50, 175 95, 240 95" />
    <path d="M 110 140 C 175 140, 175 95, 240 95" />
  </g>
  <g fill="none" stroke="rgba(232,198,114,0.7)" stroke-width="1.4">
    <path d="M 340 95 C 395 95, 395 50, 450 50" />
    <path d="M 340 95 C 395 95, 395 140, 450 140" />
  </g>
  <g>
    <rect x="30" y="30" width="90" height="40" rx="7" fill="#151517" stroke="rgba(255,255,255,0.14)" />
    <rect x="38" y="38" width="8" height="8" rx="2" fill="#e8c672" />
    <text x="52" y="46" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="9" fill="#ece8e1" font-weight="500">Brand Brief</text>
    <text x="38" y="60" font-family="ui-monospace, Menlo, monospace" font-size="7.5" fill="rgba(236,232,225,0.5)">artisan skincare</text>
  </g>
  <g>
    <rect x="30" y="120" width="90" height="40" rx="7" fill="#151517" stroke="rgba(255,255,255,0.14)" />
    <rect x="38" y="128" width="8" height="8" rx="2" fill="#e8c672" />
    <text x="52" y="136" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="9" fill="#ece8e1" font-weight="500">Mood Prompt</text>
    <text x="38" y="150" font-family="ui-monospace, Menlo, monospace" font-size="7.5" fill="rgba(236,232,225,0.5)">fog · glass · moss</text>
  </g>
  <g>
    <rect x="240" y="75" width="100" height="40" rx="7" fill="#1a1a1d" stroke="rgba(232,198,114,0.55)" />
    <rect x="248" y="83" width="8" height="8" rx="2" fill="#e8c672" />
    <text x="262" y="91" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="9" fill="#ece8e1" font-weight="500">You are here</text>
    <circle cx="332" cy="103" r="2.5" fill="#e8c672" />
    <text x="248" y="106" font-family="ui-monospace, Menlo, monospace" font-size="7.5" fill="#e8c672">waitlist · running</text>
  </g>
  <g>
    <rect x="450" y="30" width="60" height="40" rx="7" fill="#151517" stroke="rgba(255,255,255,0.14)" />
    <rect x="458" y="38" width="8" height="8" rx="2" fill="#b49bd8" />
    <text x="472" y="46" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="9" fill="#ece8e1" font-weight="500">TestFlight</text>
    <text x="458" y="60" font-family="ui-monospace, Menlo, monospace" font-size="7.5" fill="rgba(236,232,225,0.5)">queued</text>
  </g>
  <g>
    <rect x="450" y="120" width="60" height="40" rx="7" fill="#151517" stroke="rgba(255,255,255,0.14)" />
    <rect x="458" y="128" width="8" height="8" rx="2" fill="#9fc8a8" />
    <text x="472" y="136" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="9" fill="#ece8e1" font-weight="500">Dispatches</text>
    <text x="458" y="150" font-family="ui-monospace, Menlo, monospace" font-size="7.5" fill="rgba(236,232,225,0.5)">weekly</text>
  </g>
</svg>
`.trim();

export default function WaitlistConfirmation(_props: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        A TestFlight invite is on its way — here&rsquo;s what to expect while
        you wait.
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <Row>
              <Column style={{ width: 24, verticalAlign: "middle" }}>
              <Text style={logoWordmark}>
                  thirtyseven
                </Text>
              </Column>
              <Column style={{ verticalAlign: "middle" }}>
         
              </Column>
            </Row>
          </Section>

          {/* Node motif */}
          <Section style={{ padding: "36px 32px 0 32px" }}>
            <div
              style={svgFrame}
              dangerouslySetInnerHTML={{ __html: NODE_MOTIF_SVG }}
            />
          </Section>

          {/* Eyebrow */}
          <Section style={{ padding: "40px 32px 0 32px" }}>
            <Row>
              <Column style={{ width: 14, verticalAlign: "middle" }}>
                <div style={eyebrowDot} />
              </Column>
              <Column style={{ verticalAlign: "middle" }}>
                <Text style={eyebrowText}>Step 01 · Confirmed</Text>
              </Column>
            </Row>
          </Section>

          {/* Headline */}
          <Section style={{ padding: "14px 32px 0 32px" }}>
            <Heading as="h1" style={headline}>
              You&rsquo;re on the
              <br />
              canvas list<span style={{ color: AMBER }}>.</span>
            </Heading>
          </Section>

          {/* Lede */}
          <Section style={{ padding: "20px 32px 0 32px" }}>
            <Text style={lede}>
              Thanks for signing up. You&rsquo;ll hear from us about once a
              fortnight — release notes, workflow teardowns, and the occasional
              invite-only drop. No fluff, no forwarding.
            </Text>
          </Section>

          {/* CTAs */}
          <Section style={{ padding: "32px 32px 0 32px" }}>
            <Row>
              <Column style={{ width: "auto", verticalAlign: "middle" }}>
                <Button
                  href="https://thirtyseven.app/testflight"
                  style={primaryBtn}
                >
                  Claim your TestFlight seat →
                </Button>
              </Column>
              <Column style={{ width: 12, fontSize: 1, lineHeight: "1px" }}>
                &nbsp;
              </Column>
              <Column style={{ width: "auto", verticalAlign: "middle" }}>
                <Button href="https://thirtyseven.app" style={secondaryBtn}>
                  See the canvas
                </Button>
              </Column>
            </Row>
          </Section>

          {/* Divider */}
          <Section style={{ padding: "44px 32px 0 32px" }}>
            <Hr style={divider} />
          </Section>

          {/* What lands */}
          <Section style={{ padding: "36px 32px 0 32px" }}>
            <Text style={listLabel}>What lands in your inbox</Text>
            {EXPECT_ITEMS.map((item, i) => (
              <div key={item.num}>
                {i > 0 && <Hr style={rowDivider} />}
                <Row>
                  <Column
                    style={{
                      width: 42,
                      verticalAlign: "top",
                      paddingTop: 14,
                      paddingBottom: 14,
                    }}
                  >
                    <div style={listBadge}>
                      <div style={listBadgeNum}>{item.num}</div>
                    </div>
                  </Column>
                  <Column
                    style={{
                      verticalAlign: "top",
                      paddingTop: 14,
                      paddingBottom: 14,
                    }}
                  >
                    <Text style={listItemTitle}>{item.title}</Text>
                    <Text style={listItemBody}>{item.body}</Text>
                  </Column>
                </Row>
              </div>
            ))}
          </Section>

          {/* Quote */}
          <Section style={{ padding: "48px 32px 0 32px" }}>
            <Section style={quoteBox}>
              <Text style={quoteText}>
                A canvas that runs<span style={{ color: AMBER }}>.</span>
              </Text>
              <Text style={quoteAttribution}>— thirtyseven, on iPad</Text>
            </Section>
          </Section>

          {/* Next step */}
          <Section style={{ padding: "36px 32px 0 32px" }}>
            <Text style={nextStep}>
              While you wait: grab the app on TestFlight (Build 003 is live on
              iPadOS 18+), or reply to this email with what you&rsquo;re hoping
              to build. We read every one.
            </Text>
          </Section>

          {/* Spacer */}
          <Section
            style={{ height: 52, fontSize: 1, lineHeight: "1px" }}
          >
            &nbsp;
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Row>
              <Column align="left" style={footerBrandCol}>
                thirtyseven · made on iPad
              </Column>
              <Column align="right" style={footerCopyrightCol}>
                &copy; 2026
              </Column>
            </Row>
            <Text style={footerNote}>
              You received this because you requested an invite at
              thirtyseven.app.
              <br />
              <Link href="#" style={footerLink}>
                Manage preferences
              </Link>{" "}
              ·{" "}
              <Link href="#" style={footerLink}>
                Unsubscribe
              </Link>
            </Text>
            <Text style={footerAddress}>
              thirtyseven Ltd · 37 Dean Street · London W1D 3SH
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const SYSTEM_STACK =
  "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";
const MONO_STACK =
  "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const SERIF_STACK = "'Iowan Old Style', Palatino, Georgia, serif";

const body: React.CSSProperties = {
  margin: 0,
  backgroundColor: BG,
  fontFamily: SYSTEM_STACK,
  color: FG,
};

const container: React.CSSProperties = {
  width: "100%",
  maxWidth: 600,
  margin: "0 auto",
  backgroundColor: BG,
};

const logoDot: React.CSSProperties = {
  width: 14,
  height: 14,
  backgroundColor: AMBER,
  borderRadius: 4,
  lineHeight: "1px",
  fontSize: 1,
};

const logoWordmark: React.CSSProperties = {
  margin: 0,
  fontFamily: SYSTEM_STACK,
  fontSize: 17,
  fontWeight: 500,
  letterSpacing: "-0.03em",
  color: FG,
  lineHeight: 1,
};

const svgFrame: React.CSSProperties = {
  background:
    "radial-gradient(circle at 50% 50%, rgba(232,198,114,0.08), transparent 55%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "28px 20px",
};

const eyebrowDot: React.CSSProperties = {
  width: 6,
  height: 6,
  backgroundColor: AMBER,
  borderRadius: 2,
  lineHeight: "1px",
  fontSize: 1,
};

const eyebrowText: React.CSSProperties = {
  margin: 0,
  fontFamily: MONO_STACK,
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(236,232,225,0.5)",
};

const headline: React.CSSProperties = {
  margin: 0,
  fontFamily: SYSTEM_STACK,
  fontWeight: 500,
  fontSize: 44,
  lineHeight: 1.02,
  letterSpacing: "-0.035em",
  color: FG,
};

const lede: React.CSSProperties = {
  margin: 0,
  fontFamily: SYSTEM_STACK,
  fontSize: 16,
  lineHeight: 1.55,
  letterSpacing: "-0.005em",
  color: "rgba(236,232,225,0.72)",
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: FG,
  color: "#141414",
  textDecoration: "none",
  fontFamily: SYSTEM_STACK,
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "-0.005em",
  padding: "13px 26px",
  borderRadius: 999,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "transparent",
  color: FG,
  textDecoration: "none",
  fontFamily: SYSTEM_STACK,
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "-0.005em",
  padding: "12px 22px",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 999,
};

const divider: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.08)",
  borderTopWidth: 1,
  borderBottomWidth: 0,
  margin: 0,
};

const rowDivider: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.06)",
  borderTopWidth: 1,
  borderBottomWidth: 0,
  margin: 0,
};

const listLabel: React.CSSProperties = {
  margin: "0 0 20px 0",
  fontFamily: MONO_STACK,
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(236,232,225,0.5)",
};

const listBadge: React.CSSProperties = {
  width: 28,
  height: 28,
  backgroundColor: "rgba(232,198,114,0.1)",
  border: "1px solid rgba(232,198,114,0.35)",
  borderRadius: 6,
  textAlign: "center",
};

const listBadgeNum: React.CSSProperties = {
  fontFamily: MONO_STACK,
  fontSize: 11,
  lineHeight: "28px",
  color: AMBER,
};

const listItemTitle: React.CSSProperties = {
  margin: 0,
  fontFamily: SYSTEM_STACK,
  fontSize: 15,
  fontWeight: 500,
  color: FG,
  letterSpacing: "-0.01em",
};

const listItemBody: React.CSSProperties = {
  margin: "4px 0 0 0",
  fontFamily: SYSTEM_STACK,
  fontSize: 14,
  color: "rgba(236,232,225,0.6)",
  lineHeight: 1.5,
};

const quoteBox: React.CSSProperties = {
  backgroundColor: "#0e0e10",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 14,
  padding: 28,
};

const quoteText: React.CSSProperties = {
  margin: 0,
  fontFamily: SERIF_STACK,
  fontStyle: "italic",
  fontSize: 22,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: FG,
};

const quoteAttribution: React.CSSProperties = {
  margin: "10px 0 0 0",
  fontFamily: MONO_STACK,
  fontSize: 11,
  letterSpacing: "0.12em",
  color: "rgba(236,232,225,0.45)",
  textTransform: "uppercase",
};

const nextStep: React.CSSProperties = {
  margin: 0,
  fontFamily: SYSTEM_STACK,
  fontSize: 14,
  lineHeight: 1.6,
  color: "rgba(236,232,225,0.58)",
};

const footer: React.CSSProperties = {
  padding: "28px 32px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const footerBrandCol: React.CSSProperties = {
  fontFamily: MONO_STACK,
  fontSize: 11,
  letterSpacing: "0.08em",
  color: "rgba(236,232,225,0.42)",
  textTransform: "uppercase",
};

const footerCopyrightCol: React.CSSProperties = {
  fontFamily: MONO_STACK,
  fontSize: 11,
  color: "rgba(236,232,225,0.42)",
};

const footerNote: React.CSSProperties = {
  margin: "16px 0 0 0",
  fontFamily: SYSTEM_STACK,
  fontSize: 12,
  lineHeight: 1.6,
  color: "rgba(236,232,225,0.4)",
};

const footerLink: React.CSSProperties = {
  color: "rgba(236,232,225,0.62)",
  textDecoration: "underline",
};

const footerAddress: React.CSSProperties = {
  margin: "16px 0 0 0",
  fontFamily: SYSTEM_STACK,
  fontSize: 11,
  lineHeight: 1.5,
  color: "rgba(236,232,225,0.28)",
};
