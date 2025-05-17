

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
//     const txtimage = useRef();
//     const [details, setDetails] = useState('');
//     const [paragraph, setParagraph] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [nameError, setDetailsError] = useState('');
//     const [paragraphError, setParagraphError] = useState('');

//     useEffect(() => {
//         if (rowItem) {
//             setDetails(rowItem.details || '');
//             setParagraph(rowItem.paragraph || '');
//         } else {
//             // Reset fields if no rowItem is provided
//             setDetails('');
//             setParagraph('');
//         }
//     }, [rowItem]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const image = txtimage.current.files[0];

//         // Reset error messages
//         setDetailsError('');
//         setParagraphError('');

//         // Validation
//         let isValid = true;

//         if (!image) {
//             setResponseMessage('Image is required.');
//             setOpenSnackbar(true);
//             alert('Please enter an image');
//             isValid = false;
//         }

//         if (!details) {
//             setDetailsError('Banner name is required.');
//             isValid = false;
//         }

//         if (!paragraph) {
//             setParagraphError('Banner paragraph is required.');
//             isValid = false;
//         }

//         if (!isValid) {
//             return; // Stop if validation fails
//         }

//         const params = new FormData();
//         params.set('image', image);
//         params.set('details', details);
//         params.set('paragraph', paragraph);
//         if (rowItem) {
//             params.set('id', rowItem.id); // Only set id if rowItem exists
//         }

//         try {
//             const url = rowItem ? 'http://localhost/projects/banner_edit.php' : 'http://localhost/projects/banner_insert.php';
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
//         setDetails('');
//         setParagraph('');
//         setDetailsError('');
//         setParagraphError('');
//     };

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>{rowItem ? 'Edit Banner' : 'Add Banner'}</DialogTitle>
//             <DialogContent>
//                 <div>
//                     <input type="file" ref={txtimage} />
//                 </div>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     label="Heading Name"
//                     type="text"
//                     fullWidth
//                     variant="outlined"
//                     value={details}
//                     onChange={(e) => setDetails(e.target.value)}
//                     error={!!nameError}
//                     helperText={nameError}
//                 />
//                 <TextField
//                     margin="dense"
//                     label="Paragraph"
//                     type="text" 
//                     fullWidth
//                     variant="outlined"
//                     value={paragraph}
//                     onChange={(e) => setParagraph(e.target.value)}
//                     error={!!paragraphError}
//                     helperText={paragraphError}
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
//     const txtimage = useRef();
//     const [details, setDetails] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [detailsError, setDetailsError] = useState('');

//     useEffect(() => {
//         if (rowItem) {
//             setDetails(rowItem.details || '');
//         } else {
//             setDetails('');
//         }
//     }, [rowItem]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const image = txtimage.current.files[0];

//         setDetailsError('');

//         let isValid = true;

//         if (!image && !rowItem) {
//             setResponseMessage('Image is required.');
//             setOpenSnackbar(true);
//             alert('Please select an image');
//             isValid = false;
//         }

//         if (!details) {
//             setDetailsError('Details are required.');
//             isValid = false;
//         }

//         if (!isValid) return;

//         const params = new FormData();
//         if (image) params.set('image', image);
//         params.set('details', details);
//         if (rowItem) {
//             params.set('id', rowItem.id);
//         }

//         try {
//             const url = rowItem ? 'http://localhost/projects/services_update.php' : 'http://localhost/projects/services_add.php';
//             const response = await axios.post(url, params);
//             if (response.data.status === 'yes') {
//                 setResponseMessage("Data Successfully Saved.");
//                 fetchApi();
//             } else {
//                 setResponseMessage("Data Failed.");
//             }
//         } catch (error) {
//             console.error("There was an error!", error);
//             setResponseMessage("An error occurred while saving data.");
//         } finally {
//             setOpenSnackbar(true);
//             handleClose();
//         }
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setDetails('');
//         setDetailsError('');
//     };

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>{rowItem ? 'Edit Service' : 'Add Service'}</DialogTitle>
//             <DialogContent>
//                 <div>
//                     <input type="file" ref={txtimage} />
//                 </div>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     label="Service Details"
//                     type="text"
//                     fullWidth
//                     variant="outlined"
//                     value={details}
//                     onChange={(e) => setDetails(e.target.value)}
//                     error={!!detailsError}
//                     helperText={detailsError}
//                 />
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClose} color="primary">
//                     Cancel
//                 </Button>
//                 <Button onClick={handleSubmit} color="primary">
//                     {rowItem ? 'Update' : 'Add'}
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default MyDialog;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const MyDialog = ({ open, setOpen, fetchApi, rowItem }) => {
    const txtimage = useRef();
    const [details, setDetails] = useState("");
    
    useEffect(() => {
        setDetails(rowItem ? rowItem.details : "");
    }, [rowItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = txtimage.current.files[0];
        const params = new FormData();
        if (image) params.append("image", image);
        params.append("details", details);
        if (rowItem) params.append("id", rowItem.id);

        try {
            const url = rowItem ? "http://localhost/projects/services_edit.php" : "http://localhost/projects/services_insert.php";
            await axios.post(url, params);
            fetchApi();
        } catch (error) {
            console.error("Error saving service:", error);
        }
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{rowItem ? "Edit Service" : "Add Service"}</DialogTitle>
            <DialogContent>
                <input type="file" ref={txtimage} />
                <TextField fullWidth label="Service Details" value={details} onChange={(e) => setDetails(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleSubmit}>{rowItem ? "Update" : "Add"}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyDialog;