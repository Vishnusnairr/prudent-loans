import { Box, Typography } from "@mui/material";

export const PrudentLiteBox = () => {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        borderRadius: 3,
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
      }}
    >
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#0F172A", mb: .5 }}>
        Still using Prudent AI Lite?
      </Typography>
      <Typography sx={{ fontSize: 13, color: "#475569", mb: 1 }}>
        You can do a lot more
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "#4F46E5",
          cursor: "pointer",
        }}
      >
        Contact Admin
      </Typography>
    </Box>
  );
};
