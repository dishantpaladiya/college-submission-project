
// import React, { useEffect, useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
// import axios from "axios";
// import MyDialog from "./MyDialog";

// const FnqListTable = () => {
//   const [rows, setRows] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);

//   const fetchApi = async () => {
//     try {
//       const response = await axios.get("http://localhost/projects/fnq_view.php");
//       setRows(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const handleEdit = (row) => {
//     setSelectedRow(row);
//     setOpen(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.post(
//         "http://localhost/projects/fnq_delete.php",
//         { id },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       if (response.data.status === "yes") fetchApi();
//       else console.error("Delete Failed:", response.data.error);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <Button variant="contained" color="primary" onClick={() => { setSelectedRow(null); setOpen(true); }}>
//         Add FAQ
//       </Button>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Question</TableCell>
//               <TableCell>Answer</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.que}</TableCell>
//                 <TableCell>{row.ans}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleEdit(row)} color="primary">Edit</Button>
//                   <Button onClick={() => handleDelete(row.id)} color="secondary">Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <MyDialog open={open} setOpen={setOpen} rowItem={selectedRow} fetchApi={fetchApi} />
//     </>
//   );
// };

// export default FnqListTable;
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
import Button from '@mui/material/Button';
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const FnqListTable = ({ dataArray, fetchApi }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleEdit = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost/projects/fnq_delete.php",
        { id },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.status === "yes") {
        fetchApi();
      } else {
        console.error("Delete Failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <TableContainer component={Paper} style={{ width: "100%", maxHeight: "350px", overflow: "auto" }}>
        <Table sx={{ minWidth: 1200 ,width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Question</StyledTableCell>
              <StyledTableCell>Answer</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.que}</StyledTableCell>
                <StyledTableCell>{row.ans}</StyledTableCell>
                <StyledTableCell>
                  <ModeEditOutlineIcon
                    style={{ cursor: "pointer", fontSize: "20px", marginRight: "10px" }}
                    onClick={() => handleEdit(row)}
                  />
                  <DeleteIcon
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onClick={() => handleDelete(row.id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MyDialog open={openDialog} setOpen={setOpenDialog} rowItem={selectedRow} fetchApi={fetchApi} />
    </>
  );
};

export default FnqListTable;