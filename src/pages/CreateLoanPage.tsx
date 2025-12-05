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
import { createLoan } from "../services/api";

export const CreateLoanPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(9);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const startUploading = async () => {
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
    setSecondsLeft(9);
    setShowModal(true);
    setIsUploading(true);
    try {
      await createLoan({ files, loanName: loanNameField.value });
      toast.success("Files uploaded successfully!");
      setShowModal(false);
      navigate("/analysed-loans");
    } catch (error) {
      toast.error("Upload failed");
      setShowModal(false);
    } finally {
      setIsUploading(false);
    }
  };

  const cancelUpload = () => {
    setShowModal(false);
    setIsUploading(false);
    toast.error("Upload cancelled");
  };

  useEffect(() => {
    if (!showModal || !isUploading) return;

    if (secondsLeft <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, showModal, isUploading]);

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
