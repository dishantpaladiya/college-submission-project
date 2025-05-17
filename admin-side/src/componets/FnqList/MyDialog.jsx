// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import {
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     TextField,
// } from '@mui/material';

// const MyDialog = ({ open, setOpen, fetchApi, rowItem }) => {
//     const [que, setQue] = useState('');
//     const [ans, setAns] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [queError, setQueError] = useState('');
//     const [ansError, setAnsError] = useState('');

//     useEffect(() => {
//         if (rowItem) {
//             setQue(rowItem.que || '');
//             setAns(rowItem.ans || '');
//         } else {
//             // Reset fields if no rowItem is provided
//             setQue('');
//             setAns('');
//         }
//     }, [rowItem]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Reset error messages
//         setQueError('');
//         setAnsError('');

//         // Validation
//         let isValid = true;

//         if (!que) {
//             setQueError('Question is required.');
//             isValid = false;
//         }

//         if (!ans) {
//             setAnsError('Answer is required.');
//             isValid = false;
//         }

//         if (!isValid) {
//             return; // Stop if validation fails
//         }

//         const params = {
//             que: que,
//             ans: ans,
//         };
//         if (rowItem) {
//             params.id = rowItem.id; // Only set id if rowItem exists
//         }

//         try {
//             const url = rowItem ? 'http://localhost/projects/fnq_edit.php' : 'http://localhost/projects/fnq_insert.php';
//             const response = await axios.post(url, params);
//             if (response.data.status === 'yes') {
//                 setResponseMessage("Data Successfully Inserted.");
//                 fetchApi();
//             } else {
//                 setResponseMessage("Data Failed.");
//             }
//         } catch (error) {
//             console.error("There was an error!", error);
//             setResponseMessage("An error occurred while inserting data.");
//         } finally {
//             setOpenSnackbar(true);
//             handleClose();
//         }
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setQue('');
//         setAns('');
//         setQueError('');
//         setAnsError('');
//     };

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>{rowItem ? 'Edit Question' : 'Add Question'}</DialogTitle>
//             <DialogContent>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     label="Question"
//                     type="text"
//                     fullWidth
//                     variant="outlined"
//                     value={que}
//                     onChange={(e) => setQue(e.target.value)}
//                     error={!!queError}
//                     helperText={queError}
//                 />
//                 <TextField
//                     margin="dense"
//                     label="Answer"
//                     type="text" 
//                     fullWidth
//                     variant="outlined"
//                     value={ans}
//                     onChange={(e) => setAns(e.target.value)}
//                     error={!!ansError}
//                     helperText={ansError}
//                 />
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClose} color="primary">
//                     Cancel
//                 </Button>
//                 <Button onClick={handleSubmit} color="primary">
//                     {rowItem ? 'Update' : 'Add'} {/* Change button text based on action */}
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default MyDialog;

import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import axios from "axios";

const MyDialog = ({ open, setOpen, rowItem, fetchApi }) => {
  const [que, setQue] = useState(rowItem ? rowItem.que : "");
  const [ans, setAns] = useState(rowItem ? rowItem.ans : "");
  const [queError, setQueError] = useState("");
  const [ansError, setAnsError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQueError(que ? "" : "Question is required.");
    setAnsError(ans ? "" : "Answer is required.");

    if (!que || !ans) return;

    const params = { que, ans };
    if (rowItem) params.id = rowItem.id;

    try {
      const url = rowItem ? "http://localhost/projects/fnq_edit.php" : "http://localhost/projects/fnq_insert.php";
      const response = await axios.post(url, params, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.status === "yes") {
        fetchApi();
        setOpen(false);
      } else {
        console.error("Operation failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{rowItem ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Question"
          fullWidth
          value={que}
          onChange={(e) => setQue(e.target.value)}
          error={!!queError}
          helperText={queError}
          margin="dense"
        />
        <TextField
          label="Answer"
          fullWidth
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          error={!!ansError}
          helperText={ansError}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">{rowItem ? "Update" : "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;