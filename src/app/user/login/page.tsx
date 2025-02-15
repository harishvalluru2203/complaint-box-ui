import UserLogin from "@/app/user-login";
import Grid from "@mui/material/Grid2";

export default function UserLoginComponent() {
  return (
    <Grid container justifyContent="center">
      <Grid size={3} maxWidth="300px">
        <UserLogin />
      </Grid>
    </Grid>
  );
}
