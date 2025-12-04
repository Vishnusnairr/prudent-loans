import {
  Box,
  Divider,
  CircularProgress,
  Typography,
  TextField,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { UploadBannerCard } from "../components/UploadBannerCard";
import { LoanStatsCard } from "../components/LoanStatsCard";
import { NoOfLoansCard } from "../components/NoOfLoansCard";
import { AnalysedLoansHeader } from "../components/AnalysedLoansHeader";
import { AnalysedLoansColumnHeader } from "../components/AnalysedLoansColumnHeader";
import { AnalysedLoansRow } from "../components/AnalysedLoansRow";

import { useLoans } from "../hooks/useLoans";
import type { StatusType } from "../data/loanData";
import { useState } from "react";

export const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusType | "All">("All");
  const { data: loans = [], isLoading, isError } = useLoans(search);

  const filtered = loans.filter((loan) =>
    statusFilter === "All" ? true : loan.status === statusFilter
  );

  return (
    <Box sx={{ width: "100%", p: "32px", boxSizing: "border-box" }}>
      <Box sx={{ display: "flex", gap: "24px", mb: "32px", width: "100%" }}>
        <Box sx={{ width: "480px" }}><UploadBannerCard /></Box>
        <Box sx={{ width: "500px" }}><LoanStatsCard /></Box>
        <Box sx={{ width: "280px" }}><NoOfLoansCard /></Box>
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: "24px",
            py: "18px",
            alignItems: "center",
          }}
        >
          <AnalysedLoansHeader />

          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 260,
                height: 40,
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                px: "10px",
              }}
            >
              <SearchIcon sx={{ fontSize: 18, color: "#64748B", mr: 1 }} />
              <TextField
                variant="standard"
                placeholder="Search loans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{ disableUnderline: true, style: { fontSize: 14 } }}
                fullWidth
              />
            </Box>

            <IconButton
              sx={{
                width: 40, height: 40,
                border: "1px solid #E2E8F0", borderRadius: "8px",
              }}
            >
              <TuneIcon />
            </IconButton>

            <Select
              size="small"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              sx={{ height: 40, borderRadius: "8px" }}
            >
              <MenuItem value="All">All Status</MenuItem>
              <MenuItem value="Proceed with Caution">Proceed with caution</MenuItem>
              <MenuItem value="Action Required">Action Required</MenuItem>
              <MenuItem value="Batch Processed">Batch Processed</MenuItem>
            </Select>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#E2E8F0" }} />

        <AnalysedLoansColumnHeader />
        <Divider sx={{ borderColor: "#E2E8F0" }} />

        {isLoading && (
          <Box py={4} display="flex" justifyContent="center">
            <CircularProgress size={28} />
          </Box>
        )}

        {isError && <Typography textAlign="center">Error loading</Typography>}

        {!isLoading &&
          filtered.map((loan) => (
            <AnalysedLoansRow key={loan.id} {...loan} />
          ))}
      </Box>
    </Box>
  );
};
