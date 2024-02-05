import DeleteUser from "@/app/delete-user";
import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const getUsersList = async () => {
  const query = await fetch("http://localhost:4000/users", {
    cache: "no-store",
  });
  const response = await query.json();
  return response;
};

export default async function UserList(props: any) {
  const userList = await getUsersList();

  return (
    <Box display="flex" justifyContent="center">
      <TableContainer component={Paper} style={{ width: "900px" }}>
        <Table aria-label="simple table">
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
            {userList.map((user: any) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.userName}</TableCell>
                <TableCell align="center">
                  <Link href={`/users/registration/${user._id}`}>EDIT</Link>
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
