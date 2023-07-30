import Appbar from '../Appbar';
import React, {useEffect, useState} from 'react'
import {Container, Paper, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NewEmployee from './NewProject';
import Fields from '../Fields';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



export default function Departments() {
    const [departments, setDepartments]=useState([])



    useEffect(()=>{
        fetch("http://localhost:8080/departments")
        .then(Response=>Response.json())
        .then((result)=>{
            setDepartments(result)
        }
        )
    },[])
    
      function deleteDepartment(depId) {
        fetch("http://localhost:8080/departments/" + depId, {
          method: 'DELETE'
        })
          .then(result => {
            setDepartments(currentDepartments => currentDepartments.filter(Departments => Departments.depId !== depId));
          })
          .catch(error => {
            console.error("Error deleting project:", error);
          });
      }
    
      return (
        <>
          <Appbar />
          <Fields />
          <Paper>
            <center>
              <h2 style={{ color: "black" }}><u> Departments</u></h2>
              {departments.map(NewDepartments => (
                <Paper elevation={5} style={{ margin: "20px auto", width: 300, padding: "50px 100px", textAlign: "left" }} key={NewDepartments.depId}>
        
                  <b>Department Name</b>: &nbsp;{NewDepartments.depName}<br />
                  <button onClick={() => deleteDepartment(NewDepartments.depId)}>Delete Department
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </button>
                </Paper>
              ))}
            </center>
          </Paper>
        </>
      );
}