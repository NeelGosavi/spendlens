import { generateAISummary } from "@/lib/ai-summary";

interface ResultsProps {
  result: any;
}

export default function Results({
  result,
}: ResultsProps) {
  if (!result) return null;

  const summary =
    generateAISummary(result);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border border-zinc-800 rounded-[32px] p-10 bg-zinc-950 shadow-2xl">
          {/* HEADER */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-zinc-400 uppercase tracking-widest text-sm">
                AI Spend Audit Report
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mt-3">
                Potential Savings
              </h2>
            </div>

            {result.totalMonthlySavings >= 500 && (
              <div className="border border-green-500/20 bg-green-500/10 rounded-2xl px-6 py-4">
                <p className="text-green-400 font-medium">
                  High Savings Opportunity
                </p>

                <p className="text-zinc-300 text-sm mt-1">
                  Your stack may qualify for
                  discounted AI infrastructure
                  credits through Credex.
                </p>
              </div>
            )}
          </div>

          {/* SAVINGS CARDS */}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
              <p className="text-zinc-400 text-lg">
                Monthly Savings
              </p>

              <h3 className="text-6xl font-bold mt-4 text-green-400">
                $
                {result.totalMonthlySavings.toLocaleString()}
              </h3>

              <p className="text-zinc-500 mt-3">
                Estimated optimization potential
                per month
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
              <p className="text-zinc-400 text-lg">
                Annual Savings
              </p>

              <h3 className="text-6xl font-bold mt-4 text-green-400">
                $
                {result.totalYearlySavings.toLocaleString()}
              </h3>

              <p className="text-zinc-500 mt-3">
                Estimated annual reduction in
                AI infrastructure spend
              </p>
            </div>
          </div>

          {/* AI SUMMARY */}

          <div className="mt-12 border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400" />

              <h3 className="text-2xl font-bold">
                AI Audit Summary
              </h3>
            </div>

            <p className="text-zinc-300 mt-6 leading-relaxed text-lg">
              {summary}
            </p>
          </div>

          {/* RECOMMENDATIONS */}

          <div className="mt-12 space-y-6">
            {result.recommendations.map(
              (rec: any, index: number) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    {/* LEFT */}

                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold">
                          {rec.tool}
                        </h3>

                        {rec.monthlySavings > 0 ? (
                          <div className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-sm text-green-400">
                            Savings Found
                          </div>
                        ) : (
                          <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm text-blue-400">
                            Already Optimized
                          </div>
                        )}
                      </div>

                      <div className="mt-6 inline-flex items-center rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                        {rec.recommendation}
                      </div>

                      <p className="text-zinc-400 mt-6 leading-relaxed">
                        {rec.reason}
                      </p>

                      <div className="mt-8 grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-zinc-500 text-sm">
                            Current Plan
                          </p>

                          <h4 className="text-xl font-semibold mt-2">
                            {rec.currentPlan}
                          </h4>
                        </div>

                        <div>
                          <p className="text-zinc-500 text-sm">
                            Recommended Plan
                          </p>

                          <h4 className="text-xl font-semibold mt-2 text-green-400">
                            {rec.recommendedPlan}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}

                    <div className="min-w-[220px] border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
                      <p className="text-zinc-500">
                        Monthly Savings
                      </p>

                      <h3 className="text-5xl font-bold text-green-400 mt-4">
                        $
                        {rec.monthlySavings}
                      </h3>

                      <div className="mt-6 pt-6 border-t border-zinc-800">
                        <p className="text-zinc-500">
                          Annual Savings
                        </p>

                        <h4 className="text-3xl font-bold mt-3">
                          $
                          {rec.yearlySavings}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}