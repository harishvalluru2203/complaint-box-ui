import DeleteUser from "@/app/delete-user";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";

async function getUsersList() {
  const cookieStore: any = cookies();
  const accessToken: any = cookieStore.get("admin_access_token")?.value;
  const query = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}user/list`,
    {
      cache: "no-store",
      headers: {
        Authorization: accessToken,
      },
    }
  );
  const response = await query.json();
  console.log("response: ", response);
  return response;
}

export default async function UserList(props: any) {
  const userList = await getUsersList();

  return (
    <Box display="flex" justifyContent="center">
      <TableContainer component={Paper} style={{ width: "900px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user: any) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">
                  <Link href={`/user/register/${user._id}`}>EDIT</Link>
                </TableCell>
                <TableCell align="center">
                  <DeleteUser userId={user._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
