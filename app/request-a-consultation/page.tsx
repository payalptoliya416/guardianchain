import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ConsultationForm from "@/components/sections/ConsultationForm";
import NumberedCardGrid from "@/components/sections/NumberedCardGrid";
import WhoWeHelpCards from "@/components/sections/WhoWeHelpCards";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Tell us about your situation and our team will review your enquiry. Whether you're navigating a complex business question, digital asset situation, financial consideration, or strategic decision, start by giving us some context.",
};

export default function RequestConsultationPage() {
  return (
    <>
      <Hero
        eyebrow="Request A Consultation"
        heading={
          <>
            Let&apos;s navigate <em className="emphasis">what comes next.</em>
          </>
        }
        description={
          <>
            Tell us about your situation and our team will review your enquiry.
            <br />
            <br />
            Whether you&apos;re navigating a complex business question, digital asset situation, financial
            consideration, or strategic decision, start by giving us some context.
          </>
        }
        image={{ src: "/images/site/hero-consultation.jpg", alt: "Two advisors reviewing a document together at a desk" }}
      />

      <div id="consultation-form">
        <ConsultationForm />
      </div>

      <NumberedCardGrid
        variant="light"
        columns={4}
        heading={
          <>
            Areas of <em className="emphasis">perspective.</em>
          </>
        }
        description="Our consulting and advisory perspective spans several areas where clients may face complex questions."
        items={[
          {
            number: "01",
            title: "Digital Assets & Crypto Advisory",
            description: "Strategic perspectives around digital assets, blockchain, and evolving financial environments.",
          },
          {
            number: "02",
            title: "Wealth & Fund Safeguarding",
            description: "Perspectives around safeguarding, assessing, and navigating significant financial or digital assets.",
          },
          {
            number: "03",
            title: "General Consulting",
            description: "Strategic and business guidance for organisations facing complex decisions and opportunities.",
          },
          {
            number: "04",
            title: "Risk & Due Diligence",
            description: "Structured assessment of information, risks, counterparties, and potential pathways.",
          },
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
