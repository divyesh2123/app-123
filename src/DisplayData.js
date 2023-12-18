import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayData(props) {

    const columns = [
        { field: 'firstName', headerName: 'first Name', width: 150 },
        { field: 'lastName', headerName: 'last Name', width: 150 },
        { field: 'Address1', headerName: 'Address1', width: 150 },
        { field: 'Address2', headerName: 'Address2', width: 150 },
      ];

  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={props.rows} columns={columns} />
  </div>
  )
}
