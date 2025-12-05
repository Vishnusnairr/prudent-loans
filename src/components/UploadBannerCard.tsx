import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const UploadBannerCard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: { xs: 120, md: 137 },
        borderRadius: "12px",
        background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
        p: { xs: 2, md: 3 },
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
        onClick={() => navigate("/create-loan")}
      >
        Create New Loan &nbsp; <img src="/src/assets/arrow-right-fill.svg" />
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
