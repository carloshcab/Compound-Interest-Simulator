import React from 'react';

export const EducationalContent: React.FC = () => {
  return (
    <div className="mt-16 prose prose-red max-w-none text-gray-700 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">How to use the Compound Interest Calculator</h2>
      <p className="mb-4">
        Using our free, ad-free calculator is simple. Follow this step-by-step guide to plan your financial future:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h4 className="font-bold text-gray-900">Initial Investment</h4>
            <p>Enter the starting amount you have available to invest right now in the "Initial Investment" field.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h4 className="font-bold text-gray-900">Monthly Contribution</h4>
            <p>In the "Monthly Contribution" field, enter the amount you plan to add to your investment every month.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h4 className="font-bold text-gray-900">Interest Rate</h4>
            <p>Input your expected return rate. You can specify whether this rate is annual or monthly.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h4 className="font-bold text-gray-900">Time Period</h4>
            <p>Define how long you plan to keep the money invested, in either years or months.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
          <div>
            <h4 className="font-bold text-gray-900">Calculate</h4>
            <p>Click "Calculate" to see your results instantly.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">What is the formula for Compound Interest?</h3>
      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-800 mb-6">
        <p className="text-xl font-mono text-center">M = C (1 + i)^t</p>
      </div>
      <p className="mb-4">Where:</p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>M</strong>: Final amount (Montante).</li>
        <li><strong>C</strong>: Initial Capital invested.</li>
        <li><strong>i</strong>: Interest rate (in decimal form).</li>
        <li><strong>t</strong>: Time period the capital is applied.</li>
      </ul>
      <p className="mb-6">
        Without a calculator, this math can be tricky. It's crucial to ensure your time period and interest rate frequency match (e.g., monthly rate with months). Our calculator handles these conversions for you automatically.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">Where is Compound Interest Applied?</h3>
      <p className="mb-4">
        Often called "interest on interest", compound interest is used in various financial contexts. It acts as a double-edged sword depending on which side of the transaction you are on.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-red-800 mb-2">1. Debts & Bills</h4>
          <p className="text-sm">Late payments often incur compound interest, causing debt to snowball rapidly. This is beneficial for creditors but dangerous for consumers.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-red-800 mb-2">2. Loans</h4>
          <p className="text-sm">Mortgages and car loans use compound interest calculations, meaning you pay interest on the principal plus accumulated interest.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-700 mb-2">3. Investments</h4>
          <p className="text-sm">This is where you win. Savings accounts, bonds, and reinvested stock dividends use compound interest to grow your wealth exponentially over time.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple vs. Compound Interest</h3>
      <p className="mb-4">
        The main difference lies in what the interest is calculated on.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Simple Interest:</strong> Calculated <em>only</em> on the principal amount. The growth is linear.</li>
        <li><strong>Compound Interest:</strong> Calculated on the principal <em>plus</em> any previously earned interest. The growth is exponential (a curve upwards).</li>
      </ul>
      <p>
        Albert Einstein reputedly called compound interest the "eighth wonder of the world". Over long periods (20-30 years), the difference between simple and compound returns is massive, often resulting in double or triple the final value compared to simple interest.
      </p>
    </div>
  );
};