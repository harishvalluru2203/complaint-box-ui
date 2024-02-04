"use client";
import { Box, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export default function UserRegistration(props: any) {
  const router = useRouter();

  const { mode } = props;

  const { register, handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      _id: props._id,
      firstName: props.firstName,
      lastName: props.lastName,
      userName: props.userName,
    },
  });

  const addUser = async (data: any) => {
    const query = await fetch("http://localhost:4000/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await query.json();
    console.log("after submit response => ", response);
    router.push("/user/list");
    toast.success("User added successfully", {
      position: "top-right",
    });
  };

  const updateUser = async (data: any) => {
    console.log("data: ", data);
    const query = await fetch("http://localhost:4000/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await query.json();
    console.log("after update => ", response);
    router.push("/user/list");
    toast.success("User updated successfully", {
      position: "top-right",
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    mode !== "edit" ? addUser(data) : updateUser(data);
  };

  return (
    <Box display="flex" justifyContent="center" style={{ height: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container mb={2} gap={2}>
          <Grid item>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  label="First Name"
                  variant="outlined"
                  {...field}
                  data-testid="user__registration--first-name"
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField
                  label="Last Name"
                  variant="outlined"
                  {...field}
                  data-testid="user__registration--last-name"
                />
              )}
            />
          </Grid>
        </Grid>
        <Box mb={2}>
          <Controller
            control={control}
            name="userName"
            render={({ field }) => (
              <TextField
                label="User Name"
                variant="outlined"
                fullWidth
                {...field}
                data-testid="user__registration--user-name"
              />
            )}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <input type="submit" />
        </Box>
      </form>
    </Box>
  );
}
