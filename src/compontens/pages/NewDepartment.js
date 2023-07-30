import Appbar from '../Appbar';
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button } from '@material-ui/core';
import Fields from '../Fields';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';





export default function NewDepartment() {
    const paperstyle= {padding: '20px 70px', minWidth: "300px",  }
    const [depName, setdepName]=useState('')
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false);


    const handleClick=(e)=>{
        e.preventDefault()
        
        if(depName!=""){
          setError(false);
          fetch("http://localhost:8080/departments",{
              method : "POST",
              headers:{"Content-Type":"application/json"},
              body: JSON.stringify({
                "depName": depName,
              })
    
          }).then(()=>{
              console.log("New Department added");
              setOpen(true);
          }) 
        }
        else{
          setError(true);
        }
    }
    return (
        <>
        <Appbar></Appbar>
        <Fields></Fields>
        <center>
          <Box
            sx={{width: "fit-content"}}
            component="form"
            noValidate
            autoComplete="off"
          ><Container>
            <center>
            <Paper elavation = {5} style = {paperstyle}>
                      <h1 style ={{color: "black"}}><u>Give a new Department</u></h1>
                
                <TextField id="outlined-basic" label="First name" variant="outlined"
                value={depName}
                onChange= {(e)=>setdepName(e.target.value)}
                error={error}/>
                <br/> 
                <br/> 
                <Button variant="contained" color="primary" onClick={handleClick}>
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
                    New Department created successfully!
                  </Alert>
                 </Collapse>
            </Paper>
            </center>
          </Container>
          
          </Box>
        </center>
        </>
      );
}