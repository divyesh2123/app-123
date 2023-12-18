import React, { useState } from 'react'
import MyForm from './MyForm';
import Button from '@mui/material/Button';
import DisplayData from './DisplayData';
export default function ParentC() {
    const [open, setOpen] = React.useState(false);

    const [data,setData]= useState([]);


    console.log(data);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
         <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <MyForm open={open} handleClose={handleClose}

        arraydata = {data}
        arraysetData={setData}
      />

      <DisplayData rows={data}/>



    </div>
  )
}
