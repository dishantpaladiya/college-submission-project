import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';

const MyDialog = ({open , setOpen , fetchApi , rowItem}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    console.log("rowItemrowItem",rowItem);

    useEffect(()=>{
        if(rowItem){
            setEmail(rowItem?.email || '')
            setPassword(rowItem?.password || '')
        }
        
    },[rowItem])
    

    const handleClose = () => {
        setOpen(false);
        resetForm()
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
    };

    const validateForm = () => {
        let isValid = true;

        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Email validation
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is not valid');
            isValid = false;
        }

        // Password validation
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            isValid = false;
        }

        return isValid;
    };

    const handleSave = async () => {
        if (!validateForm()) {
            return; // Stop if validation fails
        }
        if(rowItem){
            try {
                const response = await axios.post('http://localhost/projects/api/edit-api.php', {
                    email,
                    password,
                    id: rowItem.id
                } ,  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if(response.status === 200){
                    handleClose();
                    fetchApi() // Close the dialog after saving
                }
                else{
                    handleClose();
                }
            } catch (error) {
                console.error('Error:', error);
                // Optionally, handle error (e.g., show an error message)
            }
        }
        else{

            try {
                const response = await axios.post('http://localhost/projects/api/insertapi.php', {
                    email,
                    password,
                } ,  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if(response.status === 200){
                    handleClose();
                    fetchApi() // Close the dialog after saving
                }
                else{
                    handleClose();
                }
            } catch (error) {
                console.error('Error:', error);
                // Optionally, handle error (e.g., show an error message)
            }
        }

    };

    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{rowItem ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
            />
            <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
                Save
            </Button>
        </DialogActions>
    </Dialog>
    );
};

export default MyDialog;