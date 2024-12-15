import { Link as MuiLink, Typography, Stack } from '@mui/material';
import { Box } from '@mui/system';
import BaseImg from 'src/components/shared/BaseImg';
import Link from 'next/link';
import { StyledMuiLink } from './styled';
function StoreNameAndLogo({ storeLogo, storeName, openMenu = false }) {
  return (
    <Link href={'/'} as={`/`} passHref>
      <MuiLink
        sx={{
          textDecoration: 'none'
        }}
      >
        <StyledMuiLink
          sx={{
            padding: { xs: openMenu ? '0 16px !important' : '0', md: '0' }
          }}
        >
          <Stack
            direction={'row'}
            alignItems="center"
            sx={{
              justifyContent: {
                xs: openMenu ? 'flex-start' : 'center',
                md: 'flex-start'
              }
            }}
          >
            <Box
              className="logoConent"
              sx={{
                width: { xs: 24, md: 40 },
                height: { xs: 24, md: 40 }
              }}
            >
              {storeLogo && (
                <BaseImg
                  size={{ h: 300, w: 300 }}
                  src={storeLogo}
                  alt={storeName}
                />
              )}
            </Box>
            <Typography
              variant="body2"
              className="storeName"
              component="p"
              ml={'10px'}
            >
              {storeName}
            </Typography>
          </Stack>
        </StyledMuiLink>
      </MuiLink>
    </Link>
  );
}

export default StoreNameAndLogo;
