import { Box, Typography, IconButton, Avatar } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  name: string;
  onDelete: () => void;
};

export const SelectedFileItem = ({ name, onDelete }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        px: "14px",
        py: "8px",
        
      }}
    >
      <Avatar src="/src/assets/File_Format_Icons.svg" sx={{ width: 40, height: 40 }} />
      <Typography fontSize="14px" color="#000" noWrap maxWidth="160px">{name}</Typography>
      <IconButton size="small" onClick={onDelete}>
        <DeleteIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  );
};
