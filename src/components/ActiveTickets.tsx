import { Box, Typography } from "@mui/material";

interface TicketProps {
  tickets: string[];
  icon?: string;
}

export const ActiveTickets = ({ tickets, icon }: TicketProps) => {
  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#94A3B8",
          letterSpacing: "0.5px",
        }}
      >
        ACTIVE TICKETS
      </Typography>

      <Box sx={{ height: "6px" }} />

      {tickets.map((ticket) => (
        <Box
          key={ticket}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={icon}
              alt="ticket"
              style={{ width: 32, height: 32, opacity: 0.7 }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              color: "#475569",
            }}
          >
            {ticket}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
