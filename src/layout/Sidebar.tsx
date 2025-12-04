import { Box } from "@mui/material";
import { SidebarLogo } from "../components/SidebarLogo";
import { SidebarItem } from "../components/SidebarItem";
import { useState } from "react";
import { ActiveTickets } from "../components/ActiveTickets";
import { NeedSupportCard } from "../components/NeedSupportCard";
import { PrudentLiteBox } from "../components/PrudentLiteBox";
import { ProfileCard } from "../components/ProfileCard";
export const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  
const tickets = ["#PR013034", "#PR0130456"];

  const menu = [
    { label: "Dashboard", icon: "/src/assets/layout_grid_1.svg", arrow: true },
    { label: "Create New Loan", icon: "/src/assets/layout_grid_2.svg" },
    { label: "Analysed Loans", icon: "/src/assets/layout_grid_3.svg" },
    { label: "Requests", icon: "/src/assets/layout_grid_4.svg" },
    { label: "Documents", icon: "/src/assets/layout_grid_5.svg" },
  ];

  return (
    <Box
      sx={{
        width: "272px",
        height: "100vh",
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        padding: "16px",
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
          active={active === item.label}
          onClick={() => setActive(item.label)}
        />
      ))}

      <ActiveTickets
  tickets={tickets}
  icon="/src/assets/Key_Icons.svg" 
/>
<NeedSupportCard />
<PrudentLiteBox />
<ProfileCard />
    </Box>
  );
};
