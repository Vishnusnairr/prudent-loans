import { Box, Typography, Button } from "@mui/material";

export const UploadBannerCard = () => {
  return (
    <Box
      sx={{
        height: 137,
        borderRadius: "12px",
        background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      <Typography fontSize={16} fontWeight={500} lineHeight="22px">
        Upload Bank Statements, Tax Forms <br /> and more
      </Typography>

      <Button
        variant="contained"
        sx={{
          alignSelf: "flex-start",
          background: "linear-gradient(90deg,#0f0f0f,#1a1a1a)",
          borderRadius: "8px",
          fontSize: 13,
          textTransform: "none",
          px: 2.5,
          py: 1,
          "&:hover": { background: "#111" },
        }}
      >
        Create New Loan →
      </Button>

      <img
        src="/circles.svg"
        alt="decor"
        style={{
          position: "absolute",
          bottom: "-110px",
          right: "-110px",
          width: "200px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </Box>
  );
};
