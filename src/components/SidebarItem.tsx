import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  active?: boolean;
  arrow?: boolean;
  icon?: string;
  to?: string;
  badge?: number;
  onClick?: () => void;
}

export const SidebarItem = ({
  label,
  active,
  arrow,
  icon,
  to,
  badge,
  onClick,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        height: "44px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        position: "relative",
        px: "12px",
        borderRadius: "8px",
        cursor: "pointer",
        background: active ? "#F8FAFC" : "transparent",
        "&:hover": { background: active ? "#F8FAFC" : "#F9FAFB" },
      }}
    >

      {active && (
        <Box
          sx={{
            width: "5px",
            height: "22px",
            background: "#6366F1",
            position: "absolute",
            left: -16,
            borderRadius: "2px",
          }}
        />
      )}

      {icon && (
        <img
          src={icon}
          alt={label}
          style={{ width: 20, height: 20, objectFit: "contain" }}
        />
      )}

      <Typography
        sx={{
          fontSize: "16px",
          color: active ? "#0E121B" : "#525866",
          fontWeight: active ? 500 : 400,
        }}
      >
        {label}
      </Typography>

      {badge !== undefined && (
        <Box
          sx={{
            ml: "auto",
            background: "#EEF2FF",
            color: "#4F46E5",
            borderRadius: "8px",
            px: "8px",
            fontSize: "12px",
            fontWeight: 600,
            height: "22px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {badge}
        </Box>
      )}

      {arrow && (
        <img
          src={"/src/assets/arrow_right.svg"}
          style={{ marginLeft: "auto", width: 20, height: 20 }}
        />
      )}
    </Box>
  );
};
