import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const GreetingHeader = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {  md: "row" },      
        alignItems: { xs: "flex-start", md: "center" },
        width: "100%",
        mt: { xs: 1.5, md: 0 },                          
        gap: { xs: 1.5, md: 0 },
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          mt: { xs: "10px", md: 0 },     
        }}
      >
        <img
          src="/flashlight-line.svg"
          alt="quick-icon"
          width={20}
          height={20}
          style={{ cursor: "pointer" }}
        />

        <img
          src="/notification-3-line.svg"
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
