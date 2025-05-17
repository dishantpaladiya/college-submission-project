import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import axios from 'axios';
import MyDialog from './MyDialog';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function UserListTable({ dataArray, fetchApi }) {
  const [opneDailog, setOpenDailog] = React.useState(false);
  const [rowItem, setRowItem] = React.useState();

  const hendaleEdit = async (Data) => {
    setRowItem(Data)
    setOpenDailog(true)
  }


  const hendaleDelete = async (ID) => {
    try {
      const response = await axios.post('http://localhost/projects/product_delete.php', {
        id: ID
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        fetchApi() // Close the dialog after saving
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  }
  return (
    <TableContainer component={Paper} style={{ width: "100%" , maxHeight :"350px" , overflow :"auto" }}>
      <Table sx={{ minWidth: 1200, width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArray.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left"><img style={{ width: "80px" }} src={`http://localhost/projects/assets/images/${row.image}`} alt="not found" /></StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.price}.00 ₹</StyledTableCell>
              <StyledTableCell align="left" >
                <ModeEditOutlineIcon style={{ cursor: "pointer", fontSize: "20px", marginRight: "10px" }} onClick={() => hendaleEdit(row)} />
                <DeleteIcon style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => hendaleDelete(row.id)} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <MyDialog open={opneDailog} setOpen={setOpenDailog} fetchApi={fetchApi} rowItem={rowItem}/>
    </TableContainer>
  );
}
