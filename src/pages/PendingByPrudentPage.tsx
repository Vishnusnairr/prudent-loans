import { Box, Typography } from "@mui/material";
import { useState } from "react";

export const PendingByPrudentPage = () => {
  const [items] = useState([
    { id: 20221, status: "Review in progress" },
  ]);

  return (
    <Box sx={{ width: "100%",  boxSizing: "border-box" }}>
      <Typography
        fontSize="22px"
        fontWeight={600}
        mb={2}
        color="#0F172A"              
      >
        Pending by Prudent AI
      </Typography>

      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: "16px",
            borderRadius: "12px",
            border: "1px solid #E2E8F0",
            mb: "12px",
            background: "#FFFFFF",   
          }}
        >
          <Typography fontWeight={500} color="#0F172A">
            Loan #{item.id}
          </Typography>

          <Typography fontSize="14px" color="#64748B">
            {item.status}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
