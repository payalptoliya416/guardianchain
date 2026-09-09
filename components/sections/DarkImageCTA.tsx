import { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./DarkImageCTA.module.css";

interface DarkImageCTAProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  align?: "left" | "center";
}

export default function DarkImageCTA({
  eyebrow,
  heading,
  description,
  cta,
  image,
  align = "left",
}: DarkImageCTAProps) {
  return (
    <section className={styles.section}>
      <Image src={image.src} alt={image.alt} fill className={styles.bgImage} sizes="100vw" />
      <div className={`${styles.overlay} ${align === "center" ? styles.overlayCenter : ""}`} />
      <Container className={`${styles.content} ${align === "center" ? styles.center : ""}`}>
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h2 className={styles.heading}>{heading}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <Button href={cta.href} variant="primary">
          {cta.label}
        </Button>
      </Container>
    </section>
  );
}
