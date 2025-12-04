import { Box, TextField, Typography, Select, MenuItem } from "@mui/material";

export const CreateLoanForm = () => {
  return (
    <Box sx={{ display: "flex", gap: "24px", width: "100%" }}>
      <Box sx={{ flex: 1 }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Loan Name*
        </Typography>
        <TextField
          fullWidth
          placeholder="eg: Loan name #1234"
          sx={{
            "& fieldset": { borderRadius: "8px", borderColor: "#CBD5E1" },
          }}
        />
      </Box>

      <Box sx={{ width: "260px" }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Income Period
        </Typography>
        <Select
          fullWidth
          size="small"
          defaultValue="12 months"
          sx={{ borderRadius: "8px" }}
        >
          <MenuItem value="12 months">12 months</MenuItem>
          <MenuItem value="6 months">6 months</MenuItem>
        </Select>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Additional Comments
        </Typography>
        <TextField fullWidth placeholder="Add notes" />
      </Box>
    </Box>
  );
};
