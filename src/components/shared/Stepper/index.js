import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { LinearProgress, Typography } from '@mui/material';
import {
  Close,
  HourglassEmpty,
  RadioButtonUnchecked,
  CheckCircle
} from '@mui/icons-material';

const BaseStepper = ({
  steps = [{ name: 'step1' }],
  activeStep = 1,
  error = false
}) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<></>}
      sx={{ display: 'flex', width: '100%' }}
    >
      {[...steps].map((step, i) => (
        <Step
          key={step.label}
          sx={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: activeStep > i ? 1 : 0.3,
            minWidth: '60px'
          }}
        >
          {i !== 0 && (
            <LinearProgress
              value={activeStep > i ? 100 : activeStep == i ? 50 : 0}
              variant="determinate"
              sx={{
                position: 'absolute',
                left: '0',
                right: '0',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 22px)',
                bottom: '13px',
                height: '2px'
              }}
            />
          )}
          <Typography
            sx={{ textAlign: 'center', color: '#171C22' }}
            variant="body2"
            mb={1}
          >
            {step.label}
          </Typography>
          <StepLabel
            StepIconComponent={
              error && i == activeStep
                ? Close
                : step.WAITING
                ? HourglassEmpty
                : activeStep > i
                ? CheckCircle
                : RadioButtonUnchecked
            }
            sx={{ opacity: error && i == activeStep ? 0.5 : 1 }}
          />
        </Step>
      ))}
    </Stepper>
  );
};
export default BaseStepper;
