import { useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';
import { useCallback, useEffect, useMemo } from 'react';
import BannerAddLink from './BannerAddLink';
import ContentAlign from './ContentAlign';
import ContentCustomize from './ContentCustomize';
import ImageUpload from './ImageUpload';

const Root = styled(Grid)`
  width: 100%;
  padding: 8px 8px 100px 8px;
`;

const CustomDivider = styled(Divider)`
  width: 100%;
  height: 1px;
  color: #dad6e9;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const NewBanner = ({ sectionData }) => {
  const {
    data: { banner }
  } = useCustomization('banner');

  const bannerData = useMemo(
    () => banner?.banners.value?.find(item => item.id === sectionData.id),
    [banner?.banners, sectionData]
  );

  useEffect(() => {
    if (sectionData?.id) {
      banner?.selectedBanner?.handleChangeNumber(sectionData?.id);
      return () => banner?.selectedBanner?.handleChangeNumber(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target }) => {
    if (target.value === 'true' || target.value === 'false')
      banner?.banners?.handleChange(
        bannerData?.id,
        target.name,
        !JSON.parse(target.value)
      );
    else
      banner?.banners?.handleChange(bannerData?.id, target.name, target.value);
  };

  const handleChangeImage = useCallback(
    image => banner?.banners?.handleChange(bannerData?.id, 'image', image),
    [banner?.banners, bannerData?.id]
  );

  const defaultImage = useMemo(() => {
    return banner?.banners?.options?.find(item => item.key === 'image')?.value;
  }, [banner]);

  return (
    <Root container>
      <ImageUpload
        defaultImage={defaultImage}
        image={bannerData?.image}
        handleChangeImage={handleChangeImage}
      />
      <CustomDivider />
      <ContentCustomize data={bannerData} handleChange={handleChange} />
      <CustomDivider />
      <BannerAddLink link={bannerData?.link} handleChange={handleChange} />
      <CustomDivider />
      <ContentAlign align={bannerData?.align} handleChange={handleChange} />
    </Root>
  );
};

export default NewBanner;
