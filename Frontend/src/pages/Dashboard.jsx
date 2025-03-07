import { useState } from "react";
import { Container, Tabs, Tab, Box, Typography } from "@mui/material";
import Announcements from "../Components/Dashboard/Announcements";
import Notices from "../Components/Dashboard/Notices";
import ClubEvents from "../Components/Dashboard/ClubEvents";

const AdminDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
         Welcome, Admin!
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 3 }}>
        Manage announcements, notices, and club events.
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={(e, newIndex) => setTabIndex(newIndex)}
        centered
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="Announcements" />
        <Tab label="Notices" />
        <Tab label="Club Events" />
      </Tabs>

      <Box sx={{ mt: 3, p: 2 }}>
        {tabIndex === 0 && <Announcements />}
        {tabIndex === 1 && <Notices />}
        {tabIndex === 2 && <ClubEvents />}
      </Box>
    </Container>
  );
};

export default AdminDashboard;
