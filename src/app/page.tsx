import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
