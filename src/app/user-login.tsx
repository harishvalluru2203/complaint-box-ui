"use client";
import { Box, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  userName: string;
  password: string;
}

export default function UserLogin(props: any) {
  const router = useRouter();

  const { mode } = props;

  const { register, handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      userName: props.userName,
      password: props.password,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const response: any = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseResult = await response.json();
    if (response.ok) {
      toast.update(toastId, {
        render: "Successfully logged in",
        isLoading: false,
        type: "success",
        autoClose: 2000,
      });
      document.cookie = `access_token=${responseResult.token}`;
      router.push("/users/list");
    } else {
      toast.update(toastId, {
        render: "Internal Server Error",
        isLoading: false,
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{ height: "100%" }}
      marginTop="40px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container mb={2} gap={2}>
          <Grid item>
            <Controller
              control={control}
              name="userName"
              render={({ field }) => (
                <TextField
                  label="User Name"
                  variant="outlined"
                  {...field}
                  data-testid="user__login--first-name"
                  autoComplete="off"
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  {...field}
                  data-testid="user__login--last-name"
                  autoComplete="off"
                />
              )}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <input
            type="submit"
            data-testid="user__registration--submit"
            value={mode !== "edit" ? "REGISTER" : "UPDATE"}
          />
        </Box>
      </form>
    </Box>
  );
}
