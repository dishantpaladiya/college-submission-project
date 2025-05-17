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
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [nameError, setNameError] = useState('');
//     const [priceError, setPriceError] = useState('');

//     useEffect(() => {
//         if (rowItem) {
//             setName(rowItem?.name || '')
//             setPrice(rowItem?.price || '')
//         }
//     }, [rowItem])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const image = txtimage.current.files[0];

//         // Reset error messages
//         setNameError('');
//         setPriceError('');

//         // Validation
//         let isValid = true;

//         if (!image) {
//             setResponseMessage('Image is required.');
//             setOpenSnackbar(true);
//             alert('Please enter a image')
//             isValid = false;
//         }

//         if (!name) {
//             setNameError('Product name is required.');
//             isValid = false;
//         }

//         if (!price) {
//             setPriceError('Product price is required.');
//             isValid = false;
//         } else if (isNaN(price) || parseFloat(price) <= 0) {
//             setPriceError('Price must be a positive number.');
//             isValid = false;
//         }

//         if (!isValid) {
//             return; // Stop if validation fails
//         }

//         const params = new FormData();
//         params.set('image', image);
//         params.set('name', name);
//         params.set('price', price);
//         params.set('id', rowItem.id);


//         if (rowItem) {
//             try {
//                 const response = await axios.post('http://localhost/projects/product_edit.php', params);
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
//                 const response = await axios.post('http://localhost/projects/product_insert.php', params);
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
//         setName('');
//         setPrice('');
//         setNameError('');
//         setPriceError('');
//     };





//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Add Product</DialogTitle>
//             <DialogContent>
//                 <div>
//                     <input type="file" ref={txtimage} />
//                 </div>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     label="Product Name"
//                     type="text"
//                     fullWidth
//                     variant="outlined"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     error={!!nameError}
//                     helperText={nameError}
//                 />
//                 <TextField
//                     margin="dense"
//                     label="Product Price"
//                     type="nuber"
//                     fullWidth
//                     variant="outlined"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     error={!!priceError}
//                     helperText={priceError}
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
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [nameError, setNameError] = useState('');
    const [priceError, setPriceError] = useState('');

    useEffect(() => {
        if (rowItem) {
            setName(rowItem.name || '');
            setPrice(rowItem.price || '');
        } else {
            // Reset fields if no rowItem is provided
            setName('');
            setPrice('');
        }
    }, [rowItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = txtimage.current.files[0];

        // Reset error messages
        setNameError('');
        setPriceError('');

        // Validation
        let isValid = true;

        if (!image) {
            setResponseMessage('Image is required.');
            setOpenSnackbar(true);
            alert('Please enter an image');
            isValid = false;
        }

        if (!name) {
            setNameError('Product name is required.');
            isValid = false;
        }

        if (!price) {
            setPriceError('Product price is required.');
            isValid = false;
        } else if (isNaN(price) || parseFloat(price) <= 0) {
            setPriceError('Price must be a positive number.');
            isValid = false;
        }

        if (!isValid) {
            return; // Stop if validation fails
        }

        const params = new FormData();
        params.set('image', image);
        params.set('name', name);
        params.set('price', price);
        if (rowItem) {
            params.set('id', rowItem.id); // Only set id if rowItem exists
        }

        try {
            const url = rowItem ? 'http://localhost/projects/product_edit.php' : 'http://localhost/projects/product_insert.php';
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
        setName('');
        setPrice('');
        setNameError('');
        setPriceError('');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{rowItem ? 'Edit Product' : 'Add Product'}</DialogTitle>
            <DialogContent>
                <div>
                    <input type="file" ref={txtimage} />
                </div>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Product Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!nameError}
                    helperText={nameError}
                />
                <TextField
                    margin="dense"
                    label="Product Price"
                    type="number" // Corrected from 'nuber' to 'number'
                    fullWidth
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    error={!!priceError}
                    helperText={priceError}
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