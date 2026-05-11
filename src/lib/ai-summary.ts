export function generateAISummary(
  result: any
) {
  const savings =
    result.totalYearlySavings;

  if (savings > 5000) {
    return `
Your team has significant opportunities to reduce AI infrastructure spending.
The audit identified overlapping subscriptions, oversized team plans,
and tooling inefficiencies that could save approximately $${savings}
annually while maintaining similar productivity levels.
    `;
  }

  if (savings > 1000) {
    return `
Your AI tooling stack appears moderately optimized,
though several opportunities exist to reduce unnecessary spending.
Adjusting plan selection and consolidating overlapping subscriptions
could improve cost efficiency without disrupting workflows.
    `;
  }

  return `
Your current AI tooling setup appears relatively efficient.
Only minor optimizations were identified, and your existing
plan choices generally align well with your team size and usage.
  `;
}