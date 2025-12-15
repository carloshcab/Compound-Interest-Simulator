import React, { useState, useEffect } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsChart } from './components/ResultsChart';
import { ResultsTable } from './components/ResultsTable';
import { EducationalContent } from './components/EducationalContent';
import { CalculationInput, CalculationResult } from './types';
import { calculateCompoundInterest, formatCurrency } from './utils/financial';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInput>({
    initialValue: 1000,
    monthlyContribution: 1000,
    interestRate: 8,
    rateType: 'annual',
    period: 10,
    periodType: 'years',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const res = calculateCompoundInterest(inputs);
    setResult(res);
  };

  const handleClear = () => {
    setInputs({
      initialValue: 0,
      monthlyContribution: 0,
      interestRate: 0,
      rateType: 'annual',
      period: 1,
      periodType: 'years',
    });
    setResult(null);
  };

  // Calculate automatically on load with default values
  useEffect(() => {
    handleCalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-red-900 tracking-tight">Financial Freedom Calculator</h1>
          <p className="mt-2 text-lg text-gray-600">Simulate your wealth accumulation with the power of compound interest.</p>
        </header>

        <main className="space-y-8">
          {/* Input Section */}
          <CalculatorForm 
            inputs={inputs} 
            setInputs={setInputs} 
            onCalculate={handleCalculate} 
            onClear={handleClear}
          />

          {/* Results Section */}
          {result && (
            <div className="space-y-8 animate-fade-in-up">
              
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-900 rounded-xl p-6 text-white shadow-lg transform transition hover:scale-105">
                  <p className="text-red-100 text-sm font-medium uppercase tracking-wider mb-1">Final Total Value</p>
                  <p className="text-3xl font-bold">{formatCurrency(result.summary.finalValue)}</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Total Invested</p>
                  <p className="text-3xl font-bold text-gray-800">{formatCurrency(result.summary.totalInvested)}</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Total Interest Earned</p>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(result.summary.totalInterest)}</p>
                </div>
              </div>

              {/* Chart */}
              <ResultsChart data={result.monthlyData} />

              {/* Table */}
              <ResultsTable data={result.monthlyData} />
            </div>
          )}

          {/* SEO / Educational Content */}
          <EducationalContent />

        </main>
        
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Compound Interest Simulator. For educational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;