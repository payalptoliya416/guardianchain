import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./NumberedCardGrid.module.css";

interface CardItem {
  number: string;
  title: string;
  description: string;
}

interface NumberedCardGridProps {
  variant?: "light" | "blue";
  columns?: 2 | 4;
  eyebrow?: string;
  heading: ReactNode;
  description: ReactNode;
  items: CardItem[];
}

export default function NumberedCardGrid({
  variant = "light",
  columns = 4,
  eyebrow,
  heading,
  description,
  items,
}: NumberedCardGridProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container>
        <div className={styles.header}>
          <div className={styles.headerText}>
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h2 className={styles.heading}>{heading}</h2>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.grid} style={{ ["--cols" as string]: columns }}>
          {items.map((item) => (
            <div className={styles.card} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
