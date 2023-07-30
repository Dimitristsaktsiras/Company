
import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Appbar from '../Appbar'
import {Container, Paper, Button } from '@material-ui/core';
import Fields from '../Fields';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function AssignProjects() {
    const [Employee, setEmployees]=useState([]);
    const [Employee1, setEmployees1]=useState([]);
    const [Project, setProjects]=useState([]);
    const [Department, setDepartment]=useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedEmployee1, setSelectedEmployee1] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    
    const [errorSelect1, setErrorSelect1] = useState(false);
    const [errorSelect2, setErrorSelect2] = useState(false);
    const [errorSelect3, setErrorSelect3] = useState(false);

    const handleChangeEmployee = (event) => {
        setSelectedEmployee(event.target.value);
    };
    const handleChangeEmployee1 = (event) => {
        setSelectedEmployee1(event.target.value);
    };

    const handleChangeProject = (event) => {
        setSelectedProject(event.target.value);
    };

    const handleChangeDepartment = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const submitAssignment = () => {
        if(selectedEmployee){
            setErrorSelect1(false);
            if(selectedProject){
                setErrorSelect2(false);
                fetch(
                    `http://localhost:8080/employee/${selectedEmployee.empId}/project/${selectedProject.projectId}`, 
                    {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            "empId": selectedEmployee.empId,
                            "assignedProjects": [...selectedEmployee.assignedProjects, selectedProject.projectId]
                        })
                    })
                    .then((response) => response.json())
                    .then((result) => {
                      // Handle the response here...
                    })
                    .catch((error) => {
                      // Handle any errors during the fetch...
                      console.error('Error:', error);
                    });
            }
            else{
                setErrorSelect2(true);
            }
        }
        else{
            setErrorSelect1(true);
        }
    }
    const submitDepartment=()=>{
        if (selectedEmployee1) {
            setErrorSelect3(false);
            if (selectedDepartment) {
              setErrorSelect3(false);
      
              fetch(
                `http://localhost:8080/employee/${selectedEmployee1.empId}/department/${selectedDepartment.depId}`,
                {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    "empId": selectedEmployee1.empId,
                    "department": {
                      "depId": selectedDepartment.depId,
                      "depName": selectedDepartment.depName
                    }
                  })
                })
                .then((response) => response.json())
                .then((result) => {
                  // Handle the response here...
                })
                .catch((error) => {
                  // Handle any errors during the fetch...
                  console.error('Error:', error);
                });
            }
                else {
              setErrorSelect3(true);
                }
        } 
            else {
                setErrorSelect3(true);
            }
    }
      
    

    useEffect(()=>{
        fetch("http://localhost:8080/employee/getEmployees")
        .then(Response=>Response.json())
        .then((result)=>{
            setEmployees(result)
        }
    )
    
    fetch("http://localhost:8080/employee/getEmployees")
        .then(Response=>Response.json())
        .then((result)=>{
            setEmployees1(result)
        }
    )

    fetch("http://localhost:8080/project/getProjects")
        .then(Response=>Response.json())
        .then((result)=>{
            setProjects(result)
        }
        )
    

    fetch("http://localhost:8080/departments")
    .then(Response=>Response.json())
    .then((result)=>{
        setDepartment(result)
    }
    )
},[])


    return (
        <>
            <Appbar></Appbar>
            <Fields></Fields>
            <Box display="flex" alignItems="center" justifyContent="center">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="select1">Employee</InputLabel>
                    <Select
                    error={errorSelect1}
                    labelId="select1"
                    id="select1"
                    value={selectedEmployee}
                    label="Employee"
                    onChange={handleChangeEmployee}
                    >
                    {Employee.map(Employee=>(
                        <MenuItem value={Employee} key={Employee.empId}>{Employee.firstName} {Employee.lastName}</MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>Please select an employee</FormHelperText>
                </FormControl>
                <ArrowForwardIosIcon style={{ marginBottom: '15px' }}></ArrowForwardIosIcon>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="select2">Project</InputLabel>
                    <Select
                        error={errorSelect2}
                        labelId="select2"
                        id="select2"
                        value={selectedProject}
                        label="Project"
                        onChange={handleChangeProject}
                        >
                        {Project.map(Project=>(
                        (selectedEmployee && !selectedEmployee.assignedProjects.map(project=> project.projectId).includes(Project.projectId)) &&<MenuItem value={Project} key={Project.projectId}>{Project.projectName}</MenuItem>
                         ))}
                    </Select>
                    <FormHelperText>Please select a project</FormHelperText>
                </FormControl>
                
                <Button sx={{marginTop: '20px'}} variant="contained" color="primary" style={{ marginBottom: '25px', marginLeft: '10px' }} onClick={submitAssignment}>
                    Submit
                </Button>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="select1">Employee</InputLabel>
                    <Select
                    error={errorSelect3}
                    labelId="select1"
                    id="select1"
                    value={selectedEmployee1}
                    label="Employee"
                    onChange={handleChangeEmployee1}
                    >
                    {Employee1.map(Employee1=>(
                        <MenuItem value={Employee1} key={Employee1.empId}>{Employee1.firstName} {Employee1.lastName}</MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>Please select an employee</FormHelperText>
                </FormControl>
                <ArrowForwardIosIcon style={{ marginBottom: '15px' }}></ArrowForwardIosIcon>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="select2">Departments</InputLabel>
                    <Select
                        error={errorSelect3}
                        labelId="select3"
                        id="select3"
                        value={selectedDepartment}
                        label="Departments"
                        onChange={handleChangeDepartment}
                        >
                        {Department.map(Department=>(
                            <MenuItem value={Department} key={Department.depId}>{Department.depName}</MenuItem>
                        /*(selectedEmployee1 && !selectedEmployee1.department.map(department=> department.depId).includes(Department.depId)) &&<MenuItem value={Department} key={Department.depId}>{Department.depName}</MenuItem>*/
                        
                        ))
                         }
                    </Select>
                    <FormHelperText>Please select a Department</FormHelperText>
                </FormControl>
                
                <Button sx={{marginTop: '20px'}} variant="contained" color="primary" style={{ marginBottom: '25px', marginLeft: '10px' }} onClick={submitDepartment}>
                    Submit
                </Button>
            </Box>
        </>
      );
}
