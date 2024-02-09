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
  password: string;
}

export default function UserRegistration(props: any) {
  const router = useRouter();
  const { mode } = props;
  const isEditMode = mode === "edit";

  const { register, handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      _id: props._id,
      firstName: props.firstName,
      lastName: props.lastName,
      userName: props.userName,
      password: "",
    },
  });

  const addUser = async (data: any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      toast.success("User added successfully");
    } else {
      toast.error("Internal Server Error");
    }
  };

  const updateUser = async (data: any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}users/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      toast.success("User updated successfully");
    } else {
      toast.error("Internal Server Error");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    !isEditMode ? addUser(data) : updateUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        justifyContent="center"
        style={{ height: "100%" }}
        marginTop="40px"
        width="461px"
      >
        <h1>User Registration</h1>

        <Grid container item mb={2} gap={2}>
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container item mb={2}>
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
                autoComplete="off"
              />
            )}
          />
        </Grid>
        {!isEditMode && (
          <Grid container item mb={2}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  {...field}
                  data-testid="user__registration--user-password"
                  autoComplete="off"
                />
              )}
            />
          </Grid>
        )}
        <Box display="flex" justifyContent="center">
          <input
            type="submit"
            data-testid="user__registration--submit"
            value={!isEditMode ? "REGISTER" : "UPDATE"}
          />
        </Box>
      </Grid>
    </form>
  );
}
