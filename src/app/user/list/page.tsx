"use client";

import {
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

export default function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("http://localhost:4000/user/list");
      const response = await query.json();
      setUserList(response);
    };

    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">User Name</TableCell>
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

                  {/* <Link
                    href={{
                      pathname: "/user/registration",
                      query: { id: user._id },
                    }}
                  >
                    Edit
                  </Link> */}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
