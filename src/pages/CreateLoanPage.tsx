import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

  const navigate = useNavigate();

  const startUploading = () => {
    if (files.length === 0) {
      toast.error("Please upload at least 1 file");
      return;
    }
  const loanNameField = document.querySelector(
    'input[placeholder="eg: Loan name #1234"]'
  ) as HTMLInputElement;

  if (!loanNameField?.value.trim()) {
    toast.error("Loan name is required");
    loanNameField.focus();
    return;
  }
    setSecondsLeft(10);       
    setShowModal(true);       
  };

  const cancelUpload = () => {
    setShowModal(false);
    toast.error("Upload cancelled");
  };

  useEffect(() => {
    if (!showModal) return;

    if (secondsLeft <= 1) {
      setTimeout(() => {
        toast.success("Files uploaded successfully!");
        setShowModal(false);
        navigate("/analysed-loans");
      }, 500);
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, showModal, navigate]);

  return (
    <Box sx={{ width: "100%",  boxSizing: "border-box" }}>
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
        <CreateLoanHeader />
        <CreateLoanForm />
        <FileUploadDropzone files={files} setFiles={setFiles} />
        <UploadedFilesList files={files} setFiles={setFiles} />
        <CreateLoanFooter onCreate={startUploading} />
      </Box>

      <UploadingModal
        open={showModal}
        secondsLeft={secondsLeft}
        onCancel={cancelUpload}
      />
    </Box>
  );
};
