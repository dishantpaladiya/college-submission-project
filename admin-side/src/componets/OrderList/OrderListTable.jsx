

// // UserListTable.jsx
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

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
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// export default function UserListTable({ dataArray }) {
//   // Group orders by ID
//   const groupedOrders = dataArray.reduce((acc, row) => {
//     const products = JSON.parse(row?.products); // Assuming products is a JSON string
//     acc[row.id] = acc[row.id] || { ...row, products: [] };
//     acc[row.id].products.push(...products);
//     return acc;
//   }, {});

//   // Convert the grouped orders object to an array of objects
//   const groupedOrdersArray = Object.values(groupedOrders);

//   return (
//     <TableContainer component={Paper} style={{ width: "100%" , maxHeight :"350px" , overflow :"auto" }}>
//       <Table sx={{ minWidth: 1200, width: "100%" }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>ID</StyledTableCell>
//             <StyledTableCell align="left">Products</StyledTableCell>
//             <StyledTableCell align="left">Email</StyledTableCell>
//             <StyledTableCell align="left">Mobile Number</StyledTableCell>
//             <StyledTableCell align="left">Total Amount</StyledTableCell>
//             <StyledTableCell align="left">Address</StyledTableCell>
//             <StyledTableCell align="left">Cash On Delivery</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {groupedOrdersArray.map((row) => {
//             return row.products.map((product, index) => (
//               <StyledTableRow key={`${row.id}-${index}`}>
//                 {index === 0 ? (
//                   <>
//                     <StyledTableCell component="th" scope="row">
//                       {row.id}
//                     </StyledTableCell>
//                     <StyledTableCell align="left">{product.name}</StyledTableCell>
//                     <StyledTableCell align="left">{row.email}</StyledTableCell>
//                     <StyledTableCell align="left">{row.mobileNumber}</StyledTableCell>
//                     <StyledTableCell align="left">{row.totalAmount}</StyledTableCell>
//                     <StyledTableCell align="left">{row.address}</StyledTableCell>
//                     <StyledTableCell align="left">{row.cashOnDelivery === '1' ? "Yes" : "No"}</StyledTableCell>
//                   </>
//                 ) : (
//                   <>
//                     <StyledTableCell component="th" scope="row" />
//                     <StyledTableCell align="left">{product.name}</StyledTableCell>
//                     <StyledTableCell align="left" />
//                     <StyledTableCell align="left" />
//                     <StyledTableCell align="left" />
//                     <StyledTableCell align="left" />
//                     <StyledTableCell align="left" />
//                   </>
//                 )}
//               </StyledTableRow>
//             ));
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// UserListTable.jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function UserListTable({ dataArray }) {
  // Group orders by ID
  const groupedOrders = dataArray.reduce((acc, row) => {
    const products = JSON.parse(row?.products || '[]'); // Handle potential empty products string
    acc[row.id] = acc[row.id] || { ...row, products: [] };
    acc[row.id].products.push(...products);
    return acc;
  }, {});

  const groupedOrdersArray = Object.values(groupedOrders);

  return (
    <TableContainer component={Paper} style={{ width: "100%", maxHeight: "350px", overflow: "auto" }}>
      <Table sx={{ minWidth: 1200, width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Products</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile Number</StyledTableCell>
            <StyledTableCell align="left">Total Amount</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Cash On Delivery</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groupedOrdersArray.map((row) => {
            return row.products.map((product, index) => {
              // Only render rows where the product name is not empty
              if (!product.name) return null; // Skip empty product rows
              
              return (
                <StyledTableRow key={`${row.id}-${index}`}>
                  {index === 0 ? (
                    <>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="left">{product.name}</StyledTableCell>
                      <StyledTableCell align="left">{row.email}</StyledTableCell>
                      <StyledTableCell align="left">{row.mobileNumber}</StyledTableCell>
                      <StyledTableCell align="left">{row.totalAmount}</StyledTableCell>
                      <StyledTableCell align="left">{row.address}</StyledTableCell>
                      <StyledTableCell align="left">{row.cashOnDelivery === '1' ? "Yes" : "No"}</StyledTableCell>
                    </>
                  ) : (
                    <>
                      <StyledTableCell component="th" scope="row" />
                      <StyledTableCell align="left">{product.name}</StyledTableCell>
                      <StyledTableCell align="left" />
                      <StyledTableCell align="left" />
                      <StyledTableCell align="left" />
                      <StyledTableCell align="left" />
                      <StyledTableCell align="left" />
                    </>
                  )}
                </StyledTableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}