import { Grid, Typography, Link as MuiLink, Box } from '@mui/material';
import EmptyCategories from 'src/components/home/customization/sidebar/svg/emptyCategories';
import BaseImg from 'src/components/shared/BaseImg';
import Link from 'next/link';
import { getResponsiveValues } from 'utils/getResponsiveValues';
import CategoryHoverTitle from '../title';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import useListHover from 'src/components/shared/Hooks/useListHover';

export default function CategoryCard({ categories, isDark }) {
  const isDesktop = !useIsMobile();
  const { hovers, handleMouseEnter, handleMouseLeave } = useListHover({
    count: 4
  });
  const titleColor = isDark ? '#fefefe' : '#171C22';
  const bgColor = isDark ? '#1C1B20B2' : '#FEFEFEB2';

  return (
    <Grid container spacing={getResponsiveValues([3, 4])}>
      {categories.map((category, index) => (
        <Grid
          key={category.id}
          component="article"
          item
          xs={6}
          md={categories.length == 4 ? 3 : 4}
          overflow="hidden"
        >
          {category?.link && category?.name ? (
            <Grid
              item
              container
              borderRadius="2px"
              overflow="hidden"
              position="relative"
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave(index)}
            >
              <Box
                width="1"
                height="1"
                sx={{
                  transform: `scale(${hovers[index] ? 1.15 : 1})`,
                  transition: '0.5s ease-out'
                }}
              >
                <BaseImg
                  productPlaceHolder
                  size={{ w: 1000, h: 1000 }}
                  q={90}
                  aspectRatio="1/1"
                  objectFit="cover"
                  src={category.image}
                  alt={category.name}
                />
              </Box>
              {isDesktop ? (
                <CategoryHoverTitle
                  titleColor={titleColor}
                  bgColor={bgColor}
                  title={category.name}
                  link={category.link}
                  hover={hovers[index]}
                />
              ) : (
                <Grid position="absolute" width="1" height="1">
                  <Link href={category.link} passHref>
                    <MuiLink
                      sx={{
                        textDecoration: 'none',
                        width: '1',
                        height: '1',
                        display: 'flex',
                        alignItems: 'flex-end'
                      }}
                    >
                      <Grid
                        width="1"
                        px={2}
                        container
                        alignItems="center"
                        justifyContent="center"
                        bgcolor={bgColor}
                        height={44}
                      >
                        <Typography
                          variant="subtitle2"
                          component="h2"
                          color={titleColor}
                          textAlign="center"
                          width="1"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {category.name}
                        </Typography>
                      </Grid>
                    </MuiLink>
                  </Link>
                </Grid>
              )}
            </Grid>
          ) : (
            <Grid
              container
              sx={{
                aspectRatio: '1/1'
              }}
              item
              bgcolor="#F3F3F3"
              justifyContent="center"
              flexDirection="column"
              color="#A3A5A7"
              gap={3}
              alignItems="center"
            >
              <EmptyCategories size={100} color="#E8E8E8" />
              <Typography variant="subtitle1" component="p">
                دسته بندی {index + 1}
              </Typography>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
