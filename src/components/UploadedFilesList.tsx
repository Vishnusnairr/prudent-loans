import { Box, Typography } from "@mui/material";
import { SelectedFileItem } from "./SelectedFileItem";

type Props = {
  files: File[];
  setFiles: (files: File[]) => void;
};

export const UploadedFilesList = ({ files, setFiles }: Props) => {
  const handleDelete = (name: string) => {
    setFiles(files.filter((f) => f.name !== name));
  };

  return (
    <Box mt={3}>
      {files.length > 0 && (
        <Typography fontSize="14px" fontWeight={500} mb={1} color="#0E121B">
          Selected files to upload
        </Typography>
      )}

      <Box display="flex" flexWrap="wrap" gap="12px">
        {files.map((file, index) => (
          <SelectedFileItem key={index} name={file.name} onDelete={() => handleDelete(file.name)} />
        ))}
      </Box>
    </Box>
  );
};
