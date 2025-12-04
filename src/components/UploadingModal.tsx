
import { Box, Typography, Button, Modal } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type Props = {
  open: boolean;
  secondsLeft: number;
  onCancel: () => void;
};

export const UploadingModal = ({ open, secondsLeft, onCancel }: Props) => {
  return (
    <Modal
      open={open}
      disableEscapeKeyDown
      aria-labelledby="upload-modal"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(15, 23, 42, 0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "420px",
          background: "#FFFFFF",
          borderRadius: "16px",
          textAlign: "center",
          p: "32px",
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 48, color: "#6366F1" }} />

        <Typography
          id="upload-modal"
          fontSize="20px"
          fontWeight={600}
          mt={2}
          sx={{ color: "#0F172A" }}
        >
          Uploading Files
        </Typography>

        <Typography fontSize="14px" mt={1} sx={{ color: "#64748B" }}>
          Your files are being uploaded. Don’t close this window.
          You will be automatically reloaded once it is complete.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            gap: 2,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={onCancel}
            sx={{
              height: 40,
              fontSize: "14px",
              textTransform: "none",
              borderColor: "#E2E8F0",
              color: "#1E293B",
            }}
          >
            Cancel Upload
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{
              height: 40,
              fontSize: "14px",
              textTransform: "none",
              background: "#6366F1",
            }}
          >
            Wait for {secondsLeft} seconds
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
