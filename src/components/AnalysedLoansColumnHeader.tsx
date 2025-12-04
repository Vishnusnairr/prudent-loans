import { Box, Typography } from "@mui/material";

export const AnalysedLoansColumnHeader = () => {
  return (
    <Box
      sx={{
        height: "48px",
        borderRadius:"10px",
        m:"0 20px",
        display: "grid",
        gridTemplateColumns: "2.5fr 1fr 1fr 1.3fr 1.3fr 40px",
        alignItems: "center",
        px: "24px",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Typography fontSize="14px" fontWeight={500} color="#525866">
        Loan Name
      </Typography>
      <Typography fontSize="14px" textAlign="center" fontWeight={500} color="#525866">
        Statement Period
      </Typography>
      <Typography fontSize="14px" textAlign="center" fontWeight={500} color="#525866">
        Qualified Income
      </Typography>
      <Typography fontSize="14px" textAlign="center" fontWeight={500} color="#525866">
        Status
      </Typography>
      <Typography textAlign="center" fontSize="14px" fontWeight={500} color="#525866">
        Actions
      </Typography>
      <Box />
    </Box>
  );
};
