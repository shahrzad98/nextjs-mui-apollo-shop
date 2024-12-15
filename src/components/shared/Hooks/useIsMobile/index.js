import { useMediaQuery } from '@mui/material';

const useIsMobile = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  return isMobile;
};
export default useIsMobile;
