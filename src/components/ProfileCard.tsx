import { Avatar, Box, Typography } from "@mui/material";

export const ProfileCard = () => {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
        p: 1,
      }}
    >
      <Avatar src="/assets/user.png" sx={{ width: 40, height: 40 }} />

      <Box>
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>
          Robert Greene <span style={{ color: "#4F46E5" }}>✔</span>
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#64748B" }}>
          robert@yourorg.com
        </Typography>
      </Box>
    </Box>
  );
};
