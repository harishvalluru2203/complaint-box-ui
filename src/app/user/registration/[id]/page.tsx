"use client";
import UserRegistration from "@/app/register-user";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserEditDetails() {
  const [userInfo, setUserDetails] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    const getUserDetails = async () => {
      const query = await fetch(`http://localhost:4000/user/${params?.id}`);
      const response = await query.json();
      setUserDetails(response);
    };

    getUserDetails();
  }, []);

  return (
    <>
      {userInfo ? (
        <UserRegistration {...userInfo} mode="edit" />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
