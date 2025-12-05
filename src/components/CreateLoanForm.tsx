import { Box, TextField, Typography, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export const CreateLoanForm = () => {
  const [loanName, setLoanName] = useState("");

  const handleLoanNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value.includes("#")) {
      setLoanName(value);
      return;
    }

    const parts = value.split("#");
    if (parts.length === 2 && /^[0-9]*$/.test(parts[1])) {
      setLoanName(value);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "24px", width: "100%", marginBottom: "30px" }}>
      <Box sx={{ flex: 1 }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Loan Name*
        </Typography>
        <TextField
          fullWidth
          value={loanName}
          onChange={handleLoanNameChange}
          placeholder="eg: Loan name #1234"
          sx={{
            height: "40px",
            "& .MuiInputBase-root": {
              height: "40px",
              borderRadius: "8px",
            },
            "& fieldset": {
              borderRadius: "8px",
              borderColor: "#CBD5E1",
              height: "40px",
            },
            input: {
              padding: "0 12px",
              fontSize: "14px",
              color: "#0F172A",
            },
          }}
        />
      </Box>

      <Box sx={{ width: "260px" }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Income Period
        </Typography>
        <Select fullWidth size="small" defaultValue="12 months" sx={{ borderRadius: "8px" }}>
          <MenuItem value="12 months">12 months</MenuItem>
          <MenuItem value="6 months">6 months</MenuItem>
        </Select>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography fontSize="14px" fontWeight={500} color="#475569" mb="6px">
          Additional Comments
        </Typography>
        <TextField
          fullWidth
          placeholder="Add notes"
          sx={{
            height: "40px",
            "& .MuiInputBase-root": {
              height: "40px",
              borderRadius: "8px",
            },
            "& fieldset": {
              borderRadius: "8px",
              borderColor: "#CBD5E1",
            },
            input: {
              padding: "0 12px",
              fontSize: "14px",
              color: "#0F172A",
            },
          }}
        />
      </Box>
    </Box>
  );
};
