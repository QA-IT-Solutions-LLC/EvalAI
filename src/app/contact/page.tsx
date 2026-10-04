import { Container } from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Let&apos;s evaluate your next AI initiative
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We help enterprise teams assess AI opportunities, benchmark vendors,
              and build a decision-ready roadmap for responsible deployment.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                    United States
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    Book a consultation
                  </h2>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corporation"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project goals
                  </label>
                  <textarea
                    rows={5}
                    placeholder="We want to benchmark multiple enterprise AI vendors and evaluate ROI, risk, and implementation fit."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  Request a consultation
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="block text-sm font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                      Location
                    </span>
                    <span className="mt-1 block text-base">United States</span>
                  </li>
                  <li>
                    <span className="block text-sm font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                      Email
                    </span>
                    <a href="mailto:hello@evalai.com" className="mt-1 block text-base text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                      hello@evalai.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-sm font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                      Phone
                    </span>
                    <a href="tel:+12125550199" className="mt-1 block text-base text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                      +1 (212) 555-0199
                    </a>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="h-[420px] w-full">
                  <iframe
                    title="United States map"
                    src="https://www.google.com/maps?q=United%20States&z=4&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

