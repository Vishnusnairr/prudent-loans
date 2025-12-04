import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { CreateLoanPage } from "./pages/CreateLoanPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/createLoanPage" element={<CreateLoanPage />} />
      </Routes>
    </AppLayout>
  );
}
