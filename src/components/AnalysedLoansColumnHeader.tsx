import { Box, Typography } from "@mui/material";

export const AnalysedLoansColumnHeader = () => {
  return (
    <Box
      sx={{
        height: "48px",
        display: "grid",
        gridTemplateColumns: "2.5fr 1fr 1fr 1.3fr 1.3fr 40px",
        alignItems: "center",
        px: "24px",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Typography fontSize="12px" fontWeight={500} color="#6B7280">
        Loan Name
      </Typography>
      <Typography fontSize="12px" textAlign="center" fontWeight={500} color="#6B7280">
        Statement Period
      </Typography>
      <Typography fontSize="12px" textAlign="center" fontWeight={500} color="#6B7280">
        Qualified Income
      </Typography>
      <Typography fontSize="12px" textAlign="center" fontWeight={500} color="#6B7280">
        Status
      </Typography>
      <Typography textAlign="center" fontSize="12px" fontWeight={500} color="#6B7280">
        Actions
      </Typography>
      <Box />
    </Box>
  );
};
