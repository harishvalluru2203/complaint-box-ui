"use client";

import {
  Box,
  CircularProgress,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import DeleteUser from "./DeleteUser";
import useSWR from "swr";

export default function UserList() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const { isLoading, data: userList } = useSWR(
    "http://localhost:4000/user/list",
    (url) => fetcher(url)
  );

  if (isLoading)
    return (
      <Box display="flex">
        <CircularProgress />
      </Box>
    );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList &&
            userList.length > 0 &&
            userList.map((user: any) => (
              <TableRow
                key={user.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.userName}</TableCell>
                <TableCell align="center">
                  <Link href={`/user/registration/${user._id}`}>Edit</Link>
                </TableCell>
                <TableCell align="center">
                  <DeleteUser userId={user._id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
