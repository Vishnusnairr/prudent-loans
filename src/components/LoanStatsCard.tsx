import { Box, Typography } from "@mui/material";

export const LoanStatsCard = () => {
  return (
    <Box
      sx={{
        width: "500px",
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
      <Box>
        <Typography
          fontSize="14px"
          fontWeight={400}
          color="#6B7280"
        >
          Total Loans
        </Typography>

        <Typography
          fontSize="28px"
          fontWeight={600}
          color="#0F172A"
          mt="4px"
        >
          710
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
          <Box sx={{ width: "25%", background: "#7B61FF" }} />
          <Box sx={{ width: "50%", background: "#FFCC32", mx: "3px" }} />
          <Box sx={{ width: "25%", background: "#FF6B6B" }} />
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
                125
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
                453
              </Typography>
            </Box>
            <Typography fontSize="14px" fontWeight={400} color="#6B7280">
              In Progress
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap="6px">
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6B6B" }} />
              <Typography fontSize="22px" fontWeight={400} color="#0F172A">
                132
              </Typography>
            </Box>
            <Typography fontSize="14px" fontWeight={400} color="#6B7280">
              Needs attention
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
