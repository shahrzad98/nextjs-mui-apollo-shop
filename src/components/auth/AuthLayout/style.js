import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const StyledCard = styled(Container, {
  shouldForwardProp: prop => !['isDeskop'].includes(prop)
})`
  margin-top: ${props => (props.isDeskop ? '70px' : '0px !important')};
  padding: ${props => (props.isDeskop ? '28px' : '0px !important')};
  .icon-arrow-right1 {
    font-size: 18px;
  }
  .cardStyle {
    position: relative;
    min-height: ${props => (props.isDeskop ? '546px' : 'calc(100vh - 100px)')};
    height: 100%;
    width: ${props => (props.isDeskop ? '595px' : '100%')};
    border: ${props =>
      props.isDeskop ? '1px solid  rgba(28, 27, 32, 0.1)' : 'none'};
    margin: auto;
    .cardContent {
      padding: ${props => (props.isDeskop ? '0 105px' : '0 16px')};
      height: 80%;
    }
  }
  a {
    text-decoration: none;
  }
  form {
    width: 100%;
    height: 100%;
  }
`;
