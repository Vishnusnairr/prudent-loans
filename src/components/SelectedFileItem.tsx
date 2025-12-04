import { Box, Typography, IconButton } from "@mui/material";
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
        borderRadius: "10px",
        px: "14px",
        py: "8px",
      }}
    >
      <PictureAsPdfIcon sx={{ color: "#EF4444" }} />
      <Typography fontSize="14px" noWrap maxWidth="160px">{name}</Typography>
      <IconButton size="small" onClick={onDelete}>
        <DeleteIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  );
};
