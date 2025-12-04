import { Box, Button, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

type Props = { files: File[]; setFiles: (files: File[]) => void };

export const FileUploadDropzone = ({ files, setFiles }: Props) => {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  return (
    <Box
      sx={{
        border: "2px dashed #CBD5E1",
        borderRadius: "12px",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        textAlign: "center",
      }}
    >
      <UploadIcon sx={{ fontSize: 32, color: "#475569" }} />
      <Typography fontSize="14px" color="#475569">
        Choose bank statements, tax forms or drag & drop here.
      </Typography>
      <Typography fontSize="12px" color="#64748B">PDF up to 50 MB.</Typography>

      <Button variant="contained" sx={{ mt: 1 }} component="label">
        Browse File
        <input type="file" hidden multiple onChange={handleFileSelect} />
      </Button>
    </Box>
  );
};
