import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarLogo } from "../components/SidebarLogo";
import { SidebarItem } from "../components/SidebarItem";
import { ActiveTickets } from "../components/ActiveTickets";
import { NeedSupportCard } from "../components/NeedSupportCard";
import { PrudentLiteBox } from "../components/PrudentLiteBox";
import { ProfileCard } from "../components/ProfileCard";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const tickets = ["#PR013034", "#PR0130456"];

  const defaultMenu = [
    { label: "Dashboard", icon: "/src/assets/layout_grid_1.svg", arrow: true, to: "/" },
    { label: "Create New Loan", icon: "/src/assets/layout_grid_2.svg", to: "/create-loan" },
    { label: "Analysed Loans", icon: "/src/assets/layout_grid_3.svg", to: "/analysed-loans" },
    { label: "Requests", icon: "/src/assets/layout_grid_4.svg", to: "/requests" },
    { label: "Documents", icon: "/src/assets/layout_grid_5.svg", to: "/documents" },
  ];

  const secondaryMenu = [
    { label: "Dashboard", icon: "/src/assets/layout_grid_1.svg", arrow: true, to: "/" },
    { label: "Create New Loan", icon: "/src/assets/layout_grid_2.svg", to: "/create-loan" },
    { label: "All Loans", icon: "/src/assets/layout_grid_3.svg", to: "/all-loans", badge: 2 },
    { label: "My Pending Actions", icon: "/src/assets/layout_grid_4.svg", to: "/pending-actions", badge: 6 },
    { label: "Pending by Prudent AI", icon: "/src/assets/layout_grid_5.svg", to: "/pending-ai", badge: 1 },
  ];

  const insideLoanFlow =
    pathname.startsWith("/create-loan") ||
    pathname.startsWith("/all-loans") ||
    pathname.startsWith("/pending-actions") ||
    pathname.startsWith("/pending-ai");

  const menuToShow = insideLoanFlow ? secondaryMenu : defaultMenu;

  return (
    <Box
      sx={{
        width: "272px",
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        p: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
        <SidebarLogo />

        {menuToShow.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            arrow={item.arrow}
            active={pathname === item.to}
            to={item.to}
            badge={insideLoanFlow && item.badge ? item.badge : undefined}
          />
        ))}

        <ActiveTickets tickets={tickets} icon="/src/assets/Key_Icons.svg" />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mt: "auto" }}>
        <NeedSupportCard />
        <PrudentLiteBox />
        <ProfileCard />
      </Box>
    </Box>
  );
};
