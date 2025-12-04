import type { LoanRowData, LoanQuery, LoanResponse } from "../types/LoanTypes";
import { analysedLoansData } from "../data/loanData";

export const fetchLoans = async (query: LoanQuery): Promise<LoanResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...analysedLoansData];

      if (query.search) {
        result = result.filter((item) =>
          item.loanName.toLowerCase().includes(query.search.toLowerCase())
        );
      }

      if (query.sort.field === "income") {
        result.sort((a, b) =>
          query.sort.order === "asc"
            ? parseFloat(a.qualifiedIncome.replace(/[$,]/g, "")) -
              parseFloat(b.qualifiedIncome.replace(/[$,]/g, ""))
            : parseFloat(b.qualifiedIncome.replace(/[$,]/g, "")) -
              parseFloat(a.qualifiedIncome.replace(/[$,]/g, ""))
        );
      }

      const start = (query.page - 1) * query.pageSize;
      const paginatedItems = result.slice(start, start + query.pageSize);

      resolve({
        items: paginatedItems,
        totalPages: Math.ceil(result.length / query.pageSize),
      });
    }, 500);
  });
};
