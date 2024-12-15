const { default: styled } = require('@emotion/styled');
const { Grid } = require('@mui/material');

export const Style = styled(Grid)`
  border: 1px solid rgba(28, 27, 32, 0.2);
  padding: 24px 16px 16px 24px;
  min-height: 328px;
  .divider {
    height: 1px;
    background-color: rgba(28, 27, 32, 0.2);
  }
  .approximateDate {
    height: 52px;
    background-color: rgba(28, 27, 32, 0.05);
    h3 {
      color: #1c1b20b2;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .approximateDate_content {
    border-bottom: 1px solid rgba(28, 27, 32, 0.2);
    padding: 12px;
    p {
      text-align: center;
      font-size: ${props => (props.isDesktop ? '18px' : '16px')};
      font-weight: 400;
      color: #1c1b2066;
      margin: 0;
    }
  }
`;
