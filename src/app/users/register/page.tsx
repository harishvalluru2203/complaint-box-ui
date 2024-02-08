import UserRegistration from "@/app/register-user";
import { Grid } from "@mui/material";

export default function RegisterUser(props: any) {
  return (
    <Grid container justifyContent="center">
      <UserRegistration />
    </Grid>
  );
}
