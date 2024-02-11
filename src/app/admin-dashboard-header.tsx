"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AdminDashboardHeader() {
  const router = useRouter();

  const handleHomeRoute = () => {
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "darkcyan" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Complaint Box
          </Typography>
          <Button color="inherit" onClick={handleHomeRoute}>
            HOME
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
