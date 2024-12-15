import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Grid } from '@mui/material';

const Accordion = styled(props => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  direction: 'ltr',
  '&:not(:last-child)': {
    borderBottom: '1px solid rgba(28, 27, 32, 0.2)'
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    style={{ direction: 'ltr' }}
    expandIcon={<ArrowBackIosRoundedIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: 'row-reverse',
  direction: 'ltr',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
    direction: 'ltr'
  },
  '& .MuiAccordionSummary-content': {
    direction: 'ltr',
    marginLeft: theme.spacing(1),
    fontWeight: 400,
    color: 'rgba(28, 27, 32, 0.7)',
    fontSize: '18px'
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    fontWeight: 700
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function Collpase({ infoProduct, descriptionProduct, comment }) {
  const collpaseData = [
    {
      id: '1',
      label: 'توضیحات محصول',
      component: descriptionProduct,
      value: Object.keys(descriptionProduct?.props?.children)
    },
    {
      id: '2',
      label: 'مشخصات محصول',
      component: infoProduct,
      value: infoProduct?.props?.features
    },
    {
      id: '3',
      label: 'نظرکاربران',
      component: comment
    }
  ];

  const newCollpaseData = collpaseData.filter(data => data.value != '');
  const [expanded, setExpanded] = useState('');

  const handleChange = panel => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid sx={{ marginBottom: '32px' }}>
      {newCollpaseData.map(item => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            aria-controls={`panel${item.id}d-content`}
            id={`panel${item.id}d-header`}
          >
            {item.label}
          </AccordionSummary>
          <AccordionDetails>{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
