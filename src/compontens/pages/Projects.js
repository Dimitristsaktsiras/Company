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



export default function Projects() {
    const [projects, setProjects]=useState([])



    useEffect(()=>{
        fetch("http://localhost:8080/project/getProjects")
        .then(Response=>Response.json())
        .then((result)=>{
            setProjects(result)
        }
        )
    },[])
    
      function deleteProject(projectId) {
        fetch("http://localhost:8080/project/delete/" + projectId, {
          method: 'DELETE'
        })
          .then(result => {
            setProjects(currentProjects => currentProjects.filter(project => project.projectId !== projectId));
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
              <h2 style={{ color: "black" }}><u> Projects</u></h2>
              {projects.map(NewProject => (
                <Paper elevation={5} style={{ margin: "20px auto", width: 300, padding: "50px 100px", textAlign: "left" }} key={NewProject.projectId}>
        
                  <b>Project Name</b>: &nbsp;{NewProject.projectName}<br />
                  <button onClick={() => deleteProject(NewProject.projectId)}>Delete Project
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