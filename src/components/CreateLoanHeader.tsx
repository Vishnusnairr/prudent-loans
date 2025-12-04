import { Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

export const CreateLoanHeader = () => (
  <Box sx={{ mb: "24px" }}>
    <Typography fontSize={20} fontWeight={600} display="flex" alignItems="center" gap="8px">
      <CreateIcon sx={{ fontSize: 20 }} /> Create a New Loan
    </Typography>
  </Box>
);
