import {
  AuditInput,
  AuditRecommendation,
  AuditResult,
} from "@/types/audit";

export function generateAudit(
  data: AuditInput
): AuditResult {
  const recommendations: AuditRecommendation[] = [];

  let totalMonthlySavings = 0;

  for (const tool of data.tools) {
    let optimizedSpend = tool.spend;

    let recommendedPlan = tool.plan;

    let recommendation = "Current setup is already optimized.";

    let reason =
      "Your current usage aligns well with your selected plan.";

    /*
      CHATGPT RULES
    */

    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Plus";

      recommendation =
        "Downgrade from Team to Plus.";

      reason =
        "ChatGPT Team pricing is unnecessary for very small teams.";
    }

    /*
      CURSOR RULES
    */

    if (
      tool.tool === "Cursor" &&
      tool.plan === "Business" &&
      tool.seats <= 3
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Pro";

      recommendation =
        "Switch from Cursor Business to Pro.";

      reason =
        "Business features may not justify the added cost for smaller teams.";
    }

    /*
      CLAUDE RULES
    */

    if (
      tool.tool === "Claude" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Pro";

      recommendation =
        "Downgrade from Claude Team to Claude Pro.";

      reason =
        "Claude Team is typically better suited for larger collaborative teams.";
    }

    /*
      CALCULATIONS
    */

    const monthlySavings =
      tool.spend - optimizedSpend;

    const yearlySavings =
      monthlySavings * 12;

    totalMonthlySavings += monthlySavings;

    recommendations.push({
      tool: tool.tool,

      currentPlan: tool.plan,

      recommendedPlan,

      currentSpend: tool.spend,

      optimizedSpend,

      monthlySavings,

      yearlySavings,

      recommendation,

      reason,
    });
  }

  return {
    totalMonthlySavings,

    totalYearlySavings:
      totalMonthlySavings * 12,

    recommendations,
  };
}