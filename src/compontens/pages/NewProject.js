import Appbar from '../Appbar';
import Fields from '../Fields';

import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button } from '@material-ui/core';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';



export default function NewProject() {
    const paperstyle={padding: '20px 70px', minWidth: "300px" }
    const [projectName, setName]=useState('')
    const [open, setOpen] = React.useState(false);


    const handleClick=(e)=>{
        e.preventDefault()
        const projects = {projectName}
        console.log(projects)
        fetch("http://localhost:8080/project/save",{
            method : "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(projects)

        }).then(()=>{
            setOpen(true);
            console.log("New Project added")
        })
    }
  return (
    <>
    <Appbar></Appbar>
    <Fields></Fields>
    <center>
      <Box
      component="form"
      sx={{width: "fit-content"}}
      noValidate
      autoComplete="off"
    >
        <center>
          <Paper elavation = {5} style = {paperstyle}>
                <h1 style ={{color: "black"}}><u>Give the Project name</u></h1>
          <TextField id="outlined-basic" label="Project name" variant="outlined"
          value={projectName}
          onChange= {(e)=>setName(e.target.value)}/>
          <br/>
          <Button variant="contained" color="primary" onClick={handleClick} sx={{display: "block"}}>
          Submit
          </Button>

          <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                New Project created successfully!
              </Alert>
             </Collapse>

          </Paper>
        </center>
      </Box>
    </center>
    </>
  );
}
