import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./NumberedBoxSplit.module.css";

interface BoxItem {
  number: string;
  title: string;
  description: string;
}

interface NumberedBoxSplitProps {
  heading: ReactNode;
  body: ReactNode;
  cta: { label: string; href: string };
  items: BoxItem[];
}

export default function NumberedBoxSplit({ heading, body, cta, items }: NumberedBoxSplitProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.body}>{body}</p>
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </div>
          <div className={styles.boxCol}>
            {items.map((item) => (
              <div className={styles.box} key={item.number}>
                <span className={styles.number}>{item.number}</span>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
