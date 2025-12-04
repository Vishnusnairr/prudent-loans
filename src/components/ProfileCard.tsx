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
        borderTop:"1px solid #E2E8F0",
        paddingTop:"25px"
      }}
    >
      <Avatar src="/src/assets/Avatar.svg" sx={{ width: 40, height: 40 }} />

      <Box>
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#0F172A",display:"flex" }}>
          Robert Greene <span style={{ color: "#4F46E5" }}><img src="/src/assets/verified-fill.svg"/></span>
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#64748B" }}>
          robert@yourorg.com
        </Typography>
      </Box>
    </Box>
  );
};
