import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ColorToggleButton from './ColorToggleButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: '#ffffff',
          // color: '#000000',
        },
      },
    },
  },
});

const steps = [
  {
    label: '1차치료',
  },
  {
    label: '2차치료',
  },
  {
    label: '3차치료',
  },
  {
    label: '4차치료',
  },
  {
    label: '5차치료',
  },
];

const VerticalLinearStepper = ({ onPredictionClick, onResetClick }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedValues, setSelectedValues] = useState(Array(steps.length).fill('')); // 초기값 설정

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedValues(Array(steps.length).fill('')); // 리셋시 초기값으로 설정
    onResetClick();
  };

  const handlePrediction = () => {
    console.log('예측버튼');
    onPredictionClick();
  };

  const handleValueChange = (index, newValues) => {
    setSelectedValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValues;
      return updatedValues;
    });
  };

  const isStepComplete = (step) => {
    return selectedValues[steps.indexOf(step)] !== '';
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ mt: 2, mr: 10 }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label} - {selectedValues[index]}
            </StepLabel>
            <StepContent>
              <ColorToggleButton
                index={index}
                selectedValues={selectedValues}
                onValueChange={handleValueChange}
              />
              <Box sx={{ mb: 2 }}>
                <div>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, mr: 1 }}
                      disabled={!isStepComplete(step)} // 선택되지 않았을 때 비활성화
                    >
                      {index === steps.length - 1 ? '예측' : 'Continue'}
                    </Button>
                    <Button
                      variant="contained"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 3, mr: 1 }}
                    >
                      Back
                    </Button>
                  </ThemeProvider>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6">모든 치료경로를 선택하셨습니다.</Typography>
          <Typography variant="h6">다시 선택하거나 예측 할 수 있습니다.</Typography>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handlePrediction} sx={{ mt: 1, mr: 1 }}>
              예측
            </Button>
            <Button variant="contained" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </ThemeProvider>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
