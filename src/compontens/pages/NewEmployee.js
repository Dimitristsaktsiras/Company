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



export default function NewEmployee() {
  const paperstyle= {padding: '20px 70px', minWidth: "300px",  }
  const [First_Name, setFirstName]=useState('')
  const [Last_Name, setLastName]=useState('')
  const [email, setemail]=useState('')
  const [phone_number, setphone]=useState('')
  const [Department, setDepartment]=useState('')
  const [project_id, setproject_id]=useState('')
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);

  const handleClick=(e)=>{
    e.preventDefault()
    
    if(First_Name!=""){
      setError(false);
      fetch("http://localhost:8080/employee/save",{
          method : "POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            "firstName": First_Name,
            "lastName": Last_Name,
            "email": email,
            "phoneNumber": phone_number,
            "assignedProjects": [],
            "department": {Department},
          })

      }).then(()=>{
          console.log("New Employee added");
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
                  <h1 style ={{color: "black"}}><u>Write down the new Employee</u></h1>
            
            <TextField id="outlined-basic" label="First name" variant="outlined"
            value={First_Name}
            onChange= {(e)=>setFirstName(e.target.value)}
            error={error}/>
            <br/> 
            <TextField id="outlined-basic" label="Last name" variant="outlined"
            value={Last_Name}
            onChange= {(e)=>setLastName(e.target.value)}/>
            <br/> 
            <TextField id="outlined-basic" label="Email" variant="outlined"
            value={email}
            onChange= {(e)=>setemail(e.target.value)}/>
            <br/> 
            <TextField id="outlined-basic" label="Phone number" variant="outlined" 
            value={phone_number}
            onChange= {(e)=>setphone(e.target.value)}/><br/> 
           
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
                New Employee created successfully!
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