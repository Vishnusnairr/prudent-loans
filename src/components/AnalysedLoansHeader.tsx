import { Box, Typography, useMediaQuery } from "@mui/material";

export const AnalysedLoansHeader = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      sx={{
        padding: { xs: "12px 16px", md: "16px 24px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, 
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        gap: { xs: "8px", md: 0 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <img
          src="/bard-line.svg"
          alt="bar chart"
          style={{
            width: isMobile ? 18 : 20,
            height: isMobile ? 18 : 20,
          }}
        />

        <Typography
          fontSize={{ xs: "15px", md: "16px" }}
          fontWeight={600}
          color="#0F172A"
          textAlign="left"
        >
          Analysed Loans
        </Typography>
      </Box>
    </Box>
  );
};
