import { Box, TextField, Typography, MenuItem, Select, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { StatusType } from "../data/loanData";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  statusFilter: StatusType | "All";
  setStatusFilter: (v: StatusType | "All") => void;
  seeAll: boolean;
  setSeeAll: (v: boolean) => void;
  setPage: (n: number) => void;
};

export const LoansActionsBar = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  seeAll,
  setSeeAll,
  setPage,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent:"flex-end",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "100%", lg: 260 },
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
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          InputProps={{ disableUnderline: true, style: { fontSize: 14 } }}
          fullWidth
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width: { xs: "100%", md: "100%", lg: "auto" },
          justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-end" },
        }}
      >
        <Button
          variant="text"
          sx={{
            height: 40,
            flexGrow: { xs: 1, md: 1, lg: 0 },
            borderRadius: "8px",
            border: "1px solid #E2E8F0",
            fontSize: "14px",
            textTransform: "none",whiteSpace: "nowrap",
            color: "#0F172A",
          }}
          onClick={() => setSeeAll(!seeAll)}
        >
          {seeAll ? "Collapse" : "See All"}
        </Button>

        <Select
          size="small"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as any);
            setPage(1);
          }}
          displayEmpty
          sx={{
            height: 40,
            flexGrow: { xs: 1, md: 1, lg: 0 },
            borderRadius: "8px",
            fontSize: "14px",
            minWidth: { xs: "auto", md: "auto", lg: 120 },
            px: "10px",
            "& fieldset": { border: "1px solid #E2E8F0" },
            ".MuiSelect-icon": { color: "#475569" },
            display: "flex",
            alignItems: "center"
          }}
          renderValue={() => (
            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <img src="/src/assets/filter-line.svg" alt="filter" />
              <span>Filter</span>
            </Box>
          )}
        >
          <MenuItem value="All">All Status</MenuItem>
          <MenuItem value="Proceed with Caution">Proceed with caution</MenuItem>
          <MenuItem value="Action Required">Action Required</MenuItem>
          <MenuItem value="Batch Processed">Batch Processed</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};
