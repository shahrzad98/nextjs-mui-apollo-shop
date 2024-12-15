const { Grid, Typography } = require('@mui/material');
import styled from '@emotion/styled';

const Style = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  h2 {
    ::before {
      content: '';
      height: 2px;
      position: absolute;
      top: 50%;
      width: 186px;
      right: calc(100% + 37px);
      ${props => props.theme.breakpoints.down('md')} {
        width: 64px;
        right: calc(100% + 16px);
      }
      border-radius: 1px;
      background: ${props => props.theme.palette.primary.main};
    }
    ::after {
      content: '';
      width: 100px;
      height: 2px;
      position: absolute;
      top: 50%;
      width: 186px;
      left: calc(100% + 37px);
      ${props => props.theme.breakpoints.down('md')} {
        width: 64px;
        left: calc(100% + 16px);
      }
      border-radius: 1px;
      background: ${props => props.theme.palette.primary.main};
    }
  }
`;
export default function SectionTitle({ title }) {
  return (
    <Style mb={3}>
      <Grid
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
        md={9}
        container
      >
        <Grid>
          <Typography
            variant="h2"
            whiteSpace="nowrap"
            position="relative"
            m="10px auto"
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Style>
  );
}
