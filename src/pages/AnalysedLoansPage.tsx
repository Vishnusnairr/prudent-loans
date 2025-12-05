import { Box, CircularProgress, Typography } from "@mui/material";
import { useState, useMemo } from "react";

import { useLoans } from "../hooks/useLoans";
import type { StatusType } from "../data/loanData";

import { AnalysedLoansColumnHeader } from "../components/AnalysedLoansColumnHeader";
import { AnalysedLoansRow } from "../components/AnalysedLoansRow";
import { Pagination } from "../components/Pagination";
import { LoansActionsBar } from "../components/LoansActionsBar";

export const AnalysedLoansPage = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState<StatusType | "All">("All");
  const [search, setSearch] = useState("");
  const [seeAll, setSeeAll] = useState(false);

  const { data: loans = [], isLoading, isError } = useLoans(search);

  const filtered = useMemo(() => {
    return statusFilter === "All"
      ? loans
      : loans.filter((l) => l.status === statusFilter);
  }, [loans, statusFilter]);

  const start = (page - 1) * perPage;
  const displayedLoans = seeAll ? filtered : filtered.slice(start, start + perPage);

  return (
    <Box sx={{  width: "100%" }}>
      <Typography
        fontSize="20px"
        fontWeight={600}
        color="#0F172A"
        sx={{ mb: "16px" }}
      >
        Analysed Loans
      </Typography>

      <LoansActionsBar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        seeAll={seeAll}
        setSeeAll={setSeeAll}
        setPage={setPage}
      />

      <Box
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <AnalysedLoansColumnHeader />

        {isLoading && (
          <Box py={4} display="flex" justifyContent="center">
            <CircularProgress size={28} />
          </Box>
        )}

        {isError && (
          <Typography py={3} textAlign="center" color="error">
            Failed to load loans.
          </Typography>
        )}

        {!isLoading &&
          displayedLoans.map((loan) => (
            <AnalysedLoansRow key={loan.id} {...loan} />
          ))}

        <Pagination
          total={filtered.length}
          perPage={perPage}
          page={page}
          setPage={setPage}
          setPerPage={setPerPage}
        />
      </Box>
    </Box>
  );
};
