interface ResultsProps {
  result: any;
}

export default function Results({
  result,
}: ResultsProps) {
  if (!result) return null;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border border-zinc-800 rounded-[32px] p-10 bg-zinc-950">
          <h2 className="text-5xl font-bold">
            Potential Savings
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
              <p className="text-zinc-400">
                Monthly Savings
              </p>

              <h3 className="text-5xl font-bold mt-4">
                $
                {result.totalMonthlySavings}
              </h3>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
              <p className="text-zinc-400">
                Annual Savings
              </p>

              <h3 className="text-5xl font-bold mt-4">
                $
                {result.totalYearlySavings}
              </h3>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {result.recommendations.map(
              (rec: any, index: number) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {rec.tool}
                      </h3>

                      <p className="text-zinc-400 mt-2">
                        {rec.recommendation}
                      </p>
                    </div>

                    <div className="text-right">
                      <h3 className="text-3xl font-bold">
                        $
                        {rec.monthlySavings}
                      </h3>

                      <p className="text-zinc-400">
                        monthly savings
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-zinc-300">
                      {rec.reason}
                    </p>
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