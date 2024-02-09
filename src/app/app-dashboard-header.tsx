"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AppDashboardHeader() {
  const router = useRouter();

  const handleUserClick = () => {
    router.push("/user");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Complaint Box
          </Typography>
          <Button color="inherit" onClick={handleUserClick}>
            User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
