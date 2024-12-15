import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, LinearProgress } from '@mui/material';
import CartAddressSVG from 'public/static/assets/svg/cart/addressStep';
import PackingCartStep from 'public/static/assets/svg/cart/packingStep';
import PaymentStepCart from 'public/static/assets/svg/cart/paymentStep';
const CartStepper = ({
  steps = [],
  activeStep = 1,
  error = false,
  handleChangStep
}) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<></>}
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '60%' },
        marginBottom: '40px',
        marginTop: '72px'
      }}
    >
      {[...steps].map((step, i) => (
        <Step
          key={step.label}
          onClick={() => {
            if (activeStep > i + 1) {
              handleChangStep(step.id);
            }
          }}
          sx={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {i !== 0 && (
            <LinearProgress
              value={activeStep > i ? 100 : activeStep == i ? 50 : 0}
              variant="determinate"
              sx={{
                position: 'absolute',
                left: '0',
                height: '2px',
                backgroundColor: 'rgba(28, 27, 32, 0.2);',
                right: '0',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 62px)',
                top: '32px'
              }}
            />
          )}

          <StepLabel
            StepIconComponent={
              i === 0
                ? CartAddressSVG
                : i === 1
                ? () => (
                    <PackingCartStep
                      borderColor={activeStep >= 2 ? '#171C22' : '#1C1B2055'}
                      color={activeStep >= 2 ? '#171C22' : '#1C1B2055'}
                    />
                  )
                : () => (
                    <PaymentStepCart
                      borderColor={activeStep >= 3 ? '#171C22' : '#1C1B2055'}
                      color={activeStep >= 3 ? '#171C22' : '#1C1B2055'}
                    />
                  )
            }
            sx={{ opacity: error && i == activeStep ? 0.3 : 1 }}
          />
          <Box
            sx={{
              textAlign: 'center',
              color:
                i === 0
                  ? '#171C22'
                  : i === 1 && activeStep >= 2
                  ? '#171C22'
                  : i === 2 && activeStep >= 3
                  ? '#171C22'
                  : '#1C1B2055',
              marginTop: { xs: '12px', md: 0 }
            }}
            className="fs-14 fw-400"
            mb={1}
          >
            {step.label}
          </Box>
        </Step>
      ))}
    </Stepper>
  );
};
export default CartStepper;
