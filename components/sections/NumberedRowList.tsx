import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./NumberedRowList.module.css";

interface RowItem {
  number: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
}

interface NumberedRowListProps {
  variant?: "blue" | "dark";
  eyebrow?: string;
  heading: ReactNode;
  headerCta?: { label: string; href: string };
  headerDescription?: ReactNode;
  items: RowItem[];
}

export default function NumberedRowList({
  variant = "blue",
  eyebrow,
  heading,
  headerCta,
  headerDescription,
  items,
}: NumberedRowListProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container>
        <div className={styles.header}>
          <div>
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h2 className={styles.heading}>{heading}</h2>
          </div>
          {headerCta && (
            <Button href={headerCta.href} variant="outline">
              {headerCta.label}
            </Button>
          )}
          {headerDescription && <p className={styles.headerDescription}>{headerDescription}</p>}
        </div>
        <div className={styles.list}>
          {items.map((item) => (
            <div className={styles.row} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <div className={styles.rowBody}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.description && <p className={styles.description}>{item.description}</p>}
              </div>
              {item.cta && (
                <Button href={item.cta.href} variant="primary" className={styles.rowCta}>
                  {item.cta.label}
                </Button>
              )}
              {!item.cta && (
                <span className={styles.arrowBox} aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
