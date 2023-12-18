import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';

export default function DisplayData(props) {

    const columns = [
        { field: 'firstName', headerName: 'first Name', width: 150 },
        { field: 'lastName', headerName: 'last Name', width: 150 },
        { field: 'Address1', headerName: 'Address1', width: 150 },
        { field: 'Address2', headerName: 'Address2', width: 150
    
    
    
    },
    {
        
            field: 'action',
            headerName: 'Action',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const onClick = (e) => {
                  const currentRow = params.row;
                  return alert(JSON.stringify(currentRow, null, 4));
                };
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small">Edit</Button>
                    <Button variant="outlined" color="error" size="small" >Delete</Button>
                  </Stack>
                );
            }

    }

    



      ];

  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={props.rows} columns={columns} />
  </div>
  )
}
