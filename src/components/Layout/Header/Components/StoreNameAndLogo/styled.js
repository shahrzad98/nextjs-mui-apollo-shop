import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledMuiLink = styled(props => <Box {...props} />)(() => ({
  '& .logoConent': {
    borderRadius: ' 8px',
    overflow: 'hidden'
  },
  '& .storeName': {
    fontWeight: 700,
    display: 'inline-block',
    color: '#1C1B20'
  }
}));
