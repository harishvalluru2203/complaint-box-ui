import DeleteUser from "@/app/delete-user";
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

export const getServerSideProps = async () => {
  const query = await fetch("http://localhost:4000/users");
  const response = await query.json();

  return {
    props: {
      userList: response,
    },
  };
};

export default function UserList(props: any = []) {
  const { userList } = props;

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
          {userList.map((user: any) => (
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
