import Link from "next/link";
import { Container } from "@/components/Container";

const solutionCards = [
	{
		title: "AI Contact Center Optimization",
		summary:
			"Evaluate AI-powered customer support platforms that triage inquiries, automate responses, and improve service quality across enterprise operations.",
		useCases: [
			"Ticket deflection and routing",
			"Agent assist and summarization",
			"Sentiment and conversation quality analysis",
		],
	},
	{
		title: "AI Knowledge Management",
		summary:
			"Assess enterprise search and knowledge systems that surface institutional information, reduce research time, and improve internal decision support.",
		useCases: [
			"Internal knowledge retrieval",
			"Policy and documentation search",
			"Decision support for frontline teams",
		],
	},
	{
		title: "AI Document Processing",
		summary:
			"Review document intelligence and extraction tools for structured workflows such as contracts, invoices, claims, and compliance review.",
		useCases: [
			"Claims and underwriting review",
			"Compliance document analysis",
			"Invoice and contract extraction",
		],
	},
	{
		title: "AI Sales and Revenue Copilots",
		summary:
			"Benchmark AI systems that help teams draft proposals, enrich opportunities, surface account insights, and improve pipeline efficiency.",
		useCases: [
			"Opportunity prioritization",
			"Forecasting support",
			"Proposal and email generation",
		],
	},
	{
		title: "AI Risk and Compliance Monitoring",
		summary:
			"Evaluate AI applications used to detect anomalies, monitor policy adherence, and support governance across regulated operations.",
		useCases: [
			"Fraud and anomaly detection",
			"Compliance alerts",
			"Operational control monitoring",
		],
	},
	{
		title: "AI Workflow Automation",
		summary:
			"Assess AI-driven automation platforms that streamline operational processes, reduce manual work, and improve execution across key business teams.",
		useCases: [
			"Operational process orchestration",
			"Cross-functional workflow automation",
			"Intelligent task routing and escalation",
		],
	},
];

const evaluationCriteria = [
	"Business impact and measurable ROI",
	"Model accuracy, reliability, and hallucination risk",
	"Latency, scalability, and operational performance",
	"Data quality, security, and governance readiness",
	"System integration with enterprise workflows",
	"Adoption readiness across teams and stakeholders",
];

export default function SolutionsPage() {
	return (
		<Container>
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="mb-14 text-center">
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
							Enterprise AI Solutions
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
							Evaluate the right AI solutions before scaling them
						</h1>
						<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
							The strongest AI programs start with disciplined evaluation. We assess
							enterprise-ready AI solutions across operational value, model quality,
							governance, and execution fit so decision-makers can move with more
							clarity.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{solutionCards.map((card) => (
							<div
								key={card.title}
								className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
							>
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
									{card.title}
								</h2>
								<p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
									{card.summary}
								</p>
								<ul className="mt-5 flex-1 space-y-3 text-sm text-gray-700 dark:text-gray-200">
									{card.useCases.map((item) => (
										<li key={item} className="flex items-start gap-2">
											<span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<div className="mt-6">
									<Link
										href="/contact"
										className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
									>
										Consult the price
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="mt-20 rounded-3xl bg-indigo-600 p-8 text-white shadow-xl sm:p-10">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
								Evaluation lens
							</p>
							<h2 className="mt-3 text-3xl font-bold sm:text-4xl">
								We review enterprise AI solutions against business outcomes, not
								hype.
							</h2>
						</div>
					</div>

					<div className="mt-16">
						<div className="text-center">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
								Evaluation criteria
							</p>
							<h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
								The questions enterprise teams should ask before deployment
							</h2>
						</div>

						<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{evaluationCriteria.map((item) => (
								<div
									key={item}
									className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
								>
									{item}
								</div>
							))}
						</div>
					</div>

					<div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
							Most enterprise AI programs fail at selection, not execution.
						</h2>
						<p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
							The challenge is not whether AI can create value. It is choosing the
							right use case, the right platform, and the right operating model to
							deploy at scale. We help leadership evaluate those decisions with
							discipline and evidence before investment expands.
						</p>
					</div>
				</div>
			</section>
		</Container>
	);
}
