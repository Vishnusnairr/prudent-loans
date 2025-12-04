import { useQuery } from "@tanstack/react-query";
import { getLoans } from "../services/api";
import type { LoanRowData } from "../data/loanData";

export const useLoans = (searchQuery: string) =>
  useQuery<LoanRowData[], Error>({
    queryKey: ["loans", searchQuery],
    queryFn: () => getLoans(searchQuery),
    placeholderData: [],
    refetchOnWindowFocus: false,
  });
