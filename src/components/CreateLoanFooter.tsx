import { Box, Button } from "@mui/material";

export const CreateLoanFooter = () => (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "32px", gap: "12px" }}>
    <Button variant="text">Cancel</Button>
    <Button variant="contained" sx={{ background: "#6366F1" }}>
      Create New Loan
    </Button>
  </Box>
);
