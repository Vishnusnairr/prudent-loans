import { Box, Button } from "@mui/material";

type Props = {
  onCreate: () => void;
};

export const CreateLoanFooter = ({ onCreate }: Props) => (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "32px", gap: "12px" }}>
    <Button
  variant="text"
  sx={{
    textTransform: "none",
    color: "#000",
  }}
>
  Cancel
</Button>


   <Button
  variant="contained"
  onClick={onCreate}
  sx={{
    background: "#6366F1",
    textTransform: "none",
    height: 48,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    px: 3,
    "&:hover": {
      background: "#5558E6",
    },
  }}
>
  <img
    src="/src/assets/file-upload-line.svg" 
    alt="upload-icon"
    width={20}
    height={20}
    style={{ display: "flex" }}
  />
  Create New Loan
</Button>

  </Box>
);
