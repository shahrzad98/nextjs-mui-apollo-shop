import { useAuth, useCustomization } from '@digify/theme-kit';

import styled from '@emotion/styled';
import { Button, Grid, IconButton } from '@mui/material';
import LogOutSVG from 'public/static/assets/svg/profile/sidebar/logout';
import React, { useEffect } from 'react';
import { openSnackbar } from 'utils/snackbar';

const Style = styled(Grid)`
  height: 92px;
  background-color: #fff;
  border: 0.5px solid #c9c3e0;
  border-radius: 14px;
  padding: 16px;

  .svgBtn {
    background-color: #f3f3f3;
    border-radius: 14px;
    height: 100%;
    width: 60px;
  }

  .endToolbar {
    display: flex;
  }

  .cancelBtn {
    background-color: #f3f3f3;
    height: 100%;
    border-radius: 10px;
    box-shadow: none;
    color: #483493;

    :hover {
      background-color: #f3f3f3dd;
      box-shadow: none;
    }
  }

  .saveBtn {
    background-color: #483493;
    height: 100%;
    border-radius: 10px;
    box-shadow: none;
    margin-left: 14px;

    :hover {
      background-color: #483493;
      box-shadow: none;
    }
  }
`;

const Toolbar = () => {
  const { handlePublishCustomization, publishLoading, handleRemoveAllChanges } =
    useCustomization();
  const {
    data: { banner }
  } = useCustomization('banner');

  const { logout } = useAuth();
  const redirectHandler = async () => {
    await logout.handleLogout();
    if (window?.location?.hostname?.includes('.apps.')) {
      window.location.assign(
        'https://panel.apps.digify.shop/online-store/personalize/settings/layout'
      );
    } else {
      window.location.assign(
        'https://panel.digify.shop/online-store/personalize/settings/layout'
      );
    }
  };
  useEffect(() => {
    banner?.selectedBanner?.handleChangeNumber(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Style container justifyContent="space-between">
      <IconButton onClick={redirectHandler} className="svgBtn">
        <LogOutSVG color={'#483493'} />
      </IconButton>
      <div className="endToolbar">
        <Button
          className="cancelBtn"
          variant="contained"
          onClick={handleRemoveAllChanges}
        >
          لغو تنظیمات
        </Button>
        <Button
          onClick={() =>
            handlePublishCustomization(() => {
              openSnackbar({
                message: 'تغییرات شما با موفقیت اعمال شد'
              });
            })
          }
          className="saveBtn"
          variant="contained"
        >
          {publishLoading ? 'بارگذاری...' : 'ذخیره'}
        </Button>
      </div>
    </Style>
  );
};

export default Toolbar;
