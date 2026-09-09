import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>
              Helping clients navigate <em className="emphasis">complexity</em> with greater clarity.
            </h2>
            <p className={styles.body}>
              GuardianChain Solutions brings together perspectives across business, digital assets, financial
              operations, and growth to help clients understand complex situations, evaluate possibilities, and make
              informed decisions.
            </p>
            <Button href="/about-us" variant="primary">
              About Guardian Chain
            </Button>
            <div className={styles.smallGrid}>
              <div className={styles.smallImageWrap}>
                <div className={styles.imageInner}>
                  <Image
                    src="/images/site/intro-small-towers.jpg"
                    alt="Glass office towers viewed from below"
                    fill
                    className={styles.image}
                    sizes="(max-width: 700px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className={styles.smallImageWrap}>
                <div className={styles.imageInner}>
                  <Image
                    src="/images/site/intro-small-laptop.jpg"
                    alt="Laptop and financial charts on a desk"
                    fill
                    className={styles.image}
                    sizes="(max-width: 700px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.largeImageWrap}>
            <div className={styles.imageInner}>
              <Image
                src="/images/site/intro-small-plaza.jpg"
                alt="City plaza at dusk beside a glass office building"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
