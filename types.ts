export interface CalculationInput {
  initialValue: number;
  monthlyContribution: number;
  interestRate: number;
  rateType: 'annual' | 'monthly';
  period: number;
  periodType: 'years' | 'months';
}

export interface MonthlyResult {
  month: number;
  year: number;
  totalInvested: number;
  interestEarned: number; // Interest earned just in this month
  totalInterest: number; // Accumulated interest
  totalAccumulated: number; // Total balance
}

export interface CalculationResult {
  monthlyData: MonthlyResult[];
  summary: {
    finalValue: number;
    totalInvested: number;
    totalInterest: number;
  };
}