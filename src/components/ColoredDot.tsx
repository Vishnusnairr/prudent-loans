import { Box } from "@mui/material";

export const ColoredDot = ({ color }: { color: string }) => (
  <Box
    sx={{
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: color,
    }}
  />
);
