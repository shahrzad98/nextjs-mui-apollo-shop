import { Box, Grid, Typography } from '@mui/material';
import React, { memo } from 'react';
import styled from '@emotion/styled';
import CustomSwitch from '../../BannerSection/CustomSwitch';

const Item = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
`;

function Items({ data }) {
  return (
    <Box
      bgcolor={'#F3F3F3'}
      sx={{ opacity: data.isShow ? 1 : 0.6 }}
      borderRadius={'10px'}
      p={'16px'}
      mt={'24px'}
      width="100%"
    >
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent={'space-between'}>
          <Item>{data.title}</Item>
          <div className="switch_cont">
            <CustomSwitch
              checked={data.isShow}
              onChange={() => data.setShow()}
            />
          </div>
        </Grid>
        <Grid item mt={3} xs={12}>
          {/* <Box mb={2}>
            <TextField
              value={data.message}
              onChange={e => data.setMessage(e.target.value)}
              InputProps={{ disableUnderline: true }}
              variant="standard"
              fullWidth
              disabled={!data.isShow}
              placeholder={`آدرس ${data.title} خود را واردکنید`}
              className="text_navbar_input"
            />
          </Box> */}
          <Typography color="#CACACA" fontSize={'12px'} textAlign="right">
            {data.defaultUrl}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(Items);
