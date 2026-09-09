import { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./IntroSplit.module.css";

interface IntroSplitProps {
  variant?: "light" | "dark";
  imageSide?: "left" | "right";
  image: { src: string; alt: string };
  heading: ReactNode;
  body: ReactNode;
  cta?: { label: string; href: string };
  extra?: ReactNode;
  imageAspect?: string;
}

export default function IntroSplit({
  variant = "light",
  imageSide = "right",
  image,
  heading,
  body,
  cta,
  extra,
  imageAspect = "4 / 3.1",
}: IntroSplitProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container>
        <div className={`${styles.grid} ${imageSide === "left" ? styles.imageLeft : ""}`}>
          <div className={styles.imageCol}>
            <Image
              src={image.src}
              alt={image.alt}
              width={760}
              height={600}
              className={styles.image}
              style={{ aspectRatio: imageAspect }}
            />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.body}>{body}</div>
            {cta && (
              <Button href={cta.href} variant="primary" className={styles.cta}>
                {cta.label}
              </Button>
            )}
          </div>
        </div>
        {extra}
      </Container>
    </section>
  );
}
