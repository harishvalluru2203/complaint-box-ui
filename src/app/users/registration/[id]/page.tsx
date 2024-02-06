import UserRegistration from "@/app/register-user";

async function getUserInfo(userId: any) {
  const query = await fetch(`${process.env.API_BASE_URL}users/${userId}`, {
    cache: "no-store",
  });
  const response = await query.json();
  return response;
}

export default async function UserEditDetails({ params }: any) {
  const userInfo = await getUserInfo(params?.id);

  return <UserRegistration {...userInfo} mode="edit" />;
}
