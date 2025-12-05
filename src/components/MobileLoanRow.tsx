import { Box, Typography, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import type { StatusType, ButtonType } from "../data/loanData";

type Props = {
  avatarColor: string;
  loanName: string;
  loanId: string;
  date: string;
  statementPeriod: number;
  qualifiedIncome: string;
  status: StatusType;
  buttonType: ButtonType;
};

export const MobileLoanRow = (props: Props) => {
  const { avatarColor, loanName, loanId, date, statementPeriod, qualifiedIncome, status, buttonType } = props;

  const renderIcon = () => {
    switch (buttonType) {
      case "analysis":
        return <img src="/src/assets/bard-fill-w.svg" />;
      case "detailsRed":
        return <InfoIcon sx={{ fontSize: 16, color: "#DC2626" }} />;
      default:
        return <InfoIcon sx={{ fontSize: 16, color: "#3B82F6" }} />;
    }
  };

  const buttonStyles = {
    background:
      buttonType === "analysis"
        ? "#3B82F6"
        : buttonType === "detailsRed"
        ? "#FEE2E2"
        : "#FFFFFF",
    color:
      buttonType === "analysis"
        ? "#FFFFFF"
        : buttonType === "detailsRed"
        ? "#DC2626"
        : "#3B82F6",
    border: buttonType === "analysis" ? "none" : "1px solid #3B82F6",
  };

  return (
   <Box
  sx={{
    width: "100% !important",
    maxWidth: "100%",
    overflow: "hidden",
    bgcolor: "#FFFFFF",
    borderBottom: "1px solid #E2E8F0",
    p: 2,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    position: "relative",
    boxSizing: "border-box",
  }}
>

      <MoreVertIcon sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", background: avatarColor }} />

        <Box>
          <Typography fontWeight={600} fontSize="15px" color="#0F172A">
            {loanName}
          </Typography>
          <Typography fontSize="12px" color="#64748B">
            ID: {loanId} • {date}
          </Typography>
        </Box>
      </Box>

      <Typography fontSize="14px" fontWeight={600} color="#0F172A">
        ${qualifiedIncome}
      </Typography>

      <Typography fontSize="13px" color="#0F172A">Statements: {statementPeriod}</Typography>

      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          background: "#F2F4F7",
          borderRadius: "6px",
          px: "10px",
          py: "4px",
          width: "fit-content",
        }}
      >
        {status === "Proceed with Caution" && <WarningAmberIcon sx={{ fontSize: 16, color: "#DC6803", mr: 1 }} />}
        {status === "Action Required" && <ErrorOutlineIcon sx={{ fontSize: 16, color: "#D92D20", mr: 1 }} />}
        {status === "Batch Processed" && <CheckCircleIcon sx={{ fontSize: 16, color: "#039855", mr: 1 }} />}

        <Typography fontSize="12px" fontWeight={500} color="#344054">{status}</Typography>
      </Box>

      <Button
        startIcon={renderIcon()}
        sx={{
          ...buttonStyles,
          textTransform: "none",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: 600,
          py: "8px",
          width: "100%",
        }}
      >
        {buttonType === "analysis" ? "View Analysis" : "View Details"}
      </Button>
    </Box>
  );
};
