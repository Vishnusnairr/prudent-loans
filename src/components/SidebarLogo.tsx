import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png"; 

export const SidebarLogo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px",height:"62px" ,paddingTop:"8px",borderBottom:"2px solid #c9caccff"}}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img 
          src={logo} 
          alt="Prudent AI Logo" 
          style={{ width: "140px", height: "auto" }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#64748B",
          marginLeft: "4px", 
        }}
      >
        Income Intelligence Platform
      </Typography>
    </Box>
  );
};
