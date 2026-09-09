import Hero from "@/components/sections/Hero";
import HomeIntro from "@/components/sections/HomeIntro";
import DarkImageCTA from "@/components/sections/DarkImageCTA";
import NumberedRowList from "@/components/sections/NumberedRowList";
import WhoWeHelpCards from "@/components/sections/WhoWeHelpCards";
import AdvisorSection from "@/components/sections/AdvisorSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Digital Assets & Blockchain Advisory"
        heading={
          <>
            Where <em className="emphasis">Technology Meets</em> Trust.
          </>
        }
        description="GuardianChain Solutions provides strategic perspectives across digital assets, financial operations, and complex business decisions."
        primaryCta={{ label: "Explore Our Services", href: "/services" }}
        secondaryCta={{ label: "Request a Consultation", href: "/request-a-consultation" }}
        image={{ src: "/images/site/hero-home.jpg", alt: "Two advisors reviewing data at a laptop with a night city skyline behind them" }}
      />

      <HomeIntro />

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

      <NumberedRowList
        variant="blue"
        eyebrow="How We Help"
        heading={
          <>
            Turning <em className="emphasis">Complex Challenges</em> Into Clearer Decisions.
          </>
        }
        headerCta={{ label: "Explore all services", href: "/services" }}
        items={[
          {
            number: "01",
            title: "Digital Assets & Crypto Advisory",
            description:
              "Strategic perspectives for navigating digital assets, blockchain opportunities, and evolving market environments.",
            cta: { label: "Explore", href: "/services#digital-assets-crypto-advisory" },
          },
          {
            number: "02",
            title: "Wealth & Fund Safeguarding",
            description: "Advisory perspectives around asset protection, risk assessment, and complex financial situations.",
            cta: { label: "Explore", href: "/services#wealth-fund-safeguarding" },
          },
          {
            number: "03",
            title: "General Consulting",
            description: "Strategic and business guidance for organisations facing complex challenges and important decisions.",
            cta: { label: "Explore", href: "/services#general-consulting" },
          },
          {
            number: "04",
            title: "Risk & Due Diligence",
            description: "Structured assessment of information, risks, counterparties, and potential pathways.",
            cta: { label: "Explore", href: "/services#risk-due-diligence" },
          },
        ]}
      />

      <DarkImageCTA
        align="center"
        eyebrow="The Future is Moving Fast."
        heading={
          <>
            Better Decisions Begin With <em className="emphasis">Better Understanding.</em>
          </>
        }
        cta={{ label: "Explore Our Insights", href: "/insights" }}
        image={{ src: "/images/site/tech-cta-bg.jpg", alt: "Abstract light trails representing fast-moving technology" }}
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

      <AdvisorSection />

      <FinalCTA />
    </>
  );
}
