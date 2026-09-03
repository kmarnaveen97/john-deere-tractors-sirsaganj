/** Reducing-balance EMI, the basis every tractor lender in this market quotes on. */
export function calculateEmi(principal: number, annualRatePercent: number, months: number) {
  if (principal <= 0 || months <= 0) return { emi: 0, totalPayable: 0, totalInterest: 0 };

  const monthlyRate = annualRatePercent / 12 / 100;

  // A zero-interest scheme is a plain division, not the compounding formula.
  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalPayable: principal, totalInterest: 0 };
  }

  const growth = Math.pow(1 + monthlyRate, months);
  const emi = (principal * monthlyRate * growth) / (growth - 1);
  const totalPayable = emi * months;

  return { emi, totalPayable, totalInterest: totalPayable - principal };
}

/** Indian digit grouping — 12,34,567 rather than 1,234,567. */
export function formatRupees(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value));
}

export function formatLakh(value: number) {
  return `₹${(value / 100000).toFixed(2)} लाख`;
}
