import type { Loan } from "../types/loan";

export const mockLoans: Loan[] = [
  {
    id: "98765",
    applicantName: "Loan #98765",
    dateStr: "10-15-2023",
    statementPeriod: 24,
    qualifiedIncome: 3210.98,
    status: "Proceed with caution",
  },
  {
    id: "98764",
    applicantName: "Loan #98764",
    dateStr: "11-20-2023",
    statementPeriod: 12,
    qualifiedIncome: 0,
    status: "Action Required",
  },
  {
    id: "98763",
    applicantName: "Loan #98763",
    dateStr: "12-25-2023",
    statementPeriod: 8,
    qualifiedIncome: 3000.25,
    status: "Batch Processed",
  },
  {
    id: "98762",
    applicantName: "Loan #98762",
    dateStr: "01-30-2024",
    statementPeriod: 12,
    qualifiedIncome: 2900.1,
    status: "Batch Processed",
  },
];
