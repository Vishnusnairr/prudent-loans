import { Box, CircularProgress, Typography } from "@mui/material";

import { UploadBannerCard } from "../components/UploadBannerCard";
import { LoanStatsCard } from "../components/LoanStatsCard";
import { NoOfLoansCard } from "../components/NoOfLoansCard";
import { AnalysedLoansHeader } from "../components/AnalysedLoansHeader";
import { AnalysedLoansColumnHeader } from "../components/AnalysedLoansColumnHeader";
import { AnalysedLoansRow } from "../components/AnalysedLoansRow";
import { Pagination } from "../components/Pagination";
import { LoansActionsBar } from "../components/LoansActionsBar";

import { useLoans } from "../hooks/useLoans";
import type { StatusType } from "../data/loanData";
import { useState, useMemo } from "react";

export const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusType | "All">("All");
  const [page, setPage] = useState(1);
  const [seeAll, setSeeAll] = useState(false);
  const [perPage, setPerPage] = useState(5);

  const { data: loans = [], isLoading, isError } = useLoans(search);

  const filtered = useMemo(() => {
    return statusFilter === "All"
      ? loans
      : loans.filter((l) => l.status === statusFilter);
  }, [loans, statusFilter]);

  const start = seeAll ? 0 : (page - 1) * perPage;
  const displayedLoans = seeAll ? filtered : filtered.slice(start, start + perPage);

  return (
    <Box sx={{ width: "100%", p: "32px" }}>

      <Box sx={{ display: "flex", gap: "24px", mb: "32px", width: "100%" }}>
        <Box sx={{ width: "480px" }}><UploadBannerCard /></Box>
        <Box sx={{ width: "500px" }}><LoanStatsCard /></Box>
        <Box sx={{ width: "280px" }}><NoOfLoansCard /></Box>
      </Box>

      <Box sx={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "12px" }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "24px",
            py: "18px",
          }}
        >
          <AnalysedLoansHeader />
          <LoansActionsBar
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            seeAll={seeAll}
            setSeeAll={setSeeAll}
            setPage={setPage}
          />
        </Box>

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

        {!isLoading && displayedLoans.map((loan) => <AnalysedLoansRow key={loan.id} {...loan} />)}

        {!seeAll && (
          <Pagination
            total={filtered.length}
            perPage={perPage}
            page={page}
            setPage={setPage}
            setPerPage={setPerPage}
          />
        )}
      </Box>
    </Box>
  );
};
