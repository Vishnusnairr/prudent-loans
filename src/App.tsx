import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { CreateLoanPage } from "./pages/CreateLoanPage";
import { AnalysedLoansPage } from "./pages/AnalysedLoansPage";
import { RequestsPage } from "./pages/RequestsPage";
import { DocumentsPage } from "./pages/DocumentsPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/create-loan" element={<CreateLoanPage />} />
        <Route path="/analysed-loans" element={<AnalysedLoansPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </AppLayout>
  );
}
