import { Button, Grid } from '@mui/material';
import SectionTitle from '../../shared/SectionTitle';
import CategoryCard from './body';
import { useCategories, useCustomization } from '@digify/theme-kit';
import { useMemo } from 'react';
import Link from 'next/link';

export default function Categories() {
  const {
    data: { colors }
  } = useCustomization('colors');

  const {
    data: { category }
  } = useCustomization('category');

  const {
    link: { href },
    data: categoriesData
  } = useCategories();

  const categoryIDs = useMemo(
    () =>
      categoriesData.categories.map(item => {
        return item.id;
      }),
    [categoriesData.categories]
  );

  const iterableCategories = useMemo(() => {
    const customCategories = category.categories.value;
    return customCategories.map((customItem, i) => {
      const includedCategory = categoriesData.categories.find(
        cat => cat.id === customItem.categoryId
      );
      return categoryIDs.includes(customItem.categoryId)
        ? {
            id: customItem.id,
            image: customItem.image,
            link: includedCategory.link.href,
            name: includedCategory.title
          }
        : {
            id: i
          };
    });
  }, [categoriesData.categories, category.categories, categoryIDs]);

  return (
    <Grid
      id="category_scroll"
      container
      px={2}
      margin={'auto'}
      maxWidth={1280}
      component="section"
    >
      {category.isShow.value && (
        <Grid
          container
          flexDirection={'column'}
          spacing={1}
          m={'auto'}
          mb={{ xs: 2, md: 4 }}
        >
          {category.isShowName.value && (
            <SectionTitle title={category.name.value || 'دسته بندی‌ها'} />
          )}
          <CategoryCard
            categories={iterableCategories}
            isDark={colors.style.value === 'dark'}
          />
          <Grid container justifyContent="center" mt={3}>
            <Link href={href} passHref>
              <a>
                <Button
                  sx={{
                    borderRadius: 30,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  نمایش همه دسته‌ها
                  <i className="icon-arrow-left" />
                </Button>
              </a>
            </Link>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
