import { useProductFeedback } from '@digify/theme-kit';
import { Grid, Skeleton, Typography } from '@mui/material';

export default function Gallery() {
  const { data, loading } = useProductFeedback({
    imageOnly: true
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {loading ? (
          <Skeleton width={200} height={50} />
        ) : (
          <Typography
            mt={'32px'}
            fontSize={'16px'}
            textAlign={'left'}
            variant="subtitle1"
          >
            تصاویر ارسالی کاربران
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {loading && (
          <Grid container spacing={3}>
            {Array.from({ length: 10 }).map((_item, i) => (
              <Grid key={`product-feedback-images-skeleton-${i}`} item>
                <Skeleton width={120} height={180} />
              </Grid>
            ))}
          </Grid>
        )}
        <Grid container spacing={1} justifyContent={'start'} gap={'16px'}>
          {!!data.results?.length &&
            !loading &&
            data.results.map((item, index) => (
              <Grid key={`product-feedback-images-${index}`}>
                <img
                  width={false ? 64 : 120}
                  height={false ? 64 : 120}
                  src={item?.images[0]?.image}
                  alt={`gallery-${index}`}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
