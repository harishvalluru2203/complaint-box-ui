"use client";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  userName: string;
}

export default function UserRegistration(props: any) {
  console.log("props: ", props);

  const { mode } = props;
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: props,
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
  };

  const updateUser = async (data: any) => {
    const query = await fetch("http://localhost:4000/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await query.json();
    console.log("after update => ", response);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    mode !== "edit" ? addUser(data) : updateUser(data);
  };

  return (
    <Box display="flex" justifyContent="center" style={{ height: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container mb={2} gap={2}>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              {...register("firstName")}
              autoComplete="off"
              name="firstName"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              {...register("lastName")}
              autoComplete="off"
            />
          </Grid>
        </Grid>
        <Box mb={2}>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            fullWidth
            {...register("userName")}
            autoComplete="off"
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <input type="submit" />
        </Box>
      </form>
    </Box>
  );
}
