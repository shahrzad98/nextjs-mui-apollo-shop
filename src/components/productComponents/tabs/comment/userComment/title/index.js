import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Grid, Typography } from '@mui/material';

export default function Title({ data }) {
  return (
    <Grid container spacing={3}>
      <Grid justifyContent={'end'} item xs={'auto'}>
        <Grid
          width={'208px'}
          container
          wrap="nowrap"
          alignItems={'center'}
          justifyContent={'space-between'}
          columnSpacing={2}
          sx={{
            borderBottom: `1px solid rgba(28, 27, 32, 0.1)`
          }}
          pb={1}
        >
          <Grid display={'flex'} alignItems={'center'}>
            <Grid item>
              <Typography fontSize={'12px'} variant="body1" color="black.40">
                {data.first_name && data.last_name
                  ? `${data?.first_name} ${data?.last_name}`
                  : 'کاربر'}
              </Typography>
            </Grid>

            <Grid item pl={'8px'}>
              <Typography fontSize={'12px'} variant="body1" color="black.40">
                {new Date(data?.created_at)?.toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              juscifyContent: 'center',
              pr: 2,
              py: 1
            }}
            style={{
              backgroundColor: '#f1f1f1'
            }}
          >
            <Typography variant="body1" color={'GrayText'} mt={1}>
              {data?.score}
            </Typography>
            <StarRoundedIcon fontSize="small" color={'disabled'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
