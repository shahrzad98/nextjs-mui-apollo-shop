import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyleLayout = styled(Grid)`
  .caption {
    color: rgba(28, 27, 32, 0.7);
  }
  /* padding: ${props => (props.isdesktop ? '32px 14px' : '32px 24px')}; */
  .sidebar {
    border: 1px solid rgba(28, 27, 32, 0.1);
    border-radius: 2px;
    width: 100%;
    a {
      text-decoration: none;
    }
    .header {
      padding: 24px;
      h3 {
        font-size: 18px;
        margin: 0;
        color: #1c1b20;
        font-weight: 400;
        margin-top: 8px;
      }
      h4 {
        font-size: 16px;
        margin: 0;
        color: #1c1b20b2;
        font-weight: 400;
        margin-top: 8px;
      }
    }
    .loyalty {
      background-color: rgba(28, 27, 32, 0.05);
      height: 60px;
      h3 {
        font-size: 16px;
        margin: 0;
        color: #1c1b20b2;
        font-weight: 400;
        margin-left: 8px;
        span {
          font-size: 12px;
        }
      }
    }
    .link {
      height: 68px;
      border-bottom: 1px solid rgba(28, 27, 32, 0.05);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background-color: rgba(28, 27, 32, 0.01);
      }
      h3 {
        font-size: 18px;
        margin: 0;
        color: #1c1b20b2;
        font-weight: 400;
        margin-left: 16px;
      }
    }
    .userIcon {
      background-color: rgba(28, 27, 32, 0.05);
    }
    .user_info {
      .p_name {
        color: rgba(28, 27, 32, 0.7);
      }
    }
  }
  .currencyGrid {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }
  .currency {
    text-align: start;
    direction: rtl;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    white-space: nowrap;
    margin-right: 2px;
  }
`;
