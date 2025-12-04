import { Box, Typography, MenuItem, Select } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";

export const NoOfLoansCard = () => {
  const [filter, setFilter] = useState("This week");
  const [count, setCount] = useState(28);
  const [change, setChange] = useState(-2);

  const handleFilterChange = (val: string) => {
    setFilter(val);
    setCount(Math.floor(Math.random() * 60) + 10);
    setChange(Math.floor(Math.random() * 10) - 5);
  };

  return (
    <Box
      sx={{
        height: "184px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ px: "20px", pt: "18px", pb: "14px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap="6px">
            <BarChartIcon sx={{ fontSize: 18, color: "#0F172A" }} />
            <Typography fontSize="14px" fontWeight="500" color="#0F172A">
              No of Loans
            </Typography>
          </Box>

          <Select
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
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

        <Box
          sx={{
            borderBottom: "1px solid #E2E8F0",
            mt: "12px",
          }}
        />
      </Box>

      <Box sx={{ px: "20px", pb: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography fontSize="32px" fontWeight="600" color="#0F172A">
          {count}
        </Typography>

        <Box
          sx={{
            px: "8px",
            py: "2px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 600,
            background: change < 0 ? "#FEE2E2" : "#DCFCE7",
            color: change < 0 ? "#DC2626" : "#16A34A",
          }}
        >
          {change > 0 ? `+${change}%` : `${change}%`}
        </Box>
      </Box>
    </Box>
  );
};
