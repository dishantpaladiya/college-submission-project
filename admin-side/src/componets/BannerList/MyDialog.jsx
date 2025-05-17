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
//     const [name, setDetails] = useState('');
//     const [paragraph, setParagraph] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [nameError, setDetailsError] = useState('');
//     const [paragraphError, setParagraphError] = useState('');

//     useEffect(() => {
//         if (rowItem) {
//             setDetails(rowItem?.name || '')
//             setParagraph(rowItem?.paragraph || '')
//         }
//     }, [rowItem])

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
//             alert('Please enter a image')
//             isValid = false;
//         }

//         if (!name) {
//             setDetailsError('Banner name is required.');
//             isValid = false;
//         }

//         if (!paragraph) {
//             setParagraphError('Banner paragraph is required.');
//             isValid = false;
//         } else if (isNaN(paragraph) || parseFloat(paragraph) <= 0) {
//             setParagraphError('paragraph must be a positive number.');
//             isValid = false;
//         }

//         if (!isValid) {
//             return; // Stop if validation fails
//         }

//         const params = new FormData();
//         params.set('image', image);
//         params.set('name', name);
//         params.set('paragraph', paragraph);
//         params.set('id', rowItem.id);


//         if (rowItem) {
//             try {
//                 const response = await axios.post('http://localhost/projects/Banner_edit.php', params);
//                 if (response.data.status === 'yes') {
//                     setResponseMessage("Data Successfully Inserted.");
//                     fetchApi();
//                 } else {
//                     setResponseMessage("Data Failed.");
//                 }
//             } catch (error) {
//                 console.error("There was an error!", error);
//                 setResponseMessage("An error occurred while inserting data.");
//             } finally {
//                 setOpenSnackbar(true);
//                 handleClose();
//             }
//         }
//         else {
//             try {
//                 const response = await axios.post('http://localhost/projects/Banner_insert.php', params);
//                 if (response.data.status === 'yes') {
//                     setResponseMessage("Data Successfully Inserted.");
//                     fetchApi();
//                 } else {
//                     setResponseMessage("Data Failed.");
//                 }
//             } catch (error) {
//                 console.error("There was an error!", error);
//                 setResponseMessage("An error occurred while inserting data.");
//             } finally {
//                 setOpenSnackbar(true);
//                 handleClose();
//             }

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
//             <DialogTitle>Add Banner</DialogTitle>
//             <DialogContent>
//                 <div>
//                     <input type="file" ref={txtimage} />
//                 </div>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     label="Banner Name"
//                     type="text"
//                     fullWidth
//                     variant="outlined"
//                     value={name}
//                     onChange={(e) => setDetails(e.target.value)}
//                     error={!!nameError}
//                     helperText={nameError}
//                 />
//                 <TextField
//                     margin="dense"
//                     label="Banner paragraph"
//                     type="nuber"
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
//                     Add
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default MyDialog;



import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';

const MyDialog = ({ open, setOpen, fetchApi, rowItem }) => {
    const txtimage = useRef();
    const [details, setDetails] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [nameError, setDetailsError] = useState('');
    const [paragraphError, setParagraphError] = useState('');

    useEffect(() => {
        if (rowItem) {
            setDetails(rowItem.details || '');
            setParagraph(rowItem.paragraph || '');
        } else {
            // Reset fields if no rowItem is provided
            setDetails('');
            setParagraph('');
        }
    }, [rowItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = txtimage.current.files[0];

        // Reset error messages
        setDetailsError('');
        setParagraphError('');

        // Validation
        let isValid = true;

        if (!image) {
            setResponseMessage('Image is required.');
            setOpenSnackbar(true);
            alert('Please enter an image');
            isValid = false;
        }

        if (!details) {
            setDetailsError('Banner name is required.');
            isValid = false;
        }

        if (!paragraph) {
            setParagraphError('Banner paragraph is required.');
            isValid = false;
        }

        if (!isValid) {
            return; // Stop if validation fails
        }

        const params = new FormData();
        params.set('image', image);
        params.set('details', details);
        params.set('paragraph', paragraph);
        if (rowItem) {
            params.set('id', rowItem.id); // Only set id if rowItem exists
        }

        try {
            const url = rowItem ? 'http://localhost/projects/banner_edit.php' : 'http://localhost/projects/banner_insert.php';
            const response = await axios.post(url, params);
            if (response.data.status === 'yes') {
                setResponseMessage("Data Successfully Inserted.");
                fetchApi();
            } else {
                setResponseMessage("Data Failed.");
            }
        } catch (error) {
            console.error("There was an error!", error);
            setResponseMessage("An error occurred while inserting data.");
        } finally {
            setOpenSnackbar(true);
            handleClose();
        }
    };

    const handleClose = () => {
        setOpen(false);
        setDetails('');
        setParagraph('');
        setDetailsError('');
        setParagraphError('');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{rowItem ? 'Edit Banner' : 'Add Banner'}</DialogTitle>
            <DialogContent>
                <div>
                    <input type="file" ref={txtimage} />
                </div>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Heading Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    error={!!nameError}
                    helperText={nameError}
                />
                <TextField
                    margin="dense"
                    label="Paragraph"
                    type="text" 
                    fullWidth
                    variant="outlined"
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                    error={!!paragraphError}
                    helperText={paragraphError}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    {rowItem ? 'Update' : 'Add'} {/* Change button text based on action */}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyDialog;