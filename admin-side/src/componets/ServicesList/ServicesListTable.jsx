// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// // import axios from 'axios';
// // import MyDialog from './MyDialog';

// // const StyledTableCell = styled(TableCell)(({ theme }) => ({
// //   [`&.${tableCellClasses.head}`]: {
// //     backgroundColor: theme.palette.common.black,
// //     color: theme.palette.common.white,
// //   },
// //   [`&.${tableCellClasses.body}`]: {
// //     fontSize: 14,
// //   },
// // }));

// // const StyledTableRow = styled(TableRow)(({ theme }) => ({
// //   '&:nth-of-type(odd)': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// //   '&:last-child td, &:last-child th': {
// //     border: 0,
// //   },
// // }));

// // export default function BannerListTable({ dataArray, fetchApi }) {
// //   const [openDialog, setOpenDialog] = React.useState(false);
// //   const [rowItem, setRowItem] = React.useState();

// //   const handleEdit = (data) => {
// //     setRowItem(data);
// //     setOpenDialog(true);
// //   };

// //   const handleDelete = async (ID) => {
// //     try {
// //       const response = await axios.post('http://localhost/projects/banner_delete.php', {
// //         id: ID
// //       }, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });
// //       if (response.status === 200) {
// //         fetchApi(); // Refresh the table after deletion
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <TableContainer component={Paper} style={{ width: "100%" , maxHeight :"350px" , overflow :"auto"}}>
// //       <Table sx={{ minWidth: 1200, width: "100%" }} aria-label="customized table">
// //         <TableHead>
// //           <TableRow>
// //             <StyledTableCell>ID</StyledTableCell>
// //             <StyledTableCell align="left">Image</StyledTableCell>
// //             {/* <StyledTableCell align="left">Heading</StyledTableCell> */}
// //             <StyledTableCell align="left">Paragraph</StyledTableCell>
// //             <StyledTableCell align="left">Action</StyledTableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {dataArray.map((row) => (
// //             <StyledTableRow key={row.id}>
// //               <StyledTableCell component="th" scope="row">
// //                 {row.id}
// //               </StyledTableCell>
// //               <StyledTableCell align="left">
// //                 <img style={{ width: "80px" }} src={`http://localhost/projects/assets/images/${row.image}`} alt="not found" />
// //               </StyledTableCell>
// //               {/* <StyledTableCell align="left">{row.details}</StyledTableCell> */}
// //               <StyledTableCell align="left">{row.paragraph}</StyledTableCell>
// //               <StyledTableCell align="left">
// //                 <ModeEditOutlineIcon style={{ cursor: "pointer", fontSize: "20px", marginRight: "10px" }} onClick={() => handleEdit(row)} />
// //                 <DeleteIcon style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => handleDelete(row.id)} />
// //               </StyledTableCell>
// //             </StyledTableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //       <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchApi} rowItem={rowItem} />
// //     </TableContainer>
// //   );
// // }
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import axios from 'axios';
// import MyDialog from './MyDialog';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// export default function ServicesListTable({ dataArray, fetchApi }) {
//   const [openDialog, setOpenDialog] = React.useState(false);
//   const [rowItem, setRowItem] = React.useState();

//   const handleEdit = (data) => {
//     setRowItem(data);
//     setOpenDialog(true);
//   };

//   const handleDelete = async (ID) => {
//     try {
//       const response = await axios.post('http://localhost/projects/services_delete.php', { id: ID });
//       if (response.status === 200) {
//         fetchApi();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <TableContainer component={Paper} style={{ width: "100%", maxHeight: "350px", overflow: "auto" }}>
//       <Table sx={{ minWidth: 800 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>ID</StyledTableCell>
//             <StyledTableCell align="left">Image</StyledTableCell>
//             <StyledTableCell align="left">Details</StyledTableCell>
//             <StyledTableCell align="left">Action</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {dataArray.map((row) => (
//             <StyledTableRow key={row.id}>
//               <StyledTableCell component="th" scope="row">
//                 {row.id}
//               </StyledTableCell>
//               <StyledTableCell align="left">
//                 <img style={{ width: "80px" }} src={`http://localhost/projects/assets/images/${row.image}`} alt="not found" />
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.details}</StyledTableCell>
//               <StyledTableCell align="left">
//                 <ModeEditOutlineIcon style={{ cursor: "pointer", fontSize: "20px", marginRight: "10px" }} onClick={() => handleEdit(row)} />
//                 <DeleteIcon style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => handleDelete(row.id)} />
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchApi} rowItem={rowItem} />
//     </TableContainer>
//   );
// }

// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import axios from "axios";
// import MyDialog from "./MyDialog";

// const ServicesListTable = ({ dataArray, fetchApi }) => {
//     const [openDialog, setOpenDialog] = useState(false);
//     const [rowItem, setRowItem] = useState(null);

//     const handleEdit = (data) => {
//         setRowItem(data);
//         setOpenDialog(true);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.post("http://localhost/projects/services_delete.php", { id });
//             fetchApi();
//         } catch (error) {
//             console.error("Error deleting service:", error);
//         }
//     };

//     return (
//         <TableContainer component={Paper}>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>ID</TableCell>
//                         <TableCell>Image</TableCell>
//                         <TableCell>Details</TableCell>
//                         <TableCell>Actions</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {dataArray.map((row) => (
//                         <TableRow key={row.id}>
//                             <TableCell>{row.id}</TableCell>
//                             <TableCell>
//                                 <img src={`http://localhost/projects/assets/images/${row.image}`} alt="service" width="80" />
//                             </TableCell>
//                             <TableCell>{row.details}</TableCell>
//                             <TableCell>
//                                 <ModeEditOutlineIcon onClick={() => handleEdit(row)} />
//                                 <DeleteIcon onClick={() => handleDelete(row.id)} />
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//             <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchApi} rowItem={rowItem} />
//         </TableContainer>
//     );
// };

// export default ServicesListTable;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import axios from 'axios';
// import MyDialog from './MyDialog';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// export default function ServicesListTable({ dataArray, fetchApi }) {
//   const [openDialog, setOpenDialog] = React.useState(false);
//   const [rowItem, setRowItem] = React.useState();

//   const handleEdit = (data) => {
//     setRowItem(data);
//     setOpenDialog(true);
//   };

//   const handleDelete = async (ID) => {
//     try {
//       const response = await axios.post('http://localhost/projects/services_delete.php', {
//         id: ID
//       }, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       if (response.status === 200) {
//         fetchApi();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <TableContainer component={Paper} style={{ width: '100%', maxHeight: '350px', overflow: 'auto' }}>
//       <Table sx={{ minWidth: 1200, width: '100%' }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>ID</StyledTableCell>
//             <StyledTableCell align="left">Image</StyledTableCell>
//             <StyledTableCell align="left">Details</StyledTableCell>
//             <StyledTableCell align="left">Action</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {dataArray.map((row) => (
//             <StyledTableRow key={row.id}>
//               <StyledTableCell component="th" scope="row">
//                 {row.id}
//               </StyledTableCell>
//               <StyledTableCell align="left">
//                 <img style={{ width: '80px' }} src={`http://localhost/projects/assets/images/${row.image}`} alt="not found" />
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.details}</StyledTableCell>
//               <StyledTableCell align="left">
//                 <ModeEditOutlineIcon style={{ cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} onClick={() => handleEdit(row)} />
//                 <DeleteIcon style={{ cursor: 'pointer', fontSize: '20px' }} onClick={() => handleDelete(row.id)} />
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchApi} rowItem={rowItem} />
//     </TableContainer>
//   );
// }
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ServicesListTable({ dataArray, fetchApi }) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [rowItem, setRowItem] = React.useState(null);

  const handleEdit = (data) => {
    setRowItem(data);
    setOpenDialog(true);
  };

  const handleDelete = async (ID) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await axios.post(
        'http://localhost/projects/services_delete.php',
        JSON.stringify({ id: ID }), // Ensure JSON format
        {
          headers: {
            'Content-Type': 'application/json', // Correct content type
          },
        }
      );

      if (response.data.status === 'yes') {
        alert('Service deleted successfully');
        fetchApi(); // Refresh the data
      } else {
        alert('Failed to delete: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error deleting service');
    }
  };

  return (
    <TableContainer component={Paper} style={{ width: '100%', maxHeight: '350px', overflow: 'auto' }}>
      <Table sx={{ minWidth: 1200, width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="left">Details</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArray.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">
                <img style={{ width: '80px' }} src={`http://localhost/projects/assets/images/${row.image}`} alt="not found" />
              </StyledTableCell>
              <StyledTableCell align="left">{row.details}</StyledTableCell>
              <StyledTableCell align="left">
                <ModeEditOutlineIcon
                  style={{ cursor: 'pointer', fontSize: '20px', marginRight: '10px' }}
                  onClick={() => handleEdit(row)}
                />
                <DeleteIcon
                  style={{ cursor: 'pointer', fontSize: '20px'}}
                  onClick={() => handleDelete(row.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchApi} rowItem={rowItem} />
    </TableContainer>
  );
}
