import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IntroSplit from "@/components/sections/IntroSplit";
import NumberedCardGrid from "@/components/sections/NumberedCardGrid";
import EdgeImageSplit from "@/components/sections/EdgeImageSplit";
import HowWeWork from "@/components/sections/HowWeWork";
import AdvisorSection from "@/components/sections/AdvisorSection";
import NumberedBoxSplit from "@/components/sections/NumberedBoxSplit";
import DarkImageCTA from "@/components/sections/DarkImageCTA";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GuardianChain Solutions is a consulting and advisory organisation helping clients navigate complex questions across business, digital assets, financial operations, and growth.",
};

export default function AboutUsPage() {
  return (
    <>
      <Hero
        eyebrow="About Guardianchain Solutions"
        heading={
          <>
            Where perspective <em className="emphasis">meets complexity.</em>
          </>
        }
        description="GuardianChain Solutions brings together perspectives across business, digital assets, financial operations, and growth to help clients navigate complicated situations with greater clarity."
        primaryCta={{ label: "Request a Consultation", href: "/request-a-consultation" }}
        secondaryCta={{ label: "Explore Our Approach", href: "#how-we-work", arrow: true }}
        image={{ src: "/images/site/hero-about.jpg", alt: "Five advisors reviewing documents together at a meeting table" }}
      />

      <IntroSplit
        variant="light"
        imageSide="left"
        image={{ src: "/images/site/about-intro-desk.jpg", alt: "Advisor reviewing a document at his desk" }}
        imageAspect="4 / 3.1"
        heading={
          <>
            Built around clarity, perspective, and <em className="emphasis">informed decisions.</em>
          </>
        }
        body={
          <>
            <p>
              GuardianChain Solutions is positioned as a consulting and advisory organisation for people and
              organisations navigating complex questions across business, digital assets, financial operations, and
              growth.
            </p>
            <p>
              Our role is to bring structure and perspective to situations that may not have straightforward answers,
              helping clients better understand the context, evaluate possibilities, and consider informed next
              steps.
            </p>
          </>
        }
      />

      <NumberedCardGrid
        variant="blue"
        columns={2}
        eyebrow="How We Help"
        heading={
          <>
            Perspectives across <em className="emphasis">disciplines.</em>
          </>
        }
        description="GuardianChain Solutions brings together perspectives across several areas that can intersect when clients face complex situations."
        items={[
          { number: "01", title: "Business", description: "Strategic thinking around business decisions, operations, and growth." },
          { number: "02", title: "Digital Assets", description: "Perspectives on digital assets, blockchain, and evolving financial environments." },
          { number: "03", title: "Financial Operations", description: "Considerations around financial processes, assets, risk, and complexity." },
          { number: "04", title: "Strategic Advisory", description: "Structured perspectives for important decisions and uncertain situations." },
        ]}
      />

      <EdgeImageSplit
        imageSide="left"
        image={{ src: "/images/site/about-clarity-portrait.jpg", alt: "Five advisors reviewing plans together in a boardroom" }}
        heading={
          <>
            Bringing structure to <em className="emphasis">complicated questions.</em>
          </>
        }
        body={
          <p>
            GuardianChain Solutions is designed around a consulting and advisory approach - bringing together
            informed perspectives, structured thinking, and strategic guidance for situations that require careful
            consideration.
          </p>
        }
        cta={{ label: "Explore Our Services", href: "/services" }}
      />

      <div id="how-we-work">
        <HowWeWork
          heading={
            <>
              How We <em className="emphasis">Work.</em>
            </>
          }
          steps={[
            { number: "01", title: "Understand", description: "Understand the situation and objectives." },
            { number: "02", title: "Analyse", description: "Review relevant information and surrounding context." },
            { number: "03", title: "Advise", description: "Provide structured perspectives and strategic guidance." },
            { number: "04", title: "Navigate", description: "Help clients consider informed next steps." },
          ]}
        />
      </div>

      <AdvisorSection />

      <NumberedBoxSplit
        heading={
          <>
            Clarity matters when the <em className="emphasis">stakes are high.</em>
          </>
        }
        body="Complex financial and digital-asset situations require careful assessment, clear communication, and an informed understanding of the circumstances."
        cta={{ label: "Read the Full Perspective", href: "/insights" }}
        items={[
          { number: "01", title: "Verify", description: "Understand who you are dealing with and assess relevant information." },
          { number: "02", title: "Preserve", description: "Keep important records, documentation, and supporting information." },
          { number: "03", title: "Question Guarantees", description: "Challenge assumptions and consider the available evidence before making important decisions." },
        ]}
      />

      <DarkImageCTA
        eyebrow="Our Perspective"
        heading={
          <>
            Better decisions begin with <em className="emphasis">better understanding.</em>
          </>
        }
        description="Explore perspectives on digital assets, strategy, financial operations, risk, and the questions shaping complex business environments."
        cta={{ label: "Explore Our Insights", href: "/insights" }}
        image={{ src: "/images/site/insights-featured-bg.jpg", alt: "Illuminated glass office building at dusk" }}
      />

      <FinalCTA />
    </>
  );
}
