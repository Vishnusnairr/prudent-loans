import { Box, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

export const AnalysedLoansActionsBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "8px",
        padding: "12px 16px",
        mt: "12px",
        mb: "16px",
        boxSizing: "border-box",
      }}
    >
      <TextField
        placeholder="Search loans..."
        size="small"
        sx={{
          width: "260px",
          background: "#F8FAFC",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: "18px", color: "#94A3B8" }} />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            padding: "6px 14px",
            borderColor: "#CBD5E1",
            color: "#0F172A",
            fontWeight: 500,
            "&:hover": { borderColor: "#94A3B8" },
          }}
        >
          See All
        </Button>

        <Button
          variant="outlined"
          startIcon={<FilterListIcon sx={{ fontSize: "20px" }} />}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            padding: "6px 16px",
            borderColor: "#CBD5E1",
            color: "#0F172A",
            fontWeight: 500,
            "&:hover": { borderColor: "#94A3B8" },
          }}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};
