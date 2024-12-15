import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { css, Stack } from '@mui/material';
export const Style = styled(Box, {
  shouldForwardProp: prop => !['lessthenSix'].includes(prop)
})`
  a {
    text-decoration: none;
  }
  max-width: 1280px;
  margin: 32px auto;
  margin-bottom: 84px;
  padding: ${props => (props.lessthenSix ? '0 25px' : '0px')};
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0;
    margin: 16px auto;
    margin-bottom: 84px;
  }
`;

const borderRight = css`
  border-right: 1px solid;
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      #d1d1d2,
      rgba(0, 0, 0, 0)
    )
    1 100%;
  border-image-repeat: stretch;
`;

export const ProductsWrapperContainer = styled(Stack, {
  shouldForwardProp: prop => !['lessthenSix'].includes(prop)
})`
  max-width: 1280px;
  .muirtl-1tcb632-MuiTypography-root-MuiLink-root {
    text-decoration: none !important;
  }
  .products {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cardWrapperWithDrawer {
    height: 440px;
    padding: 0 15px;
    ${borderRight}
  }
  .cardWrapper {
    ${borderRight}
  }

  .cardWrapperWithDrawer:nth-of-type(${({ lessthenSix }) =>
        lessthenSix ? '3n+1' : '4n+1'}) {
    border: none;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .cardWrapper {
      padding: 0 8px;
    }
    .cardWrapper {
      height: 285px;
    }

    .cardWrapper:nth-of-type(odd) {
      border-right: none;
    }
    .cardWrapper:nth-of-type(even) {
      border-left: none;
    }
  }
`;
