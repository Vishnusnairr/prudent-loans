import { Box, Typography } from "@mui/material";

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
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/src/assets/bard-line.svg"
          alt="bar chart"
          style={{ width: 20, height: 20 }}
        />

        <Typography fontSize="16px" fontWeight={600} color="#0F172A">
          Analysed Loans
        </Typography>
      </Box>
    </Box>
  );
};
