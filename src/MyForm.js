import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MyForm(props) {

  const [form,setform] = useState({

    firstName : "",
    lastName : "",
    Address1: "",
    Address2: "",
    
  })

  const handleChange = (e)=>{

    setform({...form,[e.target.name]: e.target.value});

  }

  const handleSave = (e)=>{

    props.handleClose();

    let d = [...props.arraydata];

    d.push(form);

    props.arraysetData(d);
  }


  return (
    <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="first Name"
            type="text"
            fullWidth
            variant="standard"
            name='firstName'
            onChange={handleChange}
          />
            <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            name='lastName'
            fullWidth
            variant="standard"
            onChange={handleChange}
          />

<TextField
            autoFocus
            margin="dense"
            id="Address1"
            label="Address1"
            type="text"
            name='Address1'
            fullWidth
            variant="standard"
            onChange={handleChange}
          />

<TextField
            autoFocus
            id="Address2"
            label="Address2"
            type="text"
            name='Address2'
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
  )
}
