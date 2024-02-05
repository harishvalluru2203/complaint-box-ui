import UserRegistration from "@/app/register-user";

const getUserInfo = async (userId: any) => {
  const query = await fetch(`http://localhost:4000/users/${userId}`, {
    cache: "no-store",
  });
  const response = await query.json();
  return response;
};

export default async function UserEditDetails({ params }: any) {
  const userInfo = await getUserInfo(params?.id);

  return <UserRegistration {...userInfo} mode="edit" />;
}