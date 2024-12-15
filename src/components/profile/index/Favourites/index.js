import {
  Box,
  CardContent,
  Link as MuiLink,
  Stack,
  Typography
} from '@mui/material';
import { useFavorites } from '@digify/theme-kit';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { currency } from 'utils/currency';
import Link from 'next/link';
import { StyleRoot } from './styled';

const ProfileFavourites = () => {
  const { data, handleLoadMore, hasMore } = useFavorites();
  return (
    <StyleRoot variant="outlined">
      <Stack
        pt={'24px'}
        direction={'row'}
        width={'100%'}
        justifyContent={'space-between'}
      >
        <Typography variant="body1"> علاقه‌مندی‌های شما</Typography>
        <Link
          passHref
          href={{
            pathname: `/profile/favorites`
          }}
        >
          <MuiLink className="showAllLink">
            <Typography variant="body2" color={'secondary'} textAlign={'end'}>
              مشاهده همه
            </Typography>
          </MuiLink>
        </Link>
      </Stack>

      <CardContent className="cardContent">
        <Box height={'100%'} id="scrollableDivF" style={{ overflow: 'hidden' }}>
          <InfiniteScroll
            dataLength={data.length}
            next={() => handleLoadMore()}
            hasMore={hasMore}
            scrollableTarget="scrollableDivF"
          >
            {data.map(e => (
              <Link {...e.link} key={e.id} passHref>
                <MuiLink>
                  <Box className="item">
                    <Stack direction={'row'} alignItems="center">
                      <Box width={'40px'} height={'30px'} mr={1}>
                        <img
                          src={e?.image}
                          alt={e?.label}
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="body2">{e?.label}</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'flex-end'}>
                      <Typography variant="body2">
                        {currency(e.cost)} <span>تومان</span>
                      </Typography>
                    </Stack>
                  </Box>
                </MuiLink>
              </Link>
            ))}
          </InfiniteScroll>
        </Box>
      </CardContent>
    </StyleRoot>
  );
};

export default ProfileFavourites;
