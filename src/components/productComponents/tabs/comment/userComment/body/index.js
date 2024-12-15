import { Grid, Typography } from '@mui/material';

export default function Body({ desc, variant, images }) {
  return (
    <Grid container justifyContent={'space-between'} alignItems={'center'}>
      <Grid item xs={12} md={8}>
        <Grid container flexDirection={'column'} spacing={2}>
          <Grid item>
            <Typography
              pt={'12px'}
              textAlign={'left'}
              variant="body1"
              color="black.70"
            >
              {desc}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3} wrap="nowrap">
              {variant?.option_values.map(item => (
                <Grid key={`comment-option-value-${item?.id}`} item>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Typography variant="caption" color="black.20">
                        {item?.option?.name}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="black.40">
                        {item?.value}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        {!!images?.length && (
          <Grid container spacing={2} justifyContent={'flex-end'}>
            {images.map((item, index) => (
              <Grid key={index} item>
                <img
                  width={false ? 64 : 120}
                  height={false ? 64 : 120}
                  src={item?.image}
                  alt={`gallery-${index}`}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
