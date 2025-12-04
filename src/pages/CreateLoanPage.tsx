import { Box } from "@mui/material";
import { useState } from "react";
import { CreateLoanHeader } from "../components/CreateLoanHeader";
import { CreateLoanForm } from "../components/CreateLoanForm";
import { FileUploadDropzone } from "../components/FileUploadDropzone";
import { UploadedFilesList } from "../components/UploadedFilesList";
import { CreateLoanFooter } from "../components/CreateLoanFooter";

export const CreateLoanPage = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <CreateLoanHeader />

      <Box
        sx={{
          mx: "auto",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          p: "32px",
          mt: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <CreateLoanForm />

        <FileUploadDropzone files={files} setFiles={setFiles} />

        <UploadedFilesList files={files} setFiles={setFiles} />

        <CreateLoanFooter />
      </Box>
    </Box>
  );
};
