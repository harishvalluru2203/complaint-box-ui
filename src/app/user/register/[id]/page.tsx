import UserRegistration from "@/app/register-user";
import Grid from "@mui/material/Grid2";
import { cookies } from "next/headers";

async function getUserInfo(userId: any) {
  const cookieStore: any = cookies();
  const accessToken: any = cookieStore.get("admin_access_token").value;
  const query = await fetch(`${process.env.API_BASE_URL}user/${userId}`, {
    cache: "no-store",
    headers: {
      Authorization: accessToken,
    },
  });
  const response = await query.json();
  return response;
}

export default async function UserEditDetails({ params }: any) {
  const userInfo = await getUserInfo(params?.id);

  return (
    <Grid container justifyContent="center">
      <UserRegistration {...userInfo} mode="edit" />
    </Grid>
  );
}
