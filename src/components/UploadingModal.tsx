import { Box, Typography, Button } from "@mui/material";

type Props = {
  open: boolean;
  secondsLeft: number;
  onCancel: () => void;
};

export const UploadingModal = ({ open, secondsLeft, onCancel }: Props) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(6px)",
        background: "rgba(15, 23, 42, 0.45)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "420px",
          background: "#FFFFFF",
          borderRadius: "16px",
          p: "32px",
          textAlign: "center",
          boxShadow: "0px 4px 22px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="/src/assets/uploadcloud.svg"
          style={{ width: "40px", height: "40px", margin: "auto" }}
        />

        <Typography fontSize="18px" fontWeight={600} color="#0F172A" mt={2}>
          Uploading Files
        </Typography>

        <Typography
          mt={1}
          fontSize="14px"
          color="#475569"
          lineHeight="20px"
          sx={{ maxWidth: "290px", mx: "auto" }}
        >
          Your files are being uploaded. Don’t close this window. You will be
          automatically redirected once it is complete
        </Typography>

        <Box sx={{ borderBottom: "1px solid #E2E8F0", mt: "22px" }} />

        <Box
          sx={{
            mt: "18px",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <Button
            onClick={onCancel}
            sx={{
              flex: 1,
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
              color: "#0F172A",
              textTransform: "none",
            }}
          >
            Cancel Upload
          </Button>

          <Button
            disabled
            sx={{
              flex: 1,
              borderRadius: "8px",
              background: "#6366F1",
              textTransform: "none",
              color: "#FFFFFF",
              fontWeight: 500,
            }}
          >
            Wait for {secondsLeft} seconds
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
