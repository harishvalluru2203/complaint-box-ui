"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserDashboardHeader() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/users/register");
  };

  const handleLoginClick = () => {
    router.push("/users/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Complaint Box
          </Typography>
          <Button color="inherit" onClick={handleRegisterClick}>
            REGISTER
          </Button>
          <Button color="inherit" onClick={handleLoginClick}>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
