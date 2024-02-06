"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function DeleteUser(props: any) {
  const router = useRouter();
  const { userId, onClose } = props;

  const handleClickOpen = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser();
      }
    });
  };

  const deleteUser = async () => {
    const response = await fetch(`${process.env.API_BASE_URL}users/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/users");
      toast.success("User deleted successfully");
    } else {
      toast.error("Internal Server Error");
    }
    router.refresh();
  };

  return <Button onClick={handleClickOpen}>Delete</Button>;
}
