import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import CustomRadio from 'src/components/shared/CustomRadio';

const BG_COLOR = {
  static: '#FFFFFF',
  glass: '#F8F8F8',
  none: '#F3F3F3',
  default: '#FFFFF'
};

const Root = styled(Grid)`
  width: 100%;
  padding: 0px 16px 16px 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: #f3f3f3;
`;

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
`;

const DisplayCard = ({ title, value, type = 'default', ...props }) => {
  return (
    <Root container>
      <Grid item container alignItems={'center'} xs={12}>
        <CustomRadio value={value} {...props} /> <Span>{title}</Span>
      </Grid>
      <Grid
        item
        container
        justifyContent={'space-between'}
        alignItems="center"
        height={'38px'}
        bgcolor={BG_COLOR[type]}
        border={'0.5px solid #C9C3E0'}
        borderRadius={'8px'}
        xs={12}
      >
        <Grid item xs={2} pl={'8px'}>
          <Box
            width={'26px'}
            height={'14px'}
            borderRadius={'8px'}
            bgcolor={'#A3A5A7'}
          />
        </Grid>
        <Grid item container justifyContent={'space-evenly'} xs={6}>
          {[1, 2, 3, 4].map(item => (
            <Box
              key={item}
              width={'14px'}
              height={'4px'}
              borderRadius={'3px'}
              bgcolor={'#A3A5A7'}
              sx={theme => ({
                [theme.breakpoints.down('xl')]: {
                  display: item == 4 ? 'none' : 'block'
                }
              })}
            />
          ))}
        </Grid>
        <Grid item container justifyContent={'space-evenly'} xs={4}>
          {[1, 2, 3, 4].map(item => (
            <Box
              key={item}
              width={'8px'}
              height={'8px'}
              borderRadius={'2px'}
              bgcolor={'#A3A5A7'}
              sx={theme => ({
                [theme.breakpoints.down('xl')]: {
                  display: item == 4 ? 'none' : 'block'
                }
              })}
            />
          ))}
        </Grid>
      </Grid>
    </Root>
  );
};

export default DisplayCard;
