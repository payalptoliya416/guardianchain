import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./HowWeWork.module.css";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowWeWorkProps {
  eyebrow?: string;
  heading: ReactNode;
  steps: Step[];
}

export default function HowWeWork({ eyebrow, heading, steps }: HowWeWorkProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.line} aria-hidden="true">
          {steps.map((step) => (
            <span className={styles.dot} key={step.number} />
          ))}
        </div>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div className={styles.step} key={step.number}>
              <span className={styles.stepDot} aria-hidden="true" />
              <span className={styles.bigNumber} aria-hidden="true">
                {step.number}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
