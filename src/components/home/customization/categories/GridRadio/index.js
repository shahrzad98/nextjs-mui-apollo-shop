import { Box, Grid, Radio, Typography } from '@mui/material';
import CheckedSVG from 'src/components/home/customization/sidebar/svg/checkedSVG';

const GridRadio = ({ grid: { name, image, count }, checked, handleClick }) => {
  return (
    <Grid
      container
      py={2}
      onClick={() => {
        handleClick(count);
      }}
    >
      <Box
        bgcolor="#F3F3F3"
        border="1px solid transparent"
        borderRadius="10px"
        p={2}
        sx={{
          ':hover': {
            border: '1px solid #C9C3E0'
          },
          transition: '0.3s'
        }}
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
            {name}
          </Typography>
        </Grid>
        <Box width="1" bgcolor="#fff" p={3} borderRadius="10px">
          <img
            style={{ objectFit: 'contain', width: '100%' }}
            src={image}
            alt={`style${name}`}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default GridRadio;
