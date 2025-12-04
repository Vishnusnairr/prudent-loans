import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import { SidebarLogo } from "../components/SidebarLogo";
import { SidebarItem } from "../components/SidebarItem";
import { ActiveTickets } from "../components/ActiveTickets";
import { NeedSupportCard } from "../components/NeedSupportCard";
import { PrudentLiteBox } from "../components/PrudentLiteBox";
import { ProfileCard } from "../components/ProfileCard";

export const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const tickets = ["#PR013034", "#PR0130456"];

  const menu = [
    {
      label: "Dashboard",
      icon: "/src/assets/layout_grid_1.svg",
      arrow: true,
      to: "/",                
    },
    {
      label: "Create New Loan",
      icon: "/src/assets/layout_grid_2.svg",
      to: "/create-loan",
    },
    {
      label: "Analysed Loans",
      icon: "/src/assets/layout_grid_3.svg",
      to: "/analysed-loans",
    },
    {
      label: "Requests",
      icon: "/src/assets/layout_grid_4.svg",
      to: "/requests",
    },
    {
      label: "Documents",
      icon: "/src/assets/layout_grid_5.svg",
      to: "/documents",
    },
  ];

  return (
    <Box
      sx={{
        width: "272px",
        height: "100vh",
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        p: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <SidebarLogo />

      {menu.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          arrow={item.arrow}
          to={item.to}
          active={pathname === item.to}
        />
      ))}

      <ActiveTickets tickets={tickets} icon="/src/assets/Key_Icons.svg" />
      <NeedSupportCard />
      <PrudentLiteBox />
      <ProfileCard />
    </Box>
  );
};
