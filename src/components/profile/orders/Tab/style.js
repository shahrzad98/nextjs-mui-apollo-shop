import styled from '@emotion/styled';
import { Tabs, Box } from '@mui/material';

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  '.MuiTab-root': {
    border: '1px solid #1C1B201A',
    borderRight: 'none',
    ':last-child': {
      borderRight: '1px solid #1C1B201A'
    },
    padding: '17px 14px',
    [theme.breakpoints.down('lg')]: {
      padding: '7px'
    }
  },
  '.MuiTabs-indicator': {
    background: theme.palette.primary.main,
    height: '100%'
  },
  '.Mui-selected': {
    zIndex: 1
  }
}));

export const SeletableTab = styled(Box)(({ selected, theme }) => ({
  width: '100%',
  gap: 7,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    alignItems: selected ? 'flex-start' : 'center',
    flexDirection: 'column'
  },
  '.icon-wrapper': {
    display: 'flex'
  },
  path: { stroke: selected ? '#FEFEFE' : '#1C1B2066' },
  '.name-wrapper': {
    color: selected ? '#FEFEFE' : '#1C1B2066',
    lineHeight: 1,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: 7,
    '*': {
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }
}));
