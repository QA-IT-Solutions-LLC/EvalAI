import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our Expertise"
        title="Comprehensive AI Evaluation Services"
      >
        We provide enterprise-grade AI evaluation, benchmarking and strategy
        services. Our consultants work with leading organizations to assess AI
        solutions, identify business value, and create implementation roadmaps.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="See Our Approach"
        title="How We Evaluate AI Solutions"
      >
        Watch our team walk through an enterprise AI evaluation. We analyze model
        performance, cost-effectiveness, integration challenges, and strategic fit
        to help organizations make informed decisions.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Proven Results"
        title="What Enterprise Leaders Say"
      >
        Our clients trust us to guide their AI transformation. Here&apos;s what leading
        companies across Fortune 500, tech, finance and healthcare have to say about
        working with our evaluation services.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Common Questions About AI Evals">
        Explore answers to frequently asked questions about our evaluation
        services, methodologies, and how we help enterprises make confident
        AI investment decisions.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
