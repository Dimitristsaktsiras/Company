
import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Appbar from '../Appbar'
import {Container, Paper, Button } from '@material-ui/core';
import Fields from '../Fields';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
 


export default function Employees() {
  const [Employee, setEmployees]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8080/employee/getEmployees")
    .then(Response=>Response.json())
    .then((result)=>{
      setEmployees(result)
    }
    )
},[])

function deleteEmployee(empId) {
  fetch("http://localhost:8080/employee/delete/" + empId, {
    method: 'DELETE'
  })
    .then(result => {
      setEmployees(currentEmployee => currentEmployee.filter(Employee => Employee.empId !== empId));
    })
    .catch(error => {
      console.error("Error deleting employee:", error);
    });
}
  return ( 
    <>
    <Appbar></Appbar>
    <Fields></Fields>
    <Paper>
    <h2 style ={{color: "black"}}><center><u> Employees</u></center></h2>

      {Employee.map(Employee=>(
      <Paper elavation = {5} style = {{margin:"20px auto",width:"300", padding:"50px 100px",textAlign:"left"}} key={Employee.empId}>
        <center>
        <Tooltip title="AssignmentInd">
          <IconButton>
            <AssignmentIndIcon />
          </IconButton>
        </Tooltip>
        <b>First Name</b>:&nbsp;{Employee.firstName}<br/>
        <Tooltip title="AssignmentInd">
          <IconButton>
            <AssignmentIndIcon />
          </IconButton>
        </Tooltip>
        <b>Last Name</b>:&nbsp; {Employee.lastName}<br/>
        <Tooltip title="Phone">
          <IconButton>
            <LocalPhoneIcon />
          </IconButton>
        </Tooltip>
        <b>Phone Number</b>:&nbsp;{Employee.phoneNumber}<br/>
        <Tooltip title="Email">
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <b>Email</b>: &nbsp;{Employee.email}<br/>
        <Tooltip title="Department">
          <IconButton>
            <FingerprintIcon />
          </IconButton>
        </Tooltip>
        <b>Department</b>: &nbsp;
        {Employee.department ? (
          <React.Fragment>
           &nbsp;
           {Employee.department.depName}
          </React.Fragment>
        ) : (
          "None"
        )}
      <br/>
        <Tooltip title="project">
          <IconButton>
            <AssignmentIcon />
          </IconButton>
        </Tooltip>
        <b>Assigned Projects</b>: &nbsp;{Employee.assignedProjects.length>0 ? Employee.assignedProjects.map(project=>(
        <>
        <br/>
        &nbsp;&nbsp;
        <Tooltip title="project" size="small">
          <IconButton>
            <ArrowRightIcon  />
          </IconButton>
        </Tooltip>
        {project.projectName}
        </>
      ))
      : " None"
      }<br/>
      
      <button  onClick={() => deleteEmployee(Employee.empId)}>Delete Employee
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
    </button>
      </center>
      </Paper>
      
    

  
      ))}
      </Paper>
  </>
);
}
