import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>
          Let&apos;s Navigate <em className="emphasis">What Comes Next.</em>
        </h2>
        <p className={styles.description}>Tell us about your situation and our team will review your enquiry.</p>
        <Button href="/insights" variant="white">
          Explore Our Insights
        </Button>
        <p className={styles.note}>Confidential enquiries welcome.</p>
      </Container>
    </section>
  );
}
