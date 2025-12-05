import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

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
  const isMobile = useMediaQuery("(max-width:1200px)");
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
    <Box sx={{ width: "100%" }}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "24px",
          mb: "32px",
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: { xs: "95vw", lg: "460px" }, width: "100%" }}>
          <UploadBannerCard />
        </Box>

        <Box sx={{ maxWidth: { xs: "95vw", lg: "100%" }, width: "100%" }}>
          <LoanStatsCard />
        </Box>

        <Box sx={{ maxWidth: { xs: "95vw", lg: "260px" }, width: "100%" }}>
          <NoOfLoansCard />
        </Box>
      </Box>

      <Box
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          maxWidth: "95vw",
          width: "100%",
        }}
      >

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 0 },
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

        {!isMobile && <AnalysedLoansColumnHeader />}

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

        {!isLoading && filtered.length === 0 && (
          <Typography py={4} textAlign="center" color="#64748B" fontSize="14px">
            No results found.
          </Typography>
        )}

        {!isLoading && displayedLoans.map((loan) => (
          <AnalysedLoansRow key={loan.id} {...loan} />
        ))}

        {!seeAll && filtered.length > perPage && (
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
