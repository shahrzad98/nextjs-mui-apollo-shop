import { useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';
import DisplayMode from './DisplayMode';
import EditBanner from './EditBanner';
import SlidesMotion from './SlidesMotion';

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

const BannerSection = ({ setSectionType, setSections, setSectionData }) => {
  const {
    data: { banner }
  } = useCustomization('banner');

  const handleSetIsNewBanner = () => {
    banner?.banners?.handleAddNewItem?.();
  };

  const openEditMode = item => {
    setSections('ویرایش بنر');
    setSectionType('edit_banner');
    setSectionData(item);
  };

  return (
    <Root container>
      <DisplayMode />
      <CustomDivider />
      <SlidesMotion />
      <CustomDivider />
      <EditBanner
        openEditMode={openEditMode}
        handleSetIsNewBanner={handleSetIsNewBanner}
        banners={banner?.banners}
      />
    </Root>
  );
};

export default BannerSection;
