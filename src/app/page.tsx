import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        autoClose={2000}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Complaint Box
            </Typography>
            <Button color="inherit">
              <Link href="/users">USER</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
