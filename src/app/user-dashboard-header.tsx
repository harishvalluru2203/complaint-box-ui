"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserDashboardHeader() {
  const router = useRouter();

  const handleHomeRoute = () => {
    router.push("/");
  };

  const handleRegisterRoute = () => {
    router.push("/user/register");
  };

  const handleLoginRoute = () => {
    router.push("/user/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "cadetblue" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Complaint Box
          </Typography>
          <Button color="inherit" onClick={handleHomeRoute}>
            HOME
          </Button>
          <Button color="inherit" onClick={handleRegisterRoute}>
            REGISTER
          </Button>
          <Button color="inherit" onClick={handleLoginRoute}>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
