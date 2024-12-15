import styled from '@emotion/styled';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const InfoContainer = styled(Box)`
  margin-bottom: 64px;
  .tabListContainer {
    border-bottom: 1px solid ${({ theme }) => theme.palette.black[20]};
  }
  .MuiButtonBase-root {
    font-size: 18px;
  }
`;

export const ExpandMore = styled(props => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export const MobileInfoContainer = styled(Box)`
  padding: 0 16px;
  margin-bottom: 32px;
  .MuiCardActions-root {
    padding-right: 0;
    padding-left: 0;
  }
  .muirtl-46bh2p-MuiCardContent-root {
    padding: 0 0 16px;
  }

  .features {
    line-height: 3;
  }
  .expandButton[aria-expanded='false'] {
    transform: rotate(90deg);
    padding-right: 0;
    padding-left: 0;
  }
  .expandButton[aria-expanded='true'] {
    transform: rotate(-360deg);
    padding-right: 0;
    padding-left: 0;
  }

  .muirtl-1rwjz6-MuiCardActions-root {
    &:first-child {
      border-top: 0.5px solid rgba(28, 27, 32, 0.2);
    }
    border-bottom: 0.5px solid rgba(28, 27, 32, 0.2);
  }
`;

export const CommentContainer = styled(Box)`
  img {
    width: 124px;
    height: 124px;
    margin-right: 16px;
  }
  .rateWrapper {
    width: fit-content;
  }
  .rate {
    width: 31px;
    height: 20px;
    background-color: ${({ theme }) => theme.palette.black[5]};
    color: ${({ theme }) => theme.palette.black[40]};
  }
  .commentImage {
    flex-direction: row;
    justify-content: end;
    img {
      width: 64px;
      height: 64px;
    }
  }
  .reply {
    border: 0.5px solid ${({ theme }) => theme.palette.black[20]};
    border-radius: 2px;
    padding: 12px 16px;
  }

  .divider {
    border-color: ${({ theme }) => theme.palette.black[20]};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    img {
      width: 64px;
      height: 64px;
      margin-right: 8px;
    }
    .commentImage {
      justify-content: flex-end;
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
`;
