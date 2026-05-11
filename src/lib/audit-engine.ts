import {
  AuditInput,
  AuditRecommendation,
  AuditResult,
} from "@/types/audit";

export function generateAudit(
  data: AuditInput
): AuditResult {
  const recommendations: AuditRecommendation[] =
    [];

  let totalMonthlySavings = 0;

  const toolNames = data.tools.map(
    (tool) => tool.tool
  );

  const hasTool = (toolName: string) =>
    toolNames.includes(toolName);

  for (const tool of data.tools) {
    let optimizedSpend = tool.spend;

    let recommendedPlan = tool.plan;

    let recommendation =
      "Current setup is already optimized.";

    let reason =
      "Your current plan appears appropriate for your usage.";

    /*
      -----------------------------------
      CHATGPT RULES
      -----------------------------------
    */

    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Plus";

      recommendation =
        "Downgrade from ChatGPT Team to Plus.";

      reason =
        "ChatGPT Team pricing is generally unnecessary for teams smaller than 3 users.";
    }

    /*
      -----------------------------------
      CLAUDE RULES
      -----------------------------------
    */

    if (
      tool.tool === "Claude" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Pro";

      recommendation =
        "Downgrade from Claude Team to Pro.";

      reason =
        "Claude Team is better suited for larger collaborative teams.";
    }

    /*
      -----------------------------------
      CURSOR RULES
      -----------------------------------
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
        "Cursor Business features may not justify the added cost for smaller teams.";
    }

    /*
      -----------------------------------
      GEMINI RULES
      -----------------------------------
    */

    if (
      tool.tool === "Gemini" &&
      tool.plan === "Ultra" &&
      tool.seats <= 2
    ) {
      optimizedSpend = 20 * tool.seats;

      recommendedPlan = "Pro";

      recommendation =
        "Downgrade Gemini Ultra to Gemini Pro.";

      reason =
        "Gemini Ultra is often excessive for smaller teams with moderate workloads.";
    }

    /*
      -----------------------------------
      GITHUB COPILOT OVERLAP
      -----------------------------------
    */

    if (
      tool.tool === "GitHub Copilot" &&
      hasTool("Cursor")
    ) {
      optimizedSpend = tool.spend * 0.5;

      recommendation =
        "Cursor may already cover most GitHub Copilot use cases.";

      reason =
        "Cursor includes advanced AI coding assistance that overlaps significantly with GitHub Copilot.";
    }

    /*
      -----------------------------------
      CHATGPT + CLAUDE OVERLAP
      -----------------------------------
    */

    if (
      (tool.tool === "ChatGPT" ||
        tool.tool === "Claude") &&
      hasTool("ChatGPT") &&
      hasTool("Claude")
    ) {
      optimizedSpend = tool.spend * 0.7;

      recommendation =
        "Consider consolidating ChatGPT and Claude usage.";

      reason =
        "Many teams can reduce costs by standardizing on a single primary AI assistant.";
    }

    /*
      -----------------------------------
      MULTIPLE CODING TOOLS OVERLAP
      -----------------------------------
    */

    const codingTools = [
      "Cursor",
      "GitHub Copilot",
      "Windsurf",
    ];

    const activeCodingTools =
      codingTools.filter(hasTool);

    if (
      codingTools.includes(tool.tool) &&
      activeCodingTools.length >= 2
    ) {
      optimizedSpend = tool.spend * 0.7;

      recommendation =
        "Your team may be paying for overlapping AI coding assistants.";

      reason =
        "Many coding-focused AI tools provide similar autocomplete and code generation workflows.";
    }

    /*
      -----------------------------------
      ENTERPRISE PLAN OVERKILL
      -----------------------------------
    */

    if (
      tool.plan === "Enterprise" &&
      tool.seats <= 5
    ) {
      optimizedSpend = tool.spend * 0.6;

      recommendation =
        "Enterprise pricing may be unnecessary for smaller teams.";

      reason =
        "Enterprise plans are typically most cost-effective at larger organizational scales.";
    }

    /*
      -----------------------------------
      HIGH SPEND ALERT
      -----------------------------------
    */

    if (tool.spend >= 500) {
      recommendation =
        "High monthly AI spend detected.";

      reason =
        "Your organization may benefit from infrastructure credits or consolidated vendor pricing.";
    }

    /*
      -----------------------------------
      CALCULATIONS
      -----------------------------------
    */

    optimizedSpend = Math.max(
      0,
      Math.round(optimizedSpend)
    );

    const monthlySavings = Math.max(
      0,
      Math.round(tool.spend - optimizedSpend)
    );

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