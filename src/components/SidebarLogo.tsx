import { Box, Typography } from "@mui/material";

export const SidebarLogo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px",height:"62px" ,paddingBottom:"1px",paddingTop:"9px",borderBottom:"1px solid #E2E8F0",marginBottom:"10px"}}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img 
          src="/logo.png" 
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
