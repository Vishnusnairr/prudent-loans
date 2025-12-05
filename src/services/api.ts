

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

export const createLoan = async (payload: { files: File[]; loanName: string }): Promise<void> => {
  await delay(9000); 
  const newLoan: LoanRowData = {
    id: `${Date.now()}`,
    loanName: payload.loanName,
    loanId: `${Date.now()}`,
    date: new Date().toLocaleDateString(),
    statementPeriod: 12,
    qualifiedIncome: "$0.00",
    status: "Batch Processed",
    avatarColor: "#93C5FD",
    buttonType: "analysis",
  };
  analysedLoansData.unshift(newLoan);
};

