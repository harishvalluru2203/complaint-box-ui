import UserRegistration from "@/app/register-user";
import Grid from "@mui/material/Grid2";

export default function RegisterUser(props: any) {
  return (
    <Grid container justifyContent="center">
      <Grid size={3} maxWidth="300px">
        <UserRegistration />
      </Grid>
    </Grid>
  );
}
