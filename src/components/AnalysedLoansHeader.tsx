import { Box, Typography} from "@mui/material";

export const AnalysedLoansHeader = () => {
  return (
    <Box
      sx={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography fontSize="16px" fontWeight={600} color="#0F172A">
          Analysed Loans
        </Typography>
      </Box>
    </Box>
  );
};
