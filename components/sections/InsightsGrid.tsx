import Image from "next/image";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./InsightsGrid.module.css";

export interface Insight {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const INSIGHTS: Insight[] = [
  {
    slug: "digital-assets-navigating-a-changing-financial-landscape",
    category: "Digital Assets",
    title: "Digital Assets: Navigating a Changing Financial Landscape",
    description:
      "Key considerations for organisations evaluating digital assets, evolving financial environments, and strategic opportunities.",
    date: "March 2025",
    image: "/images/site/insights-crypto-trading.jpg",
  },
  {
    slug: "blockchain-strategy-from-technology-to-business-value-feb",
    category: "Blockchain & Strategy",
    title: "Blockchain Strategy: From Technology to Business Value",
    description:
      "Key considerations for organisations evaluating digital assets, evolving financial environments, and strategic opportunities.",
    date: "February 2025",
    image: "/images/site/insights-boardroom-1.jpg",
  },
  {
    slug: "lost-funds-and-recovery-scams-why-due-diligence-matters",
    category: "Risk & Due Diligence",
    title: "Lost Funds and Recovery Scams: Why Due Diligence Matters",
    description:
      "How to identify warning signs, verify who you are dealing with, and approach claims of fund recovery with caution.",
    date: "January 2025",
    image: "/images/site/insights-law-office.jpg",
  },
  {
    slug: "blockchain-strategy-from-technology-to-business-value-dec",
    category: "Digital Assets",
    title: "Blockchain Strategy: From Technology to Business Value",
    description:
      "Key considerations for organisations evaluating digital assets, evolving financial environments, and strategic opportunities.",
    date: "December 2024",
    image: "/images/site/insights-boardroom-2.jpg",
  },
  {
    slug: "making-better-decisions-in-complex-situations",
    category: "Strategy",
    title: "Making Better Decisions in Complex Situations",
    description: "Why structured thinking and informed perspectives matter when the path forward is not always obvious.",
    date: "November 2024",
    image: "/images/site/insights-desk-thinking.jpg",
  },
  {
    slug: "clarity-before-action",
    category: "Financial Operations",
    title: "Clarity Before Action",
    description:
      "Important financial decisions often begin with understanding the situation, reviewing the available information, and considering the broader context.",
    date: "October 2024",
    image: "/images/site/insights-boardroom-3.jpg",
  },
];

export default function InsightsGrid() {
  const [featured, second, third, ...rest] = INSIGHTS;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <Eyebrow tone="dark">Latest Perspectives</Eyebrow>
            <h2 className={styles.heading}>
              Ideas That Help Make Sense Of <em className="emphasis">Complexity.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            Our insights explore the questions, opportunities, and risks shaping business, digital assets, finance,
            and strategic decision-making.
          </p>
        </div>

        <article className={styles.featuredCard}>
          <div className={styles.featuredImageWrap}>
            <Image src={featured.image} alt={featured.title} fill className={styles.image} sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className={styles.featuredBody}>
            <span className={styles.category}>{featured.category}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.description}>{featured.description}</p>
            <div className={styles.metaRow}>
              <span className={styles.date}>{featured.date}</span>
              <a href="#" className={styles.readMore}>
                Read More
              </a>
            </div>
          </div>
        </article>

        <div className={styles.pairGrid}>
          {[second, third].map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>

        <div className={styles.tripleGrid}>
          {rest.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}

function InsightCard({ insight, compact = false }: { insight: Insight; compact?: boolean }) {
  return (
    <article className={`${styles.card} ${compact ? styles.compactCard : ""}`}>
      <div className={styles.cardImageWrap}>
        <Image src={insight.image} alt={insight.title} fill className={styles.image} sizes="(max-width: 700px) 100vw, 33vw" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.category}>{insight.category}</span>
        <h3 className={styles.cardTitle}>{insight.title}</h3>
        {!compact && <p className={styles.description}>{insight.description}</p>}
        <div className={styles.metaRow}>
          <span className={styles.date}>{insight.date}</span>
          <a href="#" className={styles.readMore}>
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}
