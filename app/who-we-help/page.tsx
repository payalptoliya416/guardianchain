import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IntroSplit from "@/components/sections/IntroSplit";
import WhoWeHelpCards from "@/components/sections/WhoWeHelpCards";
import NumberedRowList from "@/components/sections/NumberedRowList";
import NumberedCardGrid from "@/components/sections/NumberedCardGrid";
import DarkImageCTA from "@/components/sections/DarkImageCTA";
import AdvisorSection from "@/components/sections/AdvisorSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "GuardianChain Solutions works with people and organisations navigating important questions across business, digital assets, financial operations, and growth.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <Hero
        eyebrow="Who We Help"
        heading={
          <>
            Guidance for those <em className="emphasis">navigating complexity.</em>
          </>
        }
        description="GuardianChain Solutions works with people and organisations navigating important questions across business, digital assets, financial operations, and growth."
        primaryCta={{ label: "Request a Consultation", href: "/request-a-consultation" }}
        image={{ src: "/images/site/hero-who-we-help.jpg", alt: "Five advisors in discussion around a boardroom table" }}
      />

      <IntroSplit
        variant="light"
        imageSide="left"
        image={{ src: "/images/site/who-we-help-boardroom.jpg", alt: "Three advisors reviewing data on screens and printed reports" }}
        heading={
          <>
            Built Around <em className="emphasis">the Questions</em> That Matter Most.
          </>
        }
        body={
          <>
            <p>
              Every client situation is different. The industries vary, the assets vary, and the specific questions
              vary. But the underlying challenge is often the same: making an informed decision when the stakes are
              high and the path forward is unclear.
            </p>
            <p>
              GuardianChain works alongside the people responsible for those decisions - bringing structure,
              independent perspective, and strategic clarity to situations that don&apos;t come with a standard
              playbook.
            </p>
          </>
        }
      />

      <WhoWeHelpCards
        variant="blue"
        heading={
          <>
            People and Organisations <em className="emphasis">We Work With.</em>
          </>
        }
        description="We work with people and organisations navigating complex questions across business, digital assets, finance, and growth."
      />

      <NumberedRowList
        variant="dark"
        eyebrow="Situations We Help Navigate"
        heading={
          <>
            When The Situation Is Complex, <em className="emphasis">Clarity Matters.</em>
          </>
        }
        headerDescription="Common moments when clients bring us into the conversation."
        items={[
          { number: "01", title: "Evaluating A Significant Opportunity" },
          { number: "02", title: "Entering A New Digital Asset Environment" },
          { number: "03", title: "Assessing Risk Before A Major Decision" },
          { number: "04", title: "Protecting Or Restructuring Significant Assets" },
          { number: "05", title: "Navigating Uncertainty And Change" },
          { number: "06", title: "Seeking An Independent Strategic Perspective" },
        ]}
      />

      <NumberedCardGrid
        variant="light"
        columns={4}
        heading={
          <>
            What Clients <em className="emphasis">Gain</em> From Working With Us.
          </>
        }
        description="Four qualities that shape every engagement, regardless of the situation."
        items={[
          { number: "01", title: "Independent Perspective", description: "Clear thinking without unnecessary complexity." },
          { number: "02", title: "Strategic Context", description: "Understanding the broader environment around a decision." },
          { number: "03", title: "Risk Awareness", description: "Identifying relevant risks before they become costly problems." },
          { number: "04", title: "Actionable Guidance", description: "Turning complex information into clearer next steps." },
        ]}
      />

      <DarkImageCTA
        eyebrow="Perspective Matters"
        heading={
          <>
            Better understanding can <em className="emphasis">lead to better decisions.</em>
          </>
        }
        description="In complex environments, clarity begins with understanding the situation before deciding what comes next."
        cta={{ label: "Explore Our Insights", href: "/insights" }}
        image={{ src: "/images/site/insights-towers-street.jpg", alt: "Glass office towers at street level during dusk" }}
      />

      <AdvisorSection />

      <FinalCTA />
    </>
  );
}
