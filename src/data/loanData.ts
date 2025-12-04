export type StatusType =
  | "Proceed with Caution"
  | "Action Required"
  | "Batch Processed";

export type ButtonType = "details" | "detailsRed" | "analysis";

export interface LoanRowData {
  id: string;              
  loanName: string;        
  loanId: string;          
  date: string;            
  statementPeriod: number; 
  qualifiedIncome: string; 
  status: StatusType;
  avatarColor: string;
  buttonType: ButtonType;
}

export const analysedLoansData: LoanRowData[] = [
  {
    id: "98765",
    loanName: "Loan #98765",
    loanId: "9876",
    date: "10-15-2023",
    statementPeriod: 24,
    qualifiedIncome: "$3210.98",
    status: "Proceed with Caution",
    avatarColor: "#A78BFA",
    buttonType: "details",
  },
  {
    id: "98764",
    loanName: "Loan #98764",
    loanId: "9877",
    date: "11-20-2023",
    statementPeriod: 12,
    qualifiedIncome: "Nil",
    status: "Action Required",
    avatarColor: "#86EFAC",
    buttonType: "detailsRed",
  },
  {
    id: "98763",
    loanName: "Loan #98763",
    loanId: "9878",
    date: "12-25-2023",
    statementPeriod: 8,
    qualifiedIncome: "$3000.25",
    status: "Batch Processed",
    avatarColor: "#93C5FD",
    buttonType: "analysis",
  },
  {
    id: "98762",
    loanName: "Loan #98762",
    loanId: "9879",
    date: "01-30-2024",
    statementPeriod: 12,
    qualifiedIncome: "$2900.10",
    status: "Batch Processed",
    avatarColor: "#FDE68A",
    buttonType: "analysis",
  },
  {
    id: "98761",
    loanName: "Loan #98761",
    loanId: "9880",
    date: "03-05-2024",
    statementPeriod: 15,
    qualifiedIncome: "$2800.75",
    status: "Proceed with Caution",
    avatarColor: "#F99CA2",
    buttonType: "details",
  },
];
