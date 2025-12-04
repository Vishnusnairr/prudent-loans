import { Box } from "@mui/material";
import { GreetingHeader } from "../components/GreetingHeader";

export const TopBar = () => {
  return (
    <Box
      sx={{
        height: "88px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        px: "32px",
      }}
    >
      <GreetingHeader />
    </Box>
  );
};
