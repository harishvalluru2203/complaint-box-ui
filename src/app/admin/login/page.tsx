import AdminLogin from "@/app/admin-login";
import Grid from "@mui/material/Grid2";

export default function UserLoginComponent() {
  return (
    <Grid container justifyContent="center">
      <Grid size={3} maxWidth="300px">
        <AdminLogin />
      </Grid>
    </Grid>
  );
}
