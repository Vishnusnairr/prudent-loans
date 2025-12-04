import { Box, Typography } from "@mui/material";

export const GreetingHeader = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        fontSize="20px"
        fontWeight={600}
        color="#0F172A"
        sx={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        Hi, Robert Greene 
      </Typography>

      <Typography fontSize="14px" color="#64748B" mt="4px">
        Welcome to Income Intelligence Platform 👋🏻
      </Typography>
    </Box>
  );
};
