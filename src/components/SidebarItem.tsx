import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  active?: boolean;
  arrow?: boolean;
  icon?: string;
  onClick?: () => void;
}

export const SidebarItem = ({ label, active, arrow, icon, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: "44px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        position: "relative",
        paddingX: "12px",
        borderRadius: "8px",
        cursor: "pointer",
        background: active ? "#F8FAFC" : "transparent",
      }}
    >
      {active && (
        <Box
          sx={{
            width: "4px",
            height: "22px",
            background: "#6366F1",
            position: "absolute",
            left: 0,
            borderRadius: "2px",
          }}
        />
      )}

      {icon && (
        <img
          src={icon}
          alt={label}
          style={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }}
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

      {arrow && (
        <Typography sx={{ marginLeft: "auto", color: "#475569", fontSize: "18px" }}>
          <img
          src={"/src/assets/arrow_right.svg"}
          style={{
            width: 20,
            height: 20,
          }}
        />
        </Typography>
      )}
    </Box>
  );
};
