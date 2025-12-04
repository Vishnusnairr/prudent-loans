import { Box, Typography } from "@mui/material";
import { useState } from "react";

export const PendingActionsPage = () => {
  const [pending] = useState([
    { id: 10111, reason: "Upload missing statements" },
    { id: 10112, reason: "Verify income period selection" },
    { id: 10113, reason: "Re-upload corrupted file" },
    { id: 10114, reason: "Review salary slips" },
    { id: 10115, reason: "Fix incorrect income period" },
    { id: 10116, reason: "Clarify business revenue details" },
  ]);

  return (
    <Box sx={{ width: "100%",  boxSizing: "border-box" }}>
      <Typography
        fontSize="22px"
        fontWeight={600}
        mb={2}
        color="#0F172A"
      >
        My Pending Actions
      </Typography>

      {pending.map((item) => (
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
            {item.reason}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
