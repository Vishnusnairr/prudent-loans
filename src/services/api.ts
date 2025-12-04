

import { analysedLoansData } from "../data/loanData";
import type { LoanRowData } from "../data/loanData";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getLoans = async (searchQuery = ""): Promise<LoanRowData[]> => {
  await delay(500);

  const q = searchQuery.toLowerCase().trim();
  if (!q) return analysedLoansData;

  return analysedLoansData.filter((loan) => {
    const nameMatch = loan.loanName.toLowerCase().includes(q);
    const idMatch = loan.loanId.toLowerCase().includes(q) || loan.id.toLowerCase().includes(q);
    return nameMatch || idMatch;
  });
};

