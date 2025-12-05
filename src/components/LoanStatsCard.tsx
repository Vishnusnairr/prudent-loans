import { Box, Typography } from "@mui/material";

interface LoanStatsCardProps {
  totalLoans: number;
  processed: number;
  inProgress: number;
  needsAttention: number;
}

export const LoanStatsCard = ({ totalLoans, processed, inProgress, needsAttention }: LoanStatsCardProps) => {
  const processedPercent = totalLoans > 0 ? (processed / totalLoans) * 100 : 0;
  const inProgressPercent = totalLoans > 0 ? (inProgress / totalLoans) * 100 : 0;
  const needsAttentionPercent = totalLoans > 0 ? (needsAttention / totalLoans) * 100 : 0;

  return (
    <Box
      sx={{
        height: "184px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{display:"flex",flexDirection:"column-reverse"}}>
        <Typography
          fontSize="14px"
          fontWeight={400}
          color="#6B7280"
        >
          Total Loans
        </Typography>

        <Typography
          fontSize="28px"
          fontWeight={400}
          color="#0F172A"
          mt="4px"
        >
          {totalLoans}
        </Typography>
      </Box>

      <Box mt="10px">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "8px",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: `${processedPercent}%`, background: "#7B61FF" }} />
          <Box sx={{ width: `${inProgressPercent}%`, background: "#FFCC32", mx: processedPercent > 0 && inProgressPercent > 0 ? "3px" : 0 }} />
          <Box sx={{ width: `${needsAttentionPercent}%`, background: "#FF6B6B", ml: (processedPercent + inProgressPercent) > 0 ? "3px" : 0 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "14px",
          }}
        >

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap="6px">
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#7B61FF" }} />
              <Typography fontSize="22px" fontWeight={400} color="#0F172A">
                {processed}
              </Typography>
            </Box>
            <Typography fontSize="14px" fontWeight={400} color="#6B7280">
              Processed
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap="6px">
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FFCC32" }} />
              <Typography fontSize="22px" fontWeight={400} color="#0F172A">
                {inProgress}
              </Typography>
            </Box>
            <Typography fontSize="14px" fontWeight={400} color="#6B7280"   sx={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }}>
              In Progress
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap="6px">
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6B6B" }} />
              <Typography fontSize="22px" fontWeight={400} color="#0F172A">
                {needsAttention}
              </Typography>
            </Box>
            <Typography fontSize="14px" fontWeight={400} color="#6B7280" sx={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }}>
              Needs attention
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
