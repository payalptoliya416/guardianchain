import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import InsightsGrid from "@/components/sections/InsightsGrid";
import NumberedBoxSplit from "@/components/sections/NumberedBoxSplit";
import DarkImageCTA from "@/components/sections/DarkImageCTA";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas and perspectives on digital assets, financial operations, strategic decision-making, risk, and the evolving business landscape.",
};

export default function InsightsPage() {
  return (
    <>
      <Hero
        eyebrow="Our Insights"
        heading={
          <>
            Perspectives for a <em className="emphasis">changing world.</em>
          </>
        }
        description="Ideas and perspectives on digital assets, financial operations, strategic decision-making, risk, and the evolving business landscape."
        primaryCta={{ label: "Explore Our Insights", href: "#latest-perspectives" }}
        image={{ src: "/images/site/hero-insights.jpg", alt: "People walking through a city plaza at dusk beside illuminated office towers" }}
      />

      <div id="latest-perspectives">
        <InsightsGrid />
      </div>

      <NumberedBoxSplit
        heading={
          <>
            When a loss creates <em className="emphasis">a second risk.</em>
          </>
        }
        body="People who have experienced financial loss can become targets for additional fraud. Understanding who you are dealing with, preserving relevant evidence, and being cautious of guaranteed outcomes or upfront payment demands can help reduce additional risk."
        cta={{ label: "Read the Full Perspective", href: "/request-a-consultation" }}
        items={[
          { number: "01", title: "Verify", description: "Check who you are dealing with and whether they are properly authorised where applicable." },
          { number: "02", title: "Preserve", description: "Keep transaction records, wallet addresses, correspondence, contracts, and payment information." },
          { number: "03", title: "Question Guarantees", description: "Be cautious of anyone promising that lost funds can definitely be recovered." },
        ]}
      />

      <DarkImageCTA
        eyebrow="Featured Perspective"
        heading={
          <>
            Better understanding begins with <em className="emphasis">better questions.</em>
          </>
        }
        description="Complex environments rarely come with simple answers. The right questions can help organisations understand their options, assess uncertainty, and make more informed decisions."
        cta={{ label: "Read More", href: "/request-a-consultation" }}
        image={{ src: "/images/site/insights-featured-bg.jpg", alt: "Aerial view of an illuminated city skyline at dusk" }}
      />

      <FinalCTA />
    </>
  );
}
