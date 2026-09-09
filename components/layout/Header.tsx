"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <Logo />

          <nav className={styles.nav} aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${active ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.cta}>
            <Button href="/request-a-consultation" variant="primary">
              Request a Consultation
            </Button>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenHide : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
          </button>
        </Container>
      </header>

      {open && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${active ? styles.active : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Button href="/request-a-consultation" variant="primary" className={styles.mobileCta}>
            Request a Consultation
          </Button>
        </div>
      )}
    </>
  );
}
