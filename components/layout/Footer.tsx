import Link from "next/link";
import Container from "./Container";
import Logo from "@/components/ui/Logo";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/request-a-consultation" },
];

const SERVICE_LINKS = [
  { label: "Digital Assets & Crypto Advisory", href: "/services#digital-assets-crypto-advisory" },
  { label: "Wealth & Fund Safeguarding", href: "/services#wealth-fund-safeguarding" },
  { label: "General Consulting", href: "/services#general-consulting" },
  { label: "Risk & Due Diligence", href: "/services#risk-due-diligence" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

function SocialIcon({ icon }: { icon: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  switch (icon) {
    case "linkedin":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3.5 9.98h3v10.02h-3V9.98Zm6.5 0h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.61h-3v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63v5.07h-3V9.98Z" />
        </svg>
      );
    case "x":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.2-9.3L1 2h7.3l5 6.6L18.9 2Zm-1.2 18h1.7L7 3.9H5.2L17.7 20Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 22v-8.5H16l.4-3.2h-2.9V8.2c0-.9.3-1.6 1.6-1.6H16.5V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2H10V22h3.5Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.5 8.1s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.4 4.6 12 4.6 12 4.6h0s-4.4 0-7.3.2c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S1.3 10 1.3 11.9v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.1.2 7.1.2s4.4 0 7.3-.2c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8ZM9.7 15.3V8.9l5.8 3.2-5.8 3.2Z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              GuardianChain:
              <br />
              Where Technology Meets Trust.
            </p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.icon} href={s.href} aria-label={s.label} className={styles.socialLink}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.column} aria-label="Company">
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Services">
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 Guardian Chain Solutions. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
