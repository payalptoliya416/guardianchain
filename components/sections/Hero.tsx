import { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  arrow?: boolean;
}

interface HeroProps {
  eyebrow: string;
  heading: ReactNode;
  description: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  image: { src: string; alt: string };
}

export default function Hero({ eyebrow, heading, description, primaryCta, secondaryCta, image }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.description}>{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className={styles.actions}>
              {primaryCta && (
                <Button href={primaryCta.href} variant={primaryCta.variant ?? "primary"} arrow={primaryCta.arrow}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant={secondaryCta.variant ?? "outline"} arrow={secondaryCta.arrow}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className={styles.imageFrame}>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={620}
            className={styles.image}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
