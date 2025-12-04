import { Box, Typography, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const NoOfLoansCard = () => {
  const [filter, setFilter] = useState("This week");

  return (
    <Box
      sx={{
        height: "184px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          fontSize="14px"
          fontWeight="500"
          color="#0F172A"
          sx={{ opacity: 0.7 }}
        >
          No of Loans
        </Typography>

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          sx={{
            fontSize: "12px",
            height: "32px",
            borderRadius: "8px",
            background: "#F8FAFC",
            "& fieldset": { border: "1px solid #E2E8F0" },
            ".MuiSelect-select": { padding: "4px 12px" },
          }}
        >
          <MenuItem value="This week">This week</MenuItem>
          <MenuItem value="Last week">Last week</MenuItem>
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="Last month">Last month</MenuItem>
          <MenuItem value="This quarter">This quarter</MenuItem>
          <MenuItem value="This year">This year</MenuItem>
        </Select>
      </Box>

      <Typography fontSize="32px" fontWeight="600" color="#0F172A" mt="8px">
        28
      </Typography>

      <Box>
        <Box
  sx={{
    background: "#FEE2E2",
    color: "#DC2626",
    borderRadius: "999px",
    px: "8px",
    py: "2px",
    fontSize: "12px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  -2%
</Box>
      </Box>
    </Box>
  );
};
