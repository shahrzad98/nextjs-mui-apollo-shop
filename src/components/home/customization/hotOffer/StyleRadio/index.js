import { Box, Grid, Radio, Typography } from '@mui/material';
import CheckedSVG from 'src/components/home/customization/sidebar/svg/checkedSVG';

const StyleRadio = ({ name, faName, imgSrc: src, checked, onClick }) => {
  return (
    <Grid onClick={onClick} container py={3} borderBottom="1px solid #DAD6E9">
      <Box
        bgcolor="#F3F3F3"
        border="1px solid #C9C3E0"
        borderRadius="10px"
        p={2}
        width="1"
      >
        <Grid container gap={1} alignItems="center">
          <Radio
            checked={checked}
            name={name}
            sx={{ padding: 0 }}
            style={{ color: '#483493' }}
            checkedIcon={<CheckedSVG />}
          />
          <Typography
            component="label"
            color="#101820"
            variant="caption"
            htmlFor={name}
          >
            {faName}
          </Typography>
        </Grid>
        <Box width="1">
          <img
            style={{ objectFit: 'contain', width: '100%' }}
            src={src}
            alt={`style${name}`}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default StyleRadio;
