import { Container } from "@/components/Container";

const pillars = [
  {
    title: "AI Evaluation for Enterprise Decisions",
    text:
      "Enterprise teams need more than vendor demos. We assess AI model quality, operational fit, and business value so leaders can make buying and deployment decisions with confidence.",
  },
  {
    title: "Benchmarking Real-World Performance",
    text:
      "We compare AI solutions against business-critical criteria such as accuracy, reliability, latency, cost-to-serve, hallucination risk, and integration readiness across your workflows.",
  },
  {
    title: "Risk, Governance, and Compliance",
    text:
      "AI adoption is not only a technical decision. We evaluate governance, security, privacy, and operational controls to help enterprises deploy responsibly and at scale.",
  },
  {
    title: "Roadmaps That Support Execution",
    text:
      "Our recommendations go beyond scoring. We translate evaluation findings into phased launch plans, implementation priorities, and internal operating models for sustainable adoption.",
  },
];

const valuePoints = [
  "AI model and workflow benchmarking",
  "Vendor selection support for enterprise programs",
  "Use-case prioritization and ROI analysis",
  "Implementation readiness and integration planning",
  "Operational governance and compliance review",
  "AI adoption strategy for executive leadership",
];

export default function AboutPage() {
  return (
    <Container>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              About EvalAI
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Enterprise AI evaluation built for confident decision-making
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              We help enterprise organizations assess AI solutions with clarity,
              structure, and business accountability. From initial discovery to final
              deployment recommendations, our work is designed to reduce uncertainty and
              speed up responsible AI adoption.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-indigo-600 p-8 text-white shadow-xl sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
                  Why it matters
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  The biggest AI risk is choosing the wrong solution.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-indigo-50">
                  Many enterprise AI programs stall because tools are evaluated on demos,
                  headlines, or vendor claims instead of measurable business outcomes. We
                  bring rigor to that process and help leadership act on evidence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                What we cover
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                AI evaluation across the full enterprise lifecycle
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {valuePoints.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Built for enterprise buyers, operators, and leaders
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Whether you are evaluating AI tools for customer support, operations,
              knowledge workflows, or strategic automation, we help your organization move
              from experimentation to confident execution. Our work is tailored to
              enterprise realities: complex teams, measurable ROI, governance constraints,
              and the need to scale responsibly.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

