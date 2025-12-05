import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GreetingHeader } from "../components/GreetingHeader";

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1200));

  return (
    <Box
      sx={{
        height: "88px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: "32px" },
      }}
    >
      {isMobile && onMenuClick && (
        <IconButton onClick={onMenuClick} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <GreetingHeader />
    </Box>
  );
};
