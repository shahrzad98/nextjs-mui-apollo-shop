const { default: styled } = require('@emotion/styled');
const { Card } = require('@mui/material');

export const AddressRoot = styled(Card)`
  width: 95%;
  margin: auto;
  .headerTitel {
    text-align: center;
    color: rgba(28, 27, 32, 0.7);
  }
  .cardHeader {
    width: 95%;
    margin: 16px auto;
    background: rgba(28, 27, 32, 0.05);
  }
  .addAddress {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(28, 27, 32, 0.05);
  }
  .addrContent {
    padding: 0 !important;
    width: 100%;
    overflow: auto;
    .checkBox {
      display: flex;
      padding: 5px 0 5px 0;
      align-items: center;
    }
    .mapBox {
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .dividerClass {
    margin: 10px 0 10px 0;
    width: 100%;
    border-bottom: 1px solid rgba(28, 27, 32, 0.05);
  }
`;
