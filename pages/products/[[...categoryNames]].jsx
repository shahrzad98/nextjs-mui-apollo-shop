import {
  ssrQueries,
  useBreadcrumb,
  useProducts,
  useStoreInfo,
  withApollo
} from '@digify/theme-kit';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import CategoriesHeader from 'src/components/products/CategoriesHeader';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import CategoryContainer, { StyledSection } from './category.style';
import FiltersMobile from 'src/components/products/filter/FiltersMobile';
import { Box, Pagination, Stack } from '@mui/material';
import FiltersDesktop from 'src/components/products/filter/FiltersDesktop';
import SelectedFilter from 'src/components/products/Select/SelectedFilter';
import ProductsWrapper from 'src/components/products/ProductsWrapper';
import BreadcrumbStructuredData from 'src/components/structuredDataHead/Breadcrumb';
import getChildrenDepth from 'utils/getChildrenDepth';

const Products = () => {
  const {
    filterParams,
    pagination,
    data: productsData,
    loading,
    handleLoadMore,
    hasMore
  } = useProducts();
  const { domain } = useStoreInfo();
  const { products } = productsData;

  const [open, setOpen] = useState(false);
  const { data: category } = useBreadcrumb();
  const isMobile = useIsMobile();
  const router = useRouter();
  const { query } = router;
  const [filterOpen, setFilterOpen] = useState(false);

  const mustScrollOrNot = useMemo(
    () =>
      !isMobile &&
      !!products?.length &&
      pagination.pageCount > 1 &&
      (products.length >= 120 || !!parseInt(query.page)),
    [isMobile, products, pagination.pageCount, query.page]
  );

  return (
    <StyledSection>
      <BreadcrumbStructuredData
        list={[
          { name: 'همه محصولات', url: decodeURI(domain + '/products') },
          ...getChildrenDepth(category).map(bc => ({
            name: bc.title,
            url: decodeURI(
              domain + '/products/' + bc.link.href.query.categoryNames.join('/')
            )
          }))
        ]}
      />
      <CategoryContainer>
        <CategoriesHeader
          router={router}
          loading={loading}
          category={category}
          filterParams={filterParams}
          isMobile={isMobile}
        />

        {isMobile && (
          <>
            <FiltersMobile
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              filterParams={filterParams}
              setOpen={setOpen}
              open={open}
            />
          </>
        )}

        {isMobile && !!filterParams.selectedFilters?.length && (
          <Box p="0 16px">
            <SelectedFilter
              selectedFilters={filterParams.selectedFilters}
              handleClearAll={filterParams.handleClearAllFilters}
            />
          </Box>
        )}

        <Stack direction="row">
          {!isMobile && <FiltersDesktop filterParams={filterParams} />}
          <ProductsWrapper
            filterParams={filterParams}
            loading={loading}
            products={products}
            handleLoadMore={handleLoadMore}
            hasMore={
              (products.length < 120 && hasMore && !parseInt(query.page)) ||
              (isMobile && hasMore)
            }
          />
        </Stack>

        {mustScrollOrNot && (
          <Box className="paginationContainer">
            <Pagination
              page={parseInt(query.page) || 10}
              onChange={(e, page) => pagination.handleChangePage(page)}
              count={pagination.pageCount}
              shape="rounded"
            />
          </Box>
        )}
      </CategoryContainer>
    </StyledSection>
  );
};

Products.setPageConfig = {
  dynamicRendering: true
};

export default withApollo(Products)([
  ssrQueries.getProducts(),
  ssrQueries.getBreadcrumb()
]);
