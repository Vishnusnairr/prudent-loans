import { Box, IconButton, Typography, Select, MenuItem } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type PaginationProps = {
  total: number;
  perPage: number;
  page: number;
  setPage: (page: number) => void;
  setPerPage: (num: number) => void;
};

export const Pagination = ({
  total,
  perPage,
  page,
  setPage,
  setPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage);

  const pages: (number | "...")[] = [1, 2, 3, "...", totalPages];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "24px",
        py: "20px",
        borderTop: "1px solid #E2E8F0",
        background: "#FFFFFF",
      }}
    >
      <Typography fontSize="14px" fontWeight={500} color="#64748B">
        Page {page} of {totalPages}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <IconButton
          disabled={page === 1}
          onClick={() => setPage(1)}
          sx={{
            width: 32, height: 32,
            borderRadius: "8px",
            border: "1px solid #E2E8F0",
            fontSize: 14,
            color: "#475569",
          }}
        >
          «
        </IconButton>

        <IconButton
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          sx={{
            width: 32, height: 32,
            borderRadius: "8px",
            border: "1px solid #E2E8F0",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 14, color: "#475569" }} />
        </IconButton>

        {pages.map((num, i) =>
          num === "..." ? (
            <Box key={i} sx={{ px: "10px", fontSize: 14, color: "#94A3B8" }}>
              …
            </Box>
          ) : (
            <Box
              key={i}
              onClick={() => typeof num === "number" && setPage(num)}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 14,
                background: page === num ? "#EEF2FF" : "#FFFFFF",
                border:
                  page === num ? "1px solid #CBD5E1" : "1px solid #E2E8F0",
                color: page === num ? "#1D4ED8" : "#475569",
                "&:hover": {
                  background: page === num ? "#E0E7FF" : "#F8FAFC",
                },
              }}
            >
              {num}
            </Box>
          )
        )}

        <IconButton
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          sx={{
            width: 32, height: 32,
            borderRadius: "8px",
            border: "1px solid #E2E8F0",
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#475569" }} />
        </IconButton>

        <IconButton
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
          sx={{
            width: 32, height: 32,
            borderRadius: "8px",
            border: "1px solid #E2E8F0",
            fontSize: 14,
            color: "#475569",
          }}
        >
          »
        </IconButton>
      </Box>

      <Select
        size="small"
        value={perPage}
        onChange={(e) => setPerPage(Number(e.target.value))}
        sx={{
          height: 36,
          borderRadius: "8px",
          fontSize: "13px",
          background: "#FFFFFF",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#E2E8F0",
          },
        }}
      >
        <MenuItem value={5}>5 / page</MenuItem>
        <MenuItem value={10}>10 / page</MenuItem>
        <MenuItem value={15}>15 / page</MenuItem>
      </Select>
    </Box>
  );
};
