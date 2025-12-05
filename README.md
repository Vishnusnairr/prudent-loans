# Prudent Loans - Frontend Assessment

A functional, responsive loan management dashboard built with React, TypeScript, and Material UI. This project demonstrates a complete loan management system with dashboard visualization, loan creation flow, and file upload simulation.

## 🚀 Features

### Dashboard (View 1)

- **Stats Cards**: Summary cards showing total loans, processed, in progress, and needs attention counts
- **Data Table**: Comprehensive loan listing with columns for Loan Name (ID/Date), Statement Period, Qualified Income, Status, and Actions
- **Status Badges**: Distinct visual styles for "Proceed with caution", "Action Required", and "Batch Processed"
- **Hybrid Filtering**:
  - Server-side search: Triggers API call with 500ms delay simulation
  - Client-side filter: Status dropdown filters loaded results in memory
- **Pagination**: Functional pagination with customizable page sizes

### Create Loan Flow (View 2)

- **Form Fields**: Loan Name, Income Period (12/24 months), Additional Comments
- **File Upload Zone**: Drag-and-drop area with file listing and delete functionality
- **Validation**: File size limit (50MB) and form validation

### Upload Simulation & Modal (View 3)

- **Async Upload**: 9-second countdown timer with progress indication
- **Cancel Functionality**: Abort upload process
- **Success Redirect**: Automatic redirect to dashboard with new loan added

## 🛠️ Tech Stack

- **Language**: TypeScript (Strict mode enabled)
- **Framework**: React 19
- **Styling**: Material UI (MUI)
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Material UI Icons

## 📋 Prerequisites

- Node.js version 20.19+ or 22.12+
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd prudent-loans
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5174`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoanStatsCard.tsx
│   ├── LoansActionsBar.tsx
│   ├── FileUploadDropzone.tsx
│   └── ...
├── pages/              # Page components
│   ├── DashboardPage.tsx
│   ├── createLoanPage.tsx
│   └── AnalysedLoansPage.tsx
├── services/           # API services and mocks
│   ├── api.ts
│   └── mockLoans.ts
├── hooks/              # Custom React hooks
│   └── useLoans.ts
├── types/              # TypeScript type definitions
│   └── loan.ts
├── data/               # Mock data
│   └── loanData.ts
└── layout/             # Layout components
    ├── AppLayout.tsx
    └── Sidebar.tsx
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Demonstrated

- **UI/UX Fidelity**: Pixel-perfect implementation matching design specifications
- **Component Architecture**: Reusable, well-structured components
- **State Management**: Complex global states with TanStack Query
- **Data Logic**: Hybrid server-side and client-side filtering
- **Async Operations**: File upload simulation with loading states
- **TypeScript**: Strict typing with no 'any' types
- **Responsive Design**: Mobile and desktop layouts

## 📊 Mock API

The application uses mocked API calls with simulated network latency:

- `getLoans()`: Returns filtered loan data with 500ms delay
- `createLoan()`: Simulates 9-second upload process

## 🤝 Contributing

This is a frontend assessment project. For any queries, please reach out to naresh@prudent.ai

## 📄 License

This project is part of a frontend assessment and is not licensed for commercial use.
