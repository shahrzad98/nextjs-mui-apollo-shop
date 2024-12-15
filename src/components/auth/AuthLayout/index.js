import { Button, CardHeader, Typography, Box, Stack } from '@mui/material';
import AuthSvg from 'public/static/assets/svg/auth/AuthSvg';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import AuthHeader from './authHeader';

import { StyledCard } from './style';
export default function AuthLayout({ auth, children }) {
  const { changePageStep, step } = auth;
  const isDeskop = !useIsMobile();

  return (
    <>
      {(isDeskop ? true : !isDeskop && step == 'fristPage') && <AuthHeader />}

      <StyledCard maxWidth={'lg'} isDeskop={isDeskop}>
        <Box variant="outlined" className="cardStyle">
          <CardHeader
            sx={{ padding: '0' }}
            title={
              <>
                {step != 'fristPage' ? (
                  <Button
                    sx={{ padding: '24px' }}
                    onClick={() => changePageStep('fristPage')}
                  >
                    <Stack direction={'row'} alignItems={'center'}>
                      <i className="icon-arrow-right1" />
                      <Typography color="#1C1B20" ml={1}>
                        بازگشت
                      </Typography>
                    </Stack>
                  </Button>
                ) : (
                  <></>
                )}
              </>
            }
          />
          <Box className="cardContent" mt={step == 'fristPage' ? '80px' : 0}>
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <AuthSvg />
            </Box>
            {children}
          </Box>
        </Box>
      </StyledCard>
    </>
  );
}
