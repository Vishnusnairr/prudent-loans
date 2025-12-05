import { Box, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";

type Props = { files: File[]; setFiles: (files: File[]) => void };

export const FileUploadDropzone = ({ files, setFiles }: Props) => {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    const maxSize = 50 * 1024 * 1024; 
    const invalidFiles = newFiles.filter(file => file.size > maxSize);
    if (invalidFiles.length > 0) {
      toast.error(`File size exceeds 50MB: ${invalidFiles.map(f => f.name).join(', ')}`);
      return;
    }
    setFiles([...files, ...newFiles]);
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
      <img src="/src/assets/upload-cloud-2-line.svg" />
      <Typography fontSize="14px" color="#475569">
        Choose bank statements, tax forms or drag & drop here.
      </Typography>
      <Typography fontSize="12px" color="#64748B">PDF up to 50 MB.</Typography>

      <Button
  variant="contained"
  component="label"
  sx={{
    mt: 1,
    textTransform: "none",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    border: "1px solid #CBD5E1",
    "&:hover": {
      backgroundColor: "#F8FAFC",
      border: "1px solid #94A3B8",
    },
  }}
>
  Browse File
  <input type="file" hidden multiple onChange={handleFileSelect} />
</Button>
    </Box>
  );
};
