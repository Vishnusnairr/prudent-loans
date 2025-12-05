import { Box, Typography } from "@mui/material";

export const ProfilePage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#000", mb: 2 }}>
        Profile
      </Typography>

      <Typography sx={{ fontSize: 16, color: "#334155", mb: 1 }}>
        Name: Robert Greene
      </Typography>

      <Typography sx={{ fontSize: 16, color: "#334155", mb: 1 }}>
        Email: robert@yourorg.com
      </Typography>

      <Typography sx={{ fontSize: 16, color: "#334155", mb: 1 }}>
        Phone: +91 98765 43210
      </Typography>

      <Typography sx={{ fontSize: 16, color: "#334155" }}>
        Address: 221B Baker Street, London, UK
      </Typography>
    </Box>
  );
};
