const { default: styled } = require('@emotion/styled');
const { Grid } = require('@mui/material');

const Style = styled(Grid)`
  .packing {
    border: 1px solid #1c1b201a;
    .header {
      background-color: rgba(28, 27, 32, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .packingOption {
      border-bottom: 1px solid #1c1b201a;
      cursor: pointer;
      .packingName {
        display: flex;
        align-items: center;
      }
    }
  }
`;
export default Style;
