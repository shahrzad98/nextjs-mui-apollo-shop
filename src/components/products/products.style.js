import styled from '@emotion/styled';
import { Accordion, AccordionSummary, Grid, Switch } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const StyledContainer = styled(Grid)`
  width: 100%;

  .MuiPaginationItem-root {
    color: rgba(28, 27, 32, 0.4);
    font-size: 18px;
  }

  .MuiPaginationItem-icon {
    color: #000;
  }

  .Mui-selected {
    background-color: #fff;
    border: 1px solid;
    color: #1c1b20;
  }

  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
`;

export const AccordionContainer = styled(Accordion)`
  z-index: 1;
  margin-left: 16px;

  width: ${props =>
    props.isDesktop
      ? props.open
        ? '250px'
        : props.isCat
        ? '120px'
        : '90px'
      : '100%'};

  border: ${props =>
    props.isDesktop
      ? props.open
        ? '1px solid rgba(28, 27, 32, 0.4)'
        : '0.5px solid rgba(28, 27, 32, 0.2)'
      : 'none'};
  border-bottom: ${props =>
    props.isDesktop
      ? '0.5px solid rgba(28, 27, 32, 0.2)'
      : '0.5px solid rgba(28, 27, 32, 0.2)'};
  border-radius: ${props => (props.isDesktop ? '4px' : '0px')};
  padding: 0;
  transition: width 0.2s;

  &::before {
    background-color: transparent;
  }

  .MuiAccordionSummary-content {
    margin: 0;
    color: rgba(28, 27, 32, 0.7);
  }
  .label {
    width: max-content;
    padding-left: 12px;
  }
  /* .MuiAccordionSummary-expandIconWrapper {
    color: rgba(28, 27, 32, 0.7);

    .Mui-expanded {
      transform: ${props =>
    props.isDesktop ? 'rotate(180deg)' : 'rotate(-90deg)'};
      /* transform: rotate(-90deg); */
  /* }
  } */
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: ${props =>
      props.isDesktop ? 'rotate(180deg)' : 'rotate(-90deg)'};
  }

  .MuiAccordionSummary-root {
    border-bottom: ${props =>
      props.open
        ? '0.5px solid rgba(28, 27, 32, 0.2)'
        : '0.5px solid rgba(28, 27, 32, 0)'};
  }
  .MuiAccordionDetails-root {
    max-height: 450px;
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 80px;
  }
  .MuiAccordion-region {
    position: relative;
  }
  .submitBtn {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 75px;
    border-top: 0.5px solid rgba(28, 27, 32, 0.2);
    background-color: #fff;
    padding: 12px;
  }
  .option {
    margin: 0;
  }
`;

export const AccordionSummaryCat = styled(props => (
  <AccordionSummary
    expandIcon={<ChevronLeftIcon sx={{ fontSize: '1.3rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: 'none !important',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg) !important'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

export const SwitchContainer = styled(Accordion)`
  z-index: 1;
  margin-left: 16px;
  width: ${props =>
    props.isDesktop
      ? props.open
        ? '280px'
        : props.isCat
        ? '120px'
        : '90px'
      : '100%'};

  /* margin-bottom: ${props => (props.isDesktop ? 'inherit' : '20px')}; */
  border: ${props =>
    props.isDesktop
      ? props.open
        ? '1px solid rgba(28, 27, 32, 0.4)'
        : '0.5px solid rgba(28, 27, 32, 0.2)'
      : 'none'};
  border-bottom: ${props =>
    props.isDesktop
      ? '0.5px solid rgba(28, 27, 32, 0.2)'
      : '0.5px solid rgba(28, 27, 32, 0.2)'};
  border-radius: ${props => (props.isDesktop ? '4px' : '0px')};
  padding: 0;
  transition: width 0.2s;

  &::before {
    background-color: transparent;
  }

  .MuiAccordionSummary-content {
    margin: 0;
    color: rgba(28, 27, 32, 0.7);
  }
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: ${props =>
      props.isDesktop ? 'rotate(180deg)' : 'rotate(-90deg)'};
  }

  .label {
    width: max-content;
    padding-left: 12px;
  }
  .MuiAccordionSummary-root {
    border-bottom: ${props =>
      props.open
        ? '0.5px solid rgba(28, 27, 32, 0.2)'
        : '0.5px solid rgba(28, 27, 32, 0)'};
  }
  .MuiAccordionDetails-root {
    max-height: 450px;
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 80px;
  }
  .MuiAccordion-region {
    position: relative;
  }
  .submitBtn {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 75px;
    border-top: 0.5px solid rgba(28, 27, 32, 0.2);
    background-color: #fff;
    padding: 12px;
  }
  .option {
    margin: 0;
  }
  .MuiFormControlLabel-root {
    direction: rtl;
    margin-left: 4px;
    margin-right: 0;
    /* width: 100%; */
    justify-content: space-between;
  }
  .MuiFormGroup-root {
    width: 100%;
  }
`;

export const IOSSwitch = styled(props => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : 'primary',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));
