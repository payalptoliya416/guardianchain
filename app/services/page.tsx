import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionIntro from "@/components/sections/SectionIntro";
import ServiceDetailBlock from "@/components/sections/ServiceDetailBlock";
import DarkImageCTA from "@/components/sections/DarkImageCTA";
import HowWeWork from "@/components/sections/HowWeWork";
import WhoWeHelpCards from "@/components/sections/WhoWeHelpCards";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GuardianChain Solutions provides strategic perspectives across digital assets, financial operations, business strategy, and complex situations.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="How We Help"
        heading={
          <>
            Turning complex challenges into <em className="emphasis">clearer decisions.</em>
          </>
        }
        description="GuardianChain Solutions provides strategic perspectives across digital assets, financial operations, business strategy, and complex situations."
        primaryCta={{ label: "Request a Consultation", href: "/request-a-consultation" }}
        secondaryCta={{ label: "Explore Our Services", href: "#digital-assets-crypto-advisory", arrow: true }}
        image={{ src: "/images/site/hero-services.jpg", alt: "An advisor presenting analysis charts to colleagues on a large screen" }}
      />

      <SectionIntro
        heading={
          <>
            Expertise where technology, finance, and <em className="emphasis">strategy meet.</em>
          </>
        }
        description="We help clients navigate complex questions with structured analysis, informed perspectives, and strategic guidance."
      />

      <ServiceDetailBlock
        id="digital-assets-crypto-advisory"
        variant="white"
        imageSide="right"
        image={{ src: "/images/site/services-boardroom.jpg", alt: "Two analysts reviewing digital asset data on large screens" }}
        title="Digital Assets & Crypto Advisory"
        description="Strategic perspectives for navigating digital assets, blockchain opportunities, and evolving financial environments. We help organisations develop informed approaches to this complex and rapidly changing landscape."
        listItems={[
          "Digital asset strategy & positioning",
          "Blockchain opportunity assessment",
          "Regulatory environment navigation",
          "Institutional crypto adoption frameworks",
        ]}
        cta={{ label: "Explore Digital Assets Advisory", href: "/request-a-consultation" }}
      />

      <ServiceDetailBlock
        id="wealth-fund-safeguarding"
        variant="dark"
        imageSide="left"
        accent
        image={{ src: "/images/site/services-wealth-safeguarding.jpg", alt: "Two advisors reviewing documents at a desk" }}
        title="Wealth & Fund Safeguarding"
        description="Advisory perspectives around safeguarding assets, assessing risk, and navigating complex financial situations with discretion and strategic clarity."
        listItems={[
          "Asset protection strategies",
          "Complex financial situation advisory",
          "Risk assessment & mitigation",
          "Restructuring & recovery perspectives",
        ]}
        cta={{ label: "Explore Wealth & Fund Safeguarding", href: "/request-a-consultation" }}
      />

      <ServiceDetailBlock
        id="general-consulting"
        variant="blue"
        imageSide="right"
        accent
        image={{ src: "/images/site/services-general-consulting.jpg", alt: "Colleagues discussing strategy around a meeting table" }}
        title="General Consulting"
        description="Strategic and business guidance for organisations facing complex challenges, important decisions, and opportunities for growth."
        listItems={[
          "Strategic Business Planning",
          "Complex Decision-Making Support",
          "Growth & Opportunity Advisory",
          "Business Performance Improvement",
        ]}
        cta={{ label: "Explore General Consulting", href: "/request-a-consultation" }}
      />

      <ServiceDetailBlock
        id="risk-due-diligence"
        variant="white"
        imageSide="left"
        image={{ src: "/images/site/services-risk-diligence-desk.jpg", alt: "An analyst reviewing risk data across multiple monitors" }}
        title="Risk & Due Diligence"
        description="Structured assessment of information, risks, counterparties, and potential pathways before important decisions are made. Clarity before commitment."
        listItems={[
          "Counterparty & background assessment",
          "Pre-investment due diligence",
          "Operational risk evaluation",
          "Regulatory & compliance landscape review",
        ]}
        cta={{ label: "Explore Risk & Due Diligence", href: "/request-a-consultation" }}
      />

      <DarkImageCTA
        eyebrow="Featured Perspective"
        heading={
          <>
            Navigating the <em className="emphasis">New Digital Asset Landscape</em>
          </>
        }
        description="How organisations can approach digital assets with greater strategic clarity, disciplined risk assessment, and informed decision-making."
        cta={{ label: "Explore the Perspective", href: "/insights" }}
        image={{ src: "/images/site/featured-perspective-bg.jpg", alt: "Curved glass office building against a cloudy sky" }}
      />

      <HowWeWork
        eyebrow="How We Work"
        heading={
          <>
            A Structured Approach To <em className="emphasis">Every Situation.</em>
          </>
        }
        steps={[
          { number: "01", title: "Understand", description: "Assess the situation, objectives, and surrounding context to build a clear picture before any analysis begins." },
          { number: "02", title: "Analyse", description: "Examine relevant information, risks, opportunities, and possible pathways with structured and rigorous thinking." },
          { number: "03", title: "Advise", description: "Provide structured perspectives and strategic guidance tailored to the specific situation and objectives." },
          { number: "04", title: "Navigate", description: "Help clients move forward with greater clarity, confidence, and a well-considered strategic direction." },
        ]}
      />

      <WhoWeHelpCards
        variant="light"
        heading={
          <>
            Built around <em className="emphasis">the questions</em> that matter most.
          </>
        }
        description="We work with people and organisations navigating complex questions across business, digital assets, finance, and growth."
      />

      <FinalCTA />
    </>
  );
}
