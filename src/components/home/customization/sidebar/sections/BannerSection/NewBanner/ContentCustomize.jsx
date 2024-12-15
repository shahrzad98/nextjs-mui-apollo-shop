import styled from '@emotion/styled';
import { Divider, Grid, TextField } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import CustomSwitch from '../CustomSwitch';

const CustomDivider = styled(Divider)`
  width: 100%;
  height: 1px;
  color: #dad6e9;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Label = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #51575c;
  margin-bottom: 12px;
`;

const ContentCustomize = ({ data, handleChange }) => {
  return (
    <>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems="center"
        mb={'16px'}
      >
        <Grid item width={'calc(100% - 50px)'}>
          <Title title="عنوان" />
        </Grid>
        <CustomSwitch
          name="isShowHeading"
          value={data?.isShowHeading}
          checked={data?.isShowHeading}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        container
        bgcolor={'#F3F3F3'}
        px={'16px'}
        py={'12px'}
        borderRadius="10px"
      >
        <Label>متن عنوان بنر</Label>
        <TextField
          variant="standard"
          fullWidth
          name="headingText"
          value={data?.headingText}
          onChange={handleChange}
          onFocus={e => e.target.select()}
          disabled={!data?.isShowHeading}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px'
            }
          }}
          placeholder="متن را وارد کنید..."
          type="text"
        />
      </Grid>
      <CustomDivider />
      <Grid
        container
        justifyContent={'space-between'}
        alignItems="center"
        mb={'16px'}
      >
        <Grid item width={'calc(100% - 50px)'}>
          <Title title="متن" />
        </Grid>
        <CustomSwitch
          name="isShowDescription"
          value={data?.isShowDescription}
          checked={data?.isShowDescription}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        container
        bgcolor={'#F3F3F3'}
        px={'16px'}
        py={'12px'}
        borderRadius="10px"
      >
        <Label>متن بنر</Label>
        <TextField
          variant="standard"
          fullWidth
          name="descriptionText"
          value={data?.descriptionText}
          onChange={handleChange}
          onFocus={e => e.target.select()}
          disabled={!data?.isShowDescription}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px'
            }
          }}
          placeholder="متن را وارد کنید..."
          type="text"
        />
      </Grid>
      <CustomDivider />
      <Grid
        container
        justifyContent={'space-between'}
        alignItems="center"
        mb={'16px'}
      >
        <Grid item width={'calc(100% - 50px)'}>
          <Title title="دکمه" />
        </Grid>
        <CustomSwitch
          name="isShowButton"
          value={data?.isShowButton}
          checked={data?.isShowButton}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        container
        bgcolor={'#F3F3F3'}
        px={'16px'}
        py={'12px'}
        borderRadius="10px"
      >
        <Label>متن دکمه بنر</Label>
        <TextField
          variant="standard"
          fullWidth
          name="buttonText"
          value={data?.buttonText}
          onChange={handleChange}
          onFocus={e => e.target.select()}
          disabled={!data?.isShowButton}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px'
            }
          }}
          placeholder="متن را وارد کنید..."
          type="text"
        />
      </Grid>
    </>
  );
};

export default ContentCustomize;
