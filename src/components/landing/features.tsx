import {
  DollarSign,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Find Hidden Waste",
    description:
      "Detect overpriced AI subscriptions and unnecessary duplicate tooling.",
    icon: DollarSign,
  },
  {
    title: "Smart Recommendations",
    description:
      "Receive optimized plans and alternatives based on your actual workflow.",
    icon: BarChart3,
  },
  {
    title: "Built for Teams",
    description:
      "Designed for startups, engineering teams, and AI-heavy companies.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          SpendLens analyzes your AI tooling stack and
          identifies cost-saving opportunities instantly.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group border border-zinc-800 bg-zinc-950 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}