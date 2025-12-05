import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const GreetingHeader = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
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

      <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img
          src="/src/assets/flashlight-line.svg"
          alt="quick-icon"
          width={20}
          height={20}
          style={{ cursor: "pointer" }}
        />

        <img
          src="/src/assets/notification-3-line.svg"
          alt="notification-icon"
          width={20}
          height={20}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/notifications")}
        />
      </Box>
    </Box>
  );
};
