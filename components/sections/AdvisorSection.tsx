import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./AdvisorSection.module.css";

const ADVISORS = [
  {
    name: "Danish Ali",
    role: "CEO",
    specialty: "Blockchain InsightsBlochckain",
    image: "/images/site/advisor-danish-ali.webp",
  },
  {
    name: "Nikolas Urban",
    role: "Director of Cyber Intelligence",
    specialty: "Cybersecurity · Threat Intelligence",
    image: "/images/site/advisor-nikolas-urban.webp",
  },
  {
    name: "Daniel Calligaris",
    role: "Head of Blockchain Forensics",
    specialty: "On-chain Analysis · Fraud Investigation",
    image: "/images/site/advisor-daniel-calligaris.webp",
  },
  {
    name: "Mark Brown",
    role: "Chief Compliance",
    specialty: "Officer AML · Financial Regulation",
    image: "/images/site/advisor-mark-brown.webp",
  },
];

export default function AdvisorSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <em className="emphasis">Experienced perspectives.</em>
            <br />
            Informed decisions.
          </h2>
          <p className={styles.description}>
            Our consultants and advisors bring perspectives across business,
            digital assets, financial operations, and strategic growth.
          </p>
        </div>
        <div className={styles.grid}>
          {ADVISORS.map((advisor) => (
            <div className={styles.card} key={advisor.name}>
              <div className={styles.photoWrap}>
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className={styles.photo}
                  sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className={styles.name}>{advisor.name}</h3>
              <p className={styles.role}>{advisor.role}</p>
              <p className={styles.specialty}>{advisor.specialty}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
