export interface ToolInput {
  tool: string;
  plan: string;
  spend: number;
  seats: number;
}

export interface AuditInput {
  tools: ToolInput[];
}

export interface AuditRecommendation {
  tool: string;

  currentPlan: string;

  recommendedPlan: string;

  currentSpend: number;

  optimizedSpend: number;

  monthlySavings: number;

  yearlySavings: number;

  recommendation: string;

  reason: string;
}

export interface AuditResult {
  totalMonthlySavings: number;

  totalYearlySavings: number;

  recommendations: AuditRecommendation[];
}