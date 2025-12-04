// src/components/CreateLoanFooter.tsx
import { Box, Button } from "@mui/material";

type Props = {
  onCreate: () => void;
};

export const CreateLoanFooter = ({ onCreate }: Props) => (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "32px", gap: "12px" }}>
    <Button variant="text">Cancel</Button>

    <Button
      variant="contained"
      sx={{ background: "#6366F1", textTransform: "none", height: 40 }}
      onClick={onCreate}
    >
      Create New Loan
    </Button>
  </Box>
);
