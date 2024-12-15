import { useStoreInfo } from '@digify/theme-kit';
import { Box, Grid, Link } from '@mui/material';

const Enamad = () => {
  const {
    enamad: { e_namad_reference_link, e_namad_img_src, e_namad_img_id }
  } = useStoreInfo();

  return (
    <Grid container justifyContent="center" alignItems="center">
      {!!e_namad_reference_link && !!e_namad_img_src && !!e_namad_img_id && (
        <Box width="175px" minHeight="175px">
          <Link
            referrerPolicy="origin"
            target="_blank"
            href={e_namad_reference_link}
            sx={{ width: '100%', height: '100%' }}
          >
            <img
              width="100%"
              src={e_namad_img_src}
              alt="enamad"
              id={e_namad_img_id}
            />
          </Link>
        </Box>
      )}
    </Grid>
  );
};

export default Enamad;
