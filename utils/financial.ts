import { CalculationInput, CalculationResult, MonthlyResult } from '../types';

export const calculateCompoundInterest = (input: CalculationInput): CalculationResult => {
  const { initialValue, monthlyContribution, interestRate, rateType, period, periodType } = input;

  // Convert period to months
  const totalMonths = periodType === 'years' ? period * 12 : period;

  // Convert rate to monthly decimal
  // We use Effective Annual Rate (Compound Annual Growth Rate) logic here to match standard financial comparison tools (like the reference).
  // Formula: (1 + annual_rate)^(1/12) - 1
  // If we used Nominal rate (rate / 12), the result would differ (usually higher).
  const monthlyRateDecimal = rateType === 'annual' 
    ? Math.pow(1 + interestRate / 100, 1 / 12) - 1
    : interestRate / 100;

  let currentBalance = initialValue;
  let totalInvested = initialValue;
  let totalInterest = 0;

  const monthlyData: MonthlyResult[] = [];

  // Initial state (Month 0)
  monthlyData.push({
    month: 0,
    year: 0,
    totalInvested: initialValue,
    interestEarned: 0,
    totalInterest: 0,
    totalAccumulated: initialValue,
  });

  for (let i = 1; i <= totalMonths; i++) {
    // Interest is calculated on the balance at the start of the month (before this month's contribution)
    const interestThisMonth = currentBalance * monthlyRateDecimal;
    
    // Add interest and the monthly contribution
    currentBalance += interestThisMonth + monthlyContribution;
    totalInvested += monthlyContribution;
    totalInterest += interestThisMonth;

    monthlyData.push({
      month: i,
      year: Math.floor(i / 12),
      totalInvested: Number(totalInvested.toFixed(2)),
      interestEarned: Number(interestThisMonth.toFixed(2)),
      totalInterest: Number(totalInterest.toFixed(2)),
      totalAccumulated: Number(currentBalance.toFixed(2)),
    });
  }

  return {
    monthlyData,
    summary: {
      finalValue: currentBalance,
      totalInvested: totalInvested,
      totalInterest: totalInterest,
    }
  };
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};