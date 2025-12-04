import { Box, Typography } from "@mui/material";
import { useState } from "react";

export const AllLoansPage = () => {
  const [loans] = useState([
    { id: 98765, date: "10-15-2023", status: "Proceed with Caution" },
    { id: 98764, date: "11-20-2023", status: "Action Required" },
  ]);

  return (
    <Box sx={{ width: "100%",  boxSizing: "border-box" }}>
      <Typography
        fontSize="22px"
        fontWeight={600}
        mb={2}
        color="#0F172A"
      >
        All Loans
      </Typography>

      {loans.map((loan) => (
        <Box
          key={loan.id}
          sx={{
            p: "16px",
            borderRadius: "12px",
            border: "1px solid #E2E8F0",
            mb: "12px",
            background: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography fontWeight={500} color="#0F172A">
            Loan #{loan.id}
          </Typography>

          <Typography fontSize="14px" color="#64748B">
            {loan.date}
          </Typography>

          <Typography
            fontSize="14px"
            fontWeight={500}
            color={
              loan.status === "Action Required"
                ? "#D92D20"
                : loan.status === "Proceed with Caution"
                ? "#DC6803"
                : "#039855"
            }
          >
            {loan.status}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
