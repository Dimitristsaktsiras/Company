import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container, Paper, Button} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';







export default function Fields() {
    const paperstyle={padding: '50px 100px', width:300, margin:"20px auto"}
    const Navigate =useNavigate();
    const [selectedOption, setSelectedOption] = React.useState(null);
  
  
    const isOptionEqualToValue = (option, value) => {
      return option.label === value.label;
  };
      

    const handleClick=( )=>{
      if(selectedOption === null || selectedOption.label  == "Home page"   )
      {
        Navigate('/');
      }
      else if(selectedOption.label  === "Employees")
        {
          Navigate('/Employees');
        }
        else if(selectedOption.label  === "Projects")
        {
          Navigate('/Projects');
        }
        else if(selectedOption.label  === "Add New Employee")
        {
          Navigate('/NewEmployee');
        }
        else if(selectedOption.label  === "Add New Project")
        {
          Navigate('/NewProject');
        }
        else if(selectedOption.label  === "Assign Projects && place Employees in the Departments")
        {
          Navigate('/AssignProject');
        }
        else if(selectedOption.label  === "Add New Department")
        {
          Navigate('/NewDepartment');
        }
        else if(selectedOption.label  === "Departments")
        {
          Navigate('/Departments');
        }
    };
      

      
    
  
    return (
    
    <Container>
        <Paper elavation = {5} style = {paperstyle}>
            <h1 style ={{color: "black"}}><center><u>Choose a Field</u></center></h1>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pedia}
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Company Informations"/>}
      
      isOptionEqualToValue={isOptionEqualToValue} 
      value={selectedOption}
      onChange={(event, newValue) => setSelectedOption(newValue)}  
    />
      <center>
     <Button sx={{marginTop: '20px'}} variant="contained" color="primary" onClick={handleClick} style={{ marginTop: '15px' }}>
      switch over
      </Button>
      </center>
    
    </Paper>
    </Container>
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Pedia = [
  { label: 'Home page' },
  { label: 'Employees' },
  { label: 'Projects' },
  { label: 'Departments' },
  { label: 'Add New Employee' },
  { label: 'Add New Project' },
  { label: 'Add New Department' },
  { label: 'Assign Projects && place Employees in the Departments' },
  
  
];
