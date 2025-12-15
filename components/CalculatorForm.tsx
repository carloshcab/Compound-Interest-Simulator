import React from 'react';
import { CalculationInput } from '../types';

interface CalculatorFormProps {
  inputs: CalculationInput;
  setInputs: React.Dispatch<React.SetStateAction<CalculationInput>>;
  onCalculate: () => void;
  onClear: () => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ inputs, setInputs, onCalculate, onClear }) => {
  
  const handleChange = (field: keyof CalculationInput, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-red-800 mb-6 border-b pb-2">Compound Interest Simulator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Initial Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Investment (US$)</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.initialValue}
              onChange={(e) => handleChange('initialValue', parseFloat(e.target.value) || 0)}
              className="focus:ring-red-500 focus:border-red-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Monthly Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution (US$)</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.monthlyContribution}
              onChange={(e) => handleChange('monthlyContribution', parseFloat(e.target.value) || 0)}
              className="focus:ring-red-500 focus:border-red-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <div className="flex">
            <input
              type="number"
              min="0"
              step="0.01"
              value={inputs.interestRate}
              onChange={(e) => handleChange('interestRate', parseFloat(e.target.value) || 0)}
              className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-2 px-3 border"
              placeholder="0.00"
            />
            <select
              value={inputs.rateType}
              onChange={(e) => handleChange('rateType', e.target.value)}
              className="focus:ring-red-500 focus:border-red-500 border-gray-300 border-l-0 rounded-r-md sm:text-sm py-2 px-3 border bg-gray-50"
            >
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Period */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
          <div className="flex">
            <input
              type="number"
              min="1"
              value={inputs.period}
              onChange={(e) => handleChange('period', parseFloat(e.target.value) || 0)}
              className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-2 px-3 border"
              placeholder="1"
            />
            <select
              value={inputs.periodType}
              onChange={(e) => handleChange('periodType', e.target.value)}
              className="focus:ring-red-500 focus:border-red-500 border-gray-300 border-l-0 rounded-r-md sm:text-sm py-2 px-3 border bg-gray-50"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onCalculate}
          className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded shadow-md transition duration-150 ease-in-out transform hover:-translate-y-0.5"
        >
          Calculate
        </button>
        
        <button
          onClick={onClear}
          className="text-gray-500 hover:text-red-700 font-medium transition duration-150"
        >
          Clear
        </button>
      </div>
    </div>
  );
};