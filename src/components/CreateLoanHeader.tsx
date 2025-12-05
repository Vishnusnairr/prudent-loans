import { Box, Typography } from "@mui/material";

export const CreateLoanHeader = () => (
  <Box sx={{ mb: "24px" }}>
    <Typography fontSize={20} fontWeight={500} display="flex" alignItems="center" color="#000" gap="8px">
      <img src="/vip-crown-2-line.svg"/> Create a New Loan
    </Typography>
  </Box>
);
