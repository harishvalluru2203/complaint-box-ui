"use client";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  userName: string;
  password: string;
}

export default function AdminLogin(props: any) {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}admin/login`,
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
      document.cookie = `admin_access_token=${responseResult.token}`;
      router.push("/admin/dashboard");
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center">
        <h1>Admin Login</h1>
      </Box>

      <Grid mb={2}>
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
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid mb={2} gap={2}>
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
              fullWidth
            />
          )}
        />
      </Grid>
      <Box display="flex" justifyContent="center">
        <input type="submit" data-testid="user__login--submit" value="LOGIN" />
      </Box>
    </form>
  );
}
