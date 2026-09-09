import { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./EdgeImageSplit.module.css";

interface EdgeImageSplitProps {
  imageSide?: "left" | "right";
  image: { src: string; alt: string };
  heading: ReactNode;
  body: ReactNode;
  cta?: { label: string; href: string };
}

export default function EdgeImageSplit({ imageSide = "left", image, heading, body, cta }: EdgeImageSplitProps) {
  return (
    <section className={`${styles.section} ${imageSide === "right" ? styles.imageRight : ""}`}>
      <div className={styles.imageWrap}>
        <Image src={image.src} alt={image.alt} fill className={styles.image} sizes="50vw" />
      </div>
      <div className={styles.textWrap}>
        <div className={styles.textInner}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.body}>{body}</div>
          {cta && (
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
