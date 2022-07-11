import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BasisInfor } from './BasisInfor';
import { AdditionalInfor } from './AdditionalInfor';
import { ChoseAvatar } from './ChoseAvatar';

const ARoute = ['basis_infor', 'additional_infor','avatar', '/']
const steps = ['Thông tin cơ bản', 'Thông tin thêm', 'Ảnh đại diện'];
 export const FormFill = () => {   
    const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    navigate(`${ARoute[activeStep + 1]}`)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    navigate(-1)
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    navigate(`${ARoute[activeStep + 1]}`)
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate(`${ARoute[0]}`)
  };

  return (
    <div className='form_fill'>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}  sx={{color:'#fff'}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" sx={{color:'#fff'}}>Tùy chọn</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} color='#fff'>
              <StepLabel {...labelProps} ><span style={{color: '#fff'}}>{label}</span></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Routes>
                <Route path='basis_infor' element={<BasisInfor/>}/>
                <Route path='additional_infor' element={<AdditionalInfor/>}/>
                <Route path='avatar' element={<ChoseAvatar/>}/>
            </Routes>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep !== 0 &&
                <Button
                color="primary"
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant='text'
                >
                Back
                </Button>                
            }

            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button onClick={handleSkip} sx={{ mr: 1, color:'#fff' }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
