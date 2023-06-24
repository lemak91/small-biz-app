import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
const Listing = (props) => {
  return (
    <>
      <Container sx={{ marginTop: "4rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listing.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell>{listing["name"]}</TableCell>
                <TableCell>{listing["description"]}</TableCell>
                <TableCell>{listing["hours"]}</TableCell>
                <TableCell>{listing["address"]}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

export default Listing;
