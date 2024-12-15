import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const StyledBox = styled(props => <Box {...props} />)(() => ({
  backgroundColor: '#FFF',
  height: '100%',
  position: 'fixed',
  zIndex: 10000000,
  top: 0,
  left: 0,
  overflowX: 'hidden',
  transform: 'translateX(-400px)',
  transition: '0.5s',
  width: '300px',
  '& .overlayContent': {
    position: 'relative',
    top: '16px',
    left: '0',
    width: '100%'
  },
  a: {
    padding: '8px',
    textDecoration: 'none',
    fontSize: '36px',
    color: '#818181',
    display: 'block',
    transition: '0.3s'
  },

  'a:hover,  a:focus': {
    color: 'f1f1f1'
  },

  '& .closebtn': {
    position: 'absolute',
    top: '20px',
    right: '16px'
  },
  '& .menuRegisterBtn': {
    padding: '0',
    '& .profileBtn': {
      padding: '0 16px',
      justifyContent: 'flex-start'
    }
  },
  '& .linkItem': {
    padding: '24px 16px',
    borderTop: '1px solid rgba(28, 27, 32, 0.2)',
    '& .MuiTypography-root': {
      color: 'rgba(28, 27, 32, 0.7)',
      marginLeft: '12px',
      fontSize: '16px',
      fontWeight: '500'
    }
  },
  '& .social': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

export const SidebarLink = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 50px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
export const SidebarLabel = styled(Box)`
  font-size: 16px;
  font-weight: 500;
`;

export const DropdownLink = styled.ul`
  display: ${props => (props.subnav ? 'block' : 'none')};
  background: rgba(28, 27, 32, 0.05);
  border: none;
  margin: 0;
  .menuItemLink {
    padding: 10px 5px;
    a {
      padding: 0;
      font-size: 16px;
    }
    span {
      color: #1c1b20b2;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .showLabel {
    list-style-type: none;
    a {
      padding: 0;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #2145ff;
    }
  }
`;

export const LinkBox = styled(Box)`
  .MuiTypography-root {
    padding: 0;
  }
  a {
    padding: 0;
  }
`;
