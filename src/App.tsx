import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { AllLoansPage } from "./pages/AllLoansPage";
import { PendingActionsPage } from "./pages/PendingActionsPage";
import { PendingByPrudentPage } from "./pages/PendingByPrudentPage";
import { RequestsPage } from "./pages/RequestsPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { AnalysedLoansPage } from "./pages/AnalysedLoansPage";
import { CreateLoanPage } from "./pages/createLoanPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/create-loan" element={<CreateLoanPage />} />
        <Route path="/all-loans" element={<AllLoansPage />} />
        <Route path="/analysed-loans" element={<AnalysedLoansPage />} />
        <Route path="/pending-actions" element={<PendingActionsPage />} />
        <Route path="/pending-ai" element={<PendingByPrudentPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </AppLayout>
  );
}
