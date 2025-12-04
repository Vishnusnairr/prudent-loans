export type LoanStatus =
  | "Proceed with caution"
  | "Action Required"
  | "Batch Processed";

export interface Loan {
  id: string;
  applicantName: string;
  dateStr: string;
  statementPeriod: number;
  qualifiedIncome: number;
  status: LoanStatus;
}
