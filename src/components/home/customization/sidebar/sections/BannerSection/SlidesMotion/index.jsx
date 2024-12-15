import { useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  IconButton
} from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import CustomRadio from 'src/components/shared/CustomRadio';
import { useState } from 'react';
import CustomSwitch from '../CustomSwitch';

// const SLIDES_SPEED = [
//   {
//     id: 1,
//     title: 'خیلی سریع',
//     time: '2 ثانیه',
//     value: 2000
//   },
//   {
//     id: 2,
//     title: 'سریع',
//     time: '3 ثانیه',
//     value: 3000
//   },
//   {
//     id: 3,
//     title: 'متوسط',
//     time: '5 ثانیه',
//     value: 5000
//   },
//   {
//     id: 4,
//     title: 'آرام',
//     time: '7 ثانیه',
//     value: 7000
//   }
// ];

const AccordionTitle = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #101820;
`;

const ListItem = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #101820;
`;

const TimeSpan = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6d5da9;
`;

const CustomDivider = styled(Divider)`
  width: 100%;
  height: 1px;
  color: #dad6e9;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SlidesMotion = () => {
  const [open, setOpen] = useState(false);

  const {
    data: { banner }
  } = useCustomization('banner');

  return (
    <>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems="center"
        mb={'16px'}
      >
        <Box width={'calc(100% - 50px)'}>
          <Title title="حرکت خودکار اسلایدها" />
        </Box>
        <Box width={'50px'}>
          <CustomSwitch
            checked={banner?.autoPlay?.value}
            onChange={() => banner?.autoPlay?.handleChangeBoolean()}
          />
        </Box>
      </Grid>
      <Accordion
        sx={{
          overflow: 'hidden',
          width: '100%',
          backgroundColor: '#F3F3F3',
          borderRadius: '10px',
          '&.MuiPaper-root': {
            borderRadius: '10px'
          }
        }}
        expanded={open}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#F3F3F3', borderRadius: '10px' }}
        >
          <Grid
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ backgroundColor: '#F3F3F3', borderRadius: '10px' }}
          >
            <AccordionTitle>سرعت اسلاید ها</AccordionTitle>
            <IconButton
              onClick={() => setOpen(!open)}
              disabled={!banner?.autoPlay?.value}
              sx={{ padding: '5px' }}
              size="small"
            >
              {open ? (
                <CloseIcon fontSize="10px" />
              ) : (
                <EditOutlinedIcon fontSize="10px" color="#483493" />
              )}
            </IconButton>
          </Grid>
        </AccordionSummary>
        <AccordionDetails
          sx={{ maxHeight: '350px !important', borderRadius: '10px' }}
        >
          <CustomDivider />
          {banner?.slidesSpeed?.options?.map(({ key, value }, i) => (
            <Grid
              key={i}
              container
              justifyContent={'space-between'}
              alignItems="center"
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '6px 16px',
                marginY: '16px'
              }}
            >
              <Box>
                <CustomRadio
                  value={value}
                  checked={value === banner?.slidesSpeed?.value}
                  onChange={({ target }) =>
                    banner?.slidesSpeed?.handleChangeString(target.value)
                  }
                />
                <ListItem>{key}</ListItem>
              </Box>
              <TimeSpan>{value + ' ' + 'ثانیه'}</TimeSpan>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SlidesMotion;
