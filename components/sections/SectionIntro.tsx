import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import styles from "./SectionIntro.module.css";

interface SectionIntroProps {
  heading: ReactNode;
  description: ReactNode;
}

export default function SectionIntro({ heading, description }: SectionIntroProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </Container>
    </section>
  );
}
