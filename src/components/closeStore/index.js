import DrawerModal from 'src/components/shared/DrawerModal';
import React, { useEffect, useState } from 'react';
import CloseSvg from 'public/static/assets/svg/closeStore/Close';
import MailSvg from 'public/static/assets/svg/closeStore/Mail';
import SmsSvg from 'public/static/assets/svg/closeStore/SmsSvg';
import { Box, Button, Typography } from '@mui/material';
import TabPanel from './Tabs';
import { useReactiveVar } from '@apollo/client';
import { openModal } from 'utils/vars';
import { useStoreInfo } from '@digify/theme-kit';

const CloseMessage = ({ setOpen, setCallMe }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      p={2}
    >
      <CloseSvg />
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '14px', md: '16px' },
          mt: { xs: 1, md: 3 }
        }}
        component={'h5'}
      >
        فروشگاه بسته است!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '14px', md: '16px' }
        }}
        mt={3}
        component={'h6'}
      >
        به زودی اماده خدمت رسانی به شما خواهیم بود
      </Typography>
      <Box
        display={'flex'}
        sx={{
          mt: 4,
          flexDirection: 'row',
          width: '100%'
        }}
      >
        <Button
          fullWidth
          onClick={() => {
            setOpen(false);
          }}
          variant="contained"
          color="primary"
          sx={{ mr: 3, mt: { xs: 2, md: 0 } }}
        >
          بازدید از محصولات
        </Button>
        <Button
          onClick={() => {
            setCallMe(prevState => ({ ...prevState, open: true }));
          }}
          fullWidth
          variant="outlined"
          color="primary"
          sx={{ mt: { xs: 2, md: 0 } }}
        >
          فعال شد,به من خبر بده
        </Button>
      </Box>
    </Box>
  );
};

const AcceptMessage = ({ setCallMe, callMe, setOpen }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {callMe.message === 'email' ? <MailSvg /> : <SmsSvg />}
      <Typography
        sx={{ lineHeight: 1.6, fontSize: { xs: '14px', md: '16px' } }}
        textAlign={'center'}
        variant="h5"
        mt={4}
        component={'h5'}
      >
        {callMe.message === 'email'
          ? ' درصورت فعال شدن فروشگاه از طریق ایمیل به شما  اطلاع رسانی خواهد شد '
          : 'درصورت فعال شدن فروشگاه از طریق پیامک به شما  اطلاع رسانی خواهد شد'}
      </Typography>
      <Box sx={{ width: { xs: '100%', md: '30%' } }} display={'flex'} mt={4}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mr: 3 }}
          onClick={() => {
            setCallMe({
              open: false,
              message: ''
            });
            setOpen(false);
          }}
        >
          تایید
        </Button>
      </Box>
    </Box>
  );
};

export default function CloseStore() {
  const { is_open, handleCreateStoreOpeningNotifier } = useStoreInfo();
  const cartItems = useReactiveVar(openModal);
  const [callMe, setCallMe] = useState({
    open: false,
    message: ''
  });
  useEffect(() => {
    if (!is_open) {
      openModal(true);
    }
  }, [is_open]);

  return (
    <DrawerModal
      heightContent={'50%'}
      open={cartItems}
      setOpen={openModal}
      body={
        callMe.open ? (
          callMe.message !== '' ? (
            <AcceptMessage
              setOpen={openModal}
              callMe={callMe}
              setCallMe={setCallMe}
            />
          ) : (
            <TabPanel
              setCallMe={setCallMe}
              handlerNotif={handleCreateStoreOpeningNotifier}
            />
          )
        ) : (
          <CloseMessage setOpen={openModal} setCallMe={setCallMe} />
        )
      }
    />
  );
}
