import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/profile")}
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        p: 1,
        borderTop: "1px solid #E2E8F0",
        paddingTop: "25px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src="/Avatar.svg" sx={{ width: 40, height: 40 }} />

        <Box>
          <Typography
            sx={{ fontSize: 15, fontWeight: 600, color: "#0F172A", display: "flex", alignItems: "center", gap: "4px" }}
          >
            Robert Greene
            <img src="/verified-fill.svg" />
          </Typography>

          <Typography sx={{ fontSize: 13, color: "#64748B" }}>
            robert@gmail.com
          </Typography>
        </Box>
      </Box>

      <img src="/arrow_right.svg" style={{ width: 20, height: 20 }} />
    </Box>
  );
};

