import NeshanMap from '../../../shared/mapNeshan/showingMap';
const { Box, Typography } = require('@mui/material');

const DeleteContent = ({ addr }) => {
  return (
    <Box className="deleteContent">
      <Typography
        variant="body1"
        color={'#1C1B20'}
        component="div"
        sx={{ textAlign: 'center', mb: 2, mt: 2, fontWeight: '500' }}
      >
        از حذف آدرس {addr.name} اطمینان دارید ؟
      </Typography>
      <Box
        className="neshanMap"
        sx={{
          width: { xs: '156px', md: '217px' }
        }}
      >
        <NeshanMap
          styles={{
            zIndex: '0'
          }}
          latLng={[addr?.latitude, addr.longitude]}
        />
      </Box>
      <Typography component="div" sx={{ textAlign: 'center', mt: 2 }}>
        {addr?.address || ''}
      </Typography>
    </Box>
  );
};

export default DeleteContent;
