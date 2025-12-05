import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from "@mui/material";

export const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: "New Report Generated",
      message: "Your income trend report is ready for download.",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Your subscription payment for Prudent Pro is confirmed.",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 3,
      title: "AI Analysis Completed",
      message: "Your uploaded PDF has been successfully analyzed.",
      time: "Yesterday",
      unread: false,
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography fontSize="20px" fontWeight={600} color="#0F172A" mb={2}>
        Notifications
      </Typography>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {notifications.map((item, index) => (
          <Box key={item.id}>
            <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: item.unread ? "#4F46E5" : "#CBD5E1" }}>
                  🔔
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography
                    fontWeight={item.unread ? 700 : 500}
                    color="#0F172A"
                  >
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="#64748B"
                    >
                      {item.message}
                    </Typography>
                    <Typography
                      fontSize="12px"
                      color="#94A3B8"
                      mt={0.5}
                      display="block"
                    >
                      {item.time}
                    </Typography>
                  </>
                }
              />

              {/* Unread dot */}
              {item.unread && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#4F46E5",
                    borderRadius: "50%",
                  }}
                />
              )}
            </ListItem>

            {index < notifications.length - 1 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </List>
    </Box>
  );
};
