import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const NeedSupportCard = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        borderRadius: "12px",
        backgroundColor: "#F8FAFC",
        border: "1px solid #E2E8F0",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "6px"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "unset", gap: "8px",justifyContent:"center" }}>
           <span style={{ fontSize: "18px" }}><img src="/src/assets/customer-service.svg" /></span> 
          <Typography sx={{ fontSize: "15px", fontWeight: 600, color: "#0F172A" }}>
            Need Support
          </Typography>
        </Box>

        <IconButton size="small" onClick={() => setVisible(false)}>
          <CloseIcon sx={{ fontSize: 18, color: "#94A3B8" }} />
        </IconButton>
      </Box>

      <Typography sx={{ fontSize: "13px", color: "#475569" }}>
        Trouble processing any of the loans? Get assistance here
      </Typography>
    </Box>
  );
};
