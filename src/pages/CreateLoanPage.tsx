import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { CreateLoanHeader } from "../components/CreateLoanHeader";
import { CreateLoanForm } from "../components/CreateLoanForm";
import { FileUploadDropzone } from "../components/FileUploadDropzone";
import { UploadedFilesList } from "../components/UploadedFilesList";
import { CreateLoanFooter } from "../components/CreateLoanFooter";
import { UploadingModal } from "../components/UploadingModal";

export const CreateLoanPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const handleCreate = () => {
    setShowModal(true);
    setSecondsLeft(10);
  };

  useEffect(() => {
    if (!showModal) return;
    if (secondsLeft === 0) {
      setShowModal(false);
      return;
    }

    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [showModal, secondsLeft]);

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

        <CreateLoanFooter onCreate={handleCreate} />
      </Box>

      <UploadingModal
        open={showModal}
        secondsLeft={secondsLeft}
        onCancel={() => setShowModal(false)}
      />
    </Box>
  );
};
