import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, MobileInfoContainer } from './info.style';
import { Divider, Grid, Stack } from '@mui/material';
import Comments from './Comments';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import useIsMobile from '../../shared/Hooks/useIsMobile';

function InfoMobile({ description, features }) {
  const isMobile = useIsMobile();

  const [expanded, setExpanded] = React.useState({
    1: false,
    2: false,
    3: false
  });

  const handleExpandClick = (id, value) => {
    setExpanded({ ...expanded, [id]: !value });
  };
  return (
    <MobileInfoContainer>
      {!!description?.length && (
        <>
          <Divider />
          <CardActions
            onClick={() => handleExpandClick(1, expanded[1])}
            disableSpacing
            sx={{ border: 'none' }}
          >
            <Typography variant="subtitle2" color="text.primary">
              توضیحات محصول
            </Typography>
            <ExpandMore
              className="expandButton"
              expand={expanded[1]}
              aria-expanded={expanded[1]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
            <CardContent
              sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
            >
              {description}
            </CardContent>
          </Collapse>
        </>
      )}

      {!!features?.length && (
        <>
          {' '}
          <Divider />
          <CardActions
            onClick={() => handleExpandClick(2, expanded[2])}
            disableSpacing
            sx={{ border: 'none' }}
          >
            <Typography variant="subtitle2" color="text.primary">
              مشخصات محصول
            </Typography>
            <ExpandMore
              className="expandButton"
              expand={expanded[2]}
              aria-expanded={expanded[2]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
            {!!features?.length && (
              <CardContent className="features">
                {features?.map(item => (
                  <Grid
                    key={`product-feature-${Math.floor(Math.random() * 10000)}`}
                    container
                    alignItems="center"
                  >
                    <Grid item xs={isMobile ? 6 : 2}>
                      <Stack direction="row" alignItems="center">
                        <Brightness1Icon
                          sx={{ fontSize: '5px', color: 'black.40' }}
                        />
                        <Typography
                          color="text.secondary"
                          ml="8px"
                          sx={{ overflowWrap: 'anywhere' }}
                        >
                          {item?.title}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={isMobile ? 6 : 4}
                      color="text.primary"
                      sx={{ overflowWrap: 'anywhere' }}
                    >
                      {item?.description}
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            )}
          </Collapse>
        </>
      )}

      <Divider />
      <CardActions
        onClick={() => handleExpandClick(3, expanded[3])}
        disableSpacing
        sx={{ border: 'none' }}
      >
        <Typography variant="subtitle2" color="text.primary">
          نظرات کاربران
        </Typography>
        <ExpandMore
          className="expandButton"
          expand={expanded[3]}
          aria-expanded={expanded[3]}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
        <CardContent>
          <Comments />
        </CardContent>
      </Collapse>
      {!expanded[3] && <Divider />}
    </MobileInfoContainer>
  );
}

export default InfoMobile;
