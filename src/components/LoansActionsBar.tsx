import { Box, TextField, Typography, MenuItem, Select, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
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
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          InputProps={{ disableUnderline: true, style: { fontSize: 14 } }}
          fullWidth
        />
      </Box>

      <Button
        variant="text"
        sx={{
          height: 40,
          width: 90,
          borderRadius: "8px",
          border: "1px solid #E2E8F0",
          fontSize: "14px",
          textTransform: "none",
          color: "#0F172A"
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
          borderRadius: "8px",
          fontSize: "14px",
          minWidth: 120,
          px: "10px",
          "& fieldset": { border: "1px solid #E2E8F0" },
          ".MuiSelect-icon": { color: "#475569" },
          display: "flex",
          alignItems: "center",
        }}
        renderValue={() => (
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <FilterListIcon sx={{ fontSize: 18, color: "#475569" }} />
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
  );
};
