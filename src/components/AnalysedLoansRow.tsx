import { Box, Typography, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import type { StatusType, ButtonType } from "../data/loanData";

type LoanRowProps = {
  avatarColor: string;
  loanName: string;
  loanId: string;
  date: string;
  statementPeriod: number;
  qualifiedIncome: string;
  status: StatusType;
  buttonType: ButtonType;
};

export const AnalysedLoansRow = ({
  avatarColor,
  loanName,
  loanId,
  date,
  statementPeriod,
  qualifiedIncome,
  status,
  buttonType,
}: LoanRowProps) => {
  const renderIcon = () => {
    switch (buttonType) {
      case "analysis":
        return <StarIcon sx={{ fontSize: 16 }} />;
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
    border:
      buttonType === "analysis"
        ? "none"
        : "1px solid #3B82F6",
  };

  return (
    <Box
      sx={{
        height: "80px",
        display: "grid",
        gridTemplateColumns: "2.5fr 1fr 1fr 1.3fr 1.3fr 40px",
        alignItems: "center",
        px: "24px",
        borderBottom: "1px solid #E2E8F0",
      }}
    >

      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: avatarColor,
          }}
        />
        <Box>
          <Typography fontWeight={600} fontSize="14px" color="#0F172A">
            {loanName}
          </Typography>
          <Typography fontSize="12px" color="#64748B">
            ID: {loanId} • {date}
          </Typography>
        </Box>
      </Box>

      <Typography textAlign="center" fontSize="14px" color="#0F172A">
        {statementPeriod}
      </Typography>

      <Typography
        textAlign="center"
        fontSize="14px"
        color="#0F172A"
        fontWeight={600}
      >
        {qualifiedIncome}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          {status === "Proceed with Caution" && (
            <WarningAmberIcon sx={{ fontSize: 16, color: "#DC6803", mr: 1 }} />
          )}
          {status === "Action Required" && (
            <ErrorOutlineIcon sx={{ fontSize: 16, color: "#D92D20", mr: 1 }} />
          )}
          {status === "Batch Processed" && (
            <CheckCircleIcon sx={{ fontSize: 16, color: "#039855", mr: 1 }} />
          )}

          <Typography fontSize="12px" fontWeight={500} color="#344054">
            {status}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          startIcon={renderIcon()}
          sx={{
            ...buttonStyles,
            textTransform: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 500,
            px: "14px",
            py: "5px",
            width: "140px",
          }}
        >
          {buttonType === "analysis" ? "View Analysis" : "View Details"}
        </Button>
      </Box>

      <MoreVertIcon sx={{ cursor: "pointer", color: "#6B7280" }} />
    </Box>
  );
};
