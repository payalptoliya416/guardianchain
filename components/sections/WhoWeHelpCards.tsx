import { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./WhoWeHelpCards.module.css";

const AUDIENCES = [
  {
    name: "Businesses",
    description: "Strategic advisory for organisations navigating digital assets, decision-making, and growth.",
    image: "/images/site/card-businesses.jpg",
  },
  {
    name: "Investors",
    description: "Frameworks and perspectives for evaluating digital asset strategies and allocating with confidence.",
    image: "/images/site/card-investors.jpg",
  },
  {
    name: "Asset Holders",
    description: "Perspectives on safeguarding, managing, or restructuring significant digital or financial assets.",
    image: "/images/site/card-asset-holders.jpg",
  },
  {
    name: "Organisations",
    description: "Independent advisory for institutions, charities, and public-sector bodies facing complex challenges.",
    image: "/images/site/card-organisations.jpg",
  },
];

interface WhoWeHelpCardsProps {
  variant?: "light" | "blue";
  heading: ReactNode;
  description: ReactNode;
}

export default function WhoWeHelpCards({ variant = "light", heading, description }: WhoWeHelpCardsProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.grid}>
          {AUDIENCES.map((a) => (
            <div className={styles.card} key={a.name}>
              <div className={styles.photoWrap}>
                <Image src={a.image} alt={a.name} fill className={styles.photo} sizes="(max-width: 700px) 50vw, 25vw" />
              </div>
              <h3 className={styles.name}>{a.name}</h3>
              <p className={styles.cardDescription}>{a.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
