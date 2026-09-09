import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./ServiceDetailBlock.module.css";

interface ServiceDetailBlockProps {
  id?: string;
  variant?: "white" | "dark" | "blue";
  imageSide?: "left" | "right";
  accent?: boolean;
  image: { src: string; alt: string };
  title: string;
  description: string;
  listItems: string[];
  cta: { label: string; href: string };
}

export default function ServiceDetailBlock({
  id,
  variant = "white",
  imageSide = "right",
  accent = false,
  image,
  title,
  description,
  listItems,
  cta,
}: ServiceDetailBlockProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]}`}>
      <Container>
        <div className={`${styles.grid} ${imageSide === "left" ? styles.imageLeft : ""}`}>
          <div className={`${styles.imageCol} ${accent ? styles.imageColAccent : ""}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              className={styles.image}
            />
          </div>
          <div className={styles.textCol}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.list}>
              {listItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
