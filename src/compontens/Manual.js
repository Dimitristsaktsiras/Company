import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ForkRight, ForkRightOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const steps = [
  {
    label: 'Create the new Employee as a department',
    description: `First, create a new employee using "Add New Employee" page by
     filling in the appropriate fields. Then you can go to the "Employees" page
      to see all registered employees with their details, as if we want we can 
      delete someone employee. The exact same thing happens with departments, 
      we create, we can see them and we can delete them using the appropriate page.`,
  },
  {
    label: 'Create the new Project',
    description:
    `Then create a new project using "Add New Project" page by filling in the
     appropriate fields. Then you can go to  "Projects" page to see all registered
      projects with their details, since if we want we can delete any which is
       important to note that it MUST NOT be assigned somewhere to be deleted.`,
  },
  {
    label: 'Assign Projects && place Employees in the Departments',
    description: `Since we have registered employees and registered projects,
     we can assign a project to an employee. This is done by going to 
      "Assign Projects" page and there we select in the fields given to us the 
      coordinated worker with the project we want to assign to him. When we press
      submit we can go back to the page with "Employees" and actually see that the 
       project was assigned. Μoreover, as we have created the departments, 
       we place the employees in the appropriate departments`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <center>
    <Box  sx={{ maxWidth: 400}}>
    <Tooltip title="project">
          <IconButton>
            <AutoStoriesIcon />
          </IconButton>
        </Tooltip>
        <legend style={{ fontSize: '20px' }} ><b>Manual</b></legend>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    </center>
  );
}
