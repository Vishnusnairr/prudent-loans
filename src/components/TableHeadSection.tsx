import { Box, Typography } from "@mui/material";

export const TableHeadSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 40px",
        alignItems: "center",
        height: "48px",
        px: "24px",
      }}
    >
      <Typography fontSize="13px" fontWeight="500" color="#64748B">Loan Name</Typography>
      <Typography fontSize="13px" fontWeight="500" color="#64748B">Statement Period</Typography>
      <Typography fontSize="13px" fontWeight="500" color="#64748B">Qualified Income</Typography>
      <Typography fontSize="13px" fontWeight="500" color="#64748B">Status</Typography>
      <Typography fontSize="13px" fontWeight="500" color="#64748B">Actions</Typography>
      <Box /> 
    </Box>
  );
};
