import { Box, IconButton, Typography, Select, MenuItem, Divider } from "@mui/material";
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
    <>
      <Box sx={{ px: "15px" }}>
        <Divider sx={{ borderColor: "#E2E8F0" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "19px",
          py: "18px",
          background: "#FFFFFF",
        }}
      >
        <Typography fontSize="14px" fontWeight={500} color="#64748B">
          Page {page} of {totalPages}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              cursor: page === 1 ? "not-allowed" : "pointer",
              opacity: page === 1 ? 0.4 : 1,
              color: "#475569",
              "&:hover": { background: "#F8FAFC" },
            }}
            onClick={() => page > 1 && setPage(1)}
          >
            «
          </Box>

          <IconButton
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            sx={{
              width: 36,
              height: 36,
              borderRadius: "8px",
              "&:hover": { background: "#F8FAFC" },
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
                onClick={() => setPage(num as number)}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: 14,
                  background: page === num ? "#EEF2FF" : "#FFFFFF",
                  color: page === num ? "#1D4ED8" : "#475569",
                  "&:hover": { background: "#F8FAFC" },
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
              width: 36,
              height: 36,
              borderRadius: "8px",
              "&:hover": { background: "#F8FAFC" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#475569" }} />
          </IconButton>

          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              cursor: page === totalPages ? "not-allowed" : "pointer",
              opacity: page === totalPages ? 0.4 : 1,
              color: "#475569",
              "&:hover": { background: "#F8FAFC" },
            }}
            onClick={() => page < totalPages && setPage(totalPages)}
          >
            »
          </Box>
        </Box>

        <Select
          size="small"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
          sx={{
            height: 36,
            borderRadius: "8px",
            fontSize: "13px",
            border: "1px solid #E2E8F0",
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        >
          <MenuItem value={5}>5 / page</MenuItem>
          <MenuItem value={10}>10 / page</MenuItem>
          <MenuItem value={15}>15 / page</MenuItem>
        </Select>
      </Box>
    </>
  );
  };
