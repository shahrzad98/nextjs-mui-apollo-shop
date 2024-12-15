import styled from '@emotion/styled';
import {
  ArrowForwardIos,
  CheckBox as CheckBoxIcon,
  IndeterminateCheckBox
} from '@mui/icons-material';
import { Button, Checkbox, Grid, useTheme } from '@mui/material';
import ProfileLayout from 'src/components/profile/layout';
import ThemeLink from 'src/components/shared/ThemeLink';
import { useNotificationSettings } from '@digify/theme-kit';
import { useEffect, useState } from 'react';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const Style = styled(Grid)`
  height: ${props => (props.isDesktop ? '650px' : 'auto')};
  border: 1px solid rgba(28, 27, 32, 0.1);
  border-radius: 2px;

  h1 {
    color: #1c1b20;
    font-size: ${props => (props.isDesktop ? '24px' : '16px')};
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: ${props => (props.isDesktop ? '18px' : '14px')};
    font-weight: 400;
    color: #1c1b2066;
    margin-top: ${props => !props.isDesktop && '16px'};
  }

  h5 {
    font-size: ${props => (props.isDesktop ? '18px' : '14px')};
    font-weight: 400;
    color: #1c1b20b2;
    margin: 0;
  }

  .title_header {
    height: 58px;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    p {
      margin: 0;
    }
  }

  .content_header {
    height: 58px;
    border-bottom: 1px solid #dedede;
  }

  .title_content {
    height: ${props => (props.isDesktop ? '58px' : '38px')};
    border-right: ${props => (props.isDesktop ? '1px solid #dedede' : 'none')};

    p {
      margin: 0;
    }
  }
`;

const Settings = () => {
  const { data, loadings, handleSaveSettings, handleAggregateSelect } =
    useNotificationSettings();
  const isDesktop = !useIsMobile();
  const theme = useTheme();

  const renderTitle = key => {
    switch (key) {
      case 'hot_offer_available':
        return 'موجود شدن محصول در پیشنهاد ویژه';
      case 'order_invoice':
        return 'فاکتور خرید';
      case 'product_available':
        return 'موجود شدن محصول';
      case 'receive_order':
        return 'دریافت سفارش';
      case 'return_invoice':
        return 'فاکتور مرجوعی';
      case 'survey':
        return 'نظرسنجی';
      default:
        return key;
    }
  };

  const [allSmsChecks, setAllSmsChecks] = useState(0);
  const [allEmailChecks, setAllEmailChecks] = useState(0);
  const [allInternalChecks, setAllInternalChecks] = useState(0);

  const handleOpenSnackbar = () => {
    openSnackbar({ message: 'تغییرات شما با موفقیت اعمال شد' });
  };

  useEffect(() => {
    if (data.settings.hot_offer_available.sms) {
      let smsAll = 0;
      Object.entries(data.settings).forEach(element => {
        if (element[1].sms.value === true) {
          smsAll = smsAll + 1;
        }
      });
      setAllSmsChecks(smsAll);
    }
    if (data.settings.hot_offer_available.email) {
      let emailAll = 0;
      Object.entries(data.settings).forEach(element => {
        if (element[1].email.value === true) {
          emailAll = emailAll + 1;
        }
      });
      setAllEmailChecks(emailAll);
    }
    if (data.settings.hot_offer_available.internal) {
      let internalAll = 0;
      Object.entries(data.settings).forEach(element => {
        if (element[1].internal.value === true) {
          internalAll = internalAll + 1;
        }
      });
      setAllInternalChecks(internalAll);
    }
  }, [data.settings]);
  return (
    <ProfileLayout>
      {!isDesktop && (
        <ThemeLink href={'/profile'}>
          <Grid item xs={4} alignItems="center" mb={3} container>
            <ArrowForwardIos color="primary" />{' '}
            <p
              style={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontSize: '18px',
                fontWeight: 500,
                margin: 0,
                marginRight: '8px'
              }}
            >
              تنظیمات
            </p>
          </Grid>
        </ThemeLink>
      )}
      <Style
        p={isDesktop ? 4 : 0}
        isDesktop={isDesktop}
        container
        alignContent="start"
      >
        <Grid
          p={!isDesktop ? 3 : 0}
          pb={0}
          container
          justifyContent="space-between"
        >
          <h1>تنظیمات اطلاع رسانی‌ها</h1>
          {isDesktop && (
            <Button
              disabled={loadings.updateLoading}
              onClick={() => handleSaveSettings(handleOpenSnackbar())}
              variant="contained"
              color="primary"
            >
              ذخیره تغییرات
            </Button>
          )}
        </Grid>
        <Grid pr={!isDesktop ? 3 : 0} pl={!isDesktop ? 3 : 0} container>
          <p>در این بخش میتوانید مسیر اطلاع رسانی هر مورد را شخصی سازی کنید</p>
        </Grid>
        <Grid sx={{ display: { xs: 'none', md: 'flex' } }} mt={4} container>
          <Grid
            container
            alignItems="center"
            pl={4}
            item
            xs={12}
            md={5}
            className="title_header"
          >
            <p>عنوان</p>
          </Grid>
          <Grid
            container
            item
            xs={12}
            alignItems="center"
            md={7}
            className="content_header"
          >
            <Grid alignItems="center" item container xs={4}>
              <Checkbox
                onChange={() => {
                  if (allEmailChecks < 6) {
                    handleAggregateSelect('email', 'SELECT');
                  } else {
                    handleAggregateSelect('email', 'DE_SELECT');
                  }
                }}
                checkedIcon={
                  allEmailChecks < 6 ? (
                    <IndeterminateCheckBox color={theme.palette.primary.main} />
                  ) : (
                    <CheckBoxIcon />
                  )
                }
                checked={allEmailChecks > 0}
                color="primary"
              />
              <h5>ایمیل</h5>
            </Grid>
            <Grid alignItems="center" item container xs={4}>
              <Checkbox
                onChange={() => {
                  if (allSmsChecks < 6) {
                    handleAggregateSelect('sms', 'SELECT');
                  } else {
                    handleAggregateSelect('sms', 'DE_SELECT');
                  }
                }}
                checkedIcon={
                  allSmsChecks < 6 ? (
                    <IndeterminateCheckBox color={theme.palette.primary.main} />
                  ) : (
                    <CheckBoxIcon />
                  )
                }
                checked={allSmsChecks > 0}
                color="primary"
              />
              <h5>پیامک</h5>
            </Grid>
            <Grid alignItems="center" item container xs={4}>
              <Checkbox
                onChange={() => {
                  if (allInternalChecks < 6) {
                    handleAggregateSelect('internal', 'SELECT');
                  } else {
                    handleAggregateSelect('internal', 'DE_SELECT');
                  }
                }}
                checkedIcon={
                  allInternalChecks < 6 ? (
                    <IndeterminateCheckBox color={theme.palette.primary.main} />
                  ) : (
                    <CheckBoxIcon />
                  )
                }
                checked={allInternalChecks > 0}
                color="primary"
              />
              <h5>اعلانات</h5>
            </Grid>
          </Grid>
        </Grid>
        {data.settings.hot_offer_available.sms &&
          Object.entries(data.settings).map(([key, value]) => (
            <Grid
              sx={{
                borderBottom: {
                  xs: '1px solid rgba(28, 27, 32, 0.1)',
                  md: 'none'
                },
                borderTop: { xs: '1px solid rgba(28, 27, 32, 0.1)', md: 'none' }
              }}
              key={key}
              container
            >
              <Grid
                container
                alignItems="center"
                pl={isDesktop ? 4 : 3}
                item
                xs={12}
                md={5}
                className="title_content"
              >
                <p>{renderTitle(key)}</p>
              </Grid>
              <Grid
                container
                item
                xs={12}
                alignItems="center"
                md={7}
                className="content_content"
              >
                <Grid alignItems="center" item container xs={4}>
                  <Checkbox
                    onChange={value.email.handleChange}
                    checked={value.email.value}
                    value={value.email.value}
                    color="primary"
                  />
                  {!isDesktop && <p>ایمیل</p>}
                </Grid>
                <Grid alignItems="center" item container xs={4}>
                  <Checkbox
                    disabled={key === 'survey' || key === 'return_invoice'}
                    onChange={value.sms.handleChange}
                    checked={value.sms.value}
                    value={value.sms.value}
                    color="primary"
                  />
                  {!isDesktop && <p>پیامک</p>}
                </Grid>
                <Grid alignItems="center" item container xs={4}>
                  <Checkbox
                    onChange={value.internal.handleChange}
                    checked={value.internal.value}
                    value={value.internal.value}
                    color="primary"
                  />
                  {!isDesktop && <p>اعلان</p>}
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Style>
      {!isDesktop && (
        <Grid mt={4} container>
          <Button
            fullWidth
            disabled={loadings.updateLoading}
            onClick={() => handleSaveSettings(handleOpenSnackbar())}
            variant="contained"
            color="primary"
          >
            ذخیره تغییرات
          </Button>
        </Grid>
      )}
    </ProfileLayout>
  );
};

export default Settings;

{
  /* <div>
  <p>Email</p>

  {Object.entries(email).map(([key, value], i) => {
    return (
      <div
        onClick={() => value.handleChange()}
        key={i}
        style={{ display: 'flex', alignItems: 'center' }}>
        <p>{key}</p>
        <input type="checkbox" checked={value.value} />
      </div>
    );
  })}
  </div>
  <div>
  <p>sms</p>
  {Object.entries(sms).map(([key, value], i) => {
    return (
      <div
        onClick={() => value.handleChange()}
        key={i}
        style={{ display: 'flex', alignItems: 'center' }}>
        <p>{key}</p>
        <input type="checkbox" checked={value.value} />
      </div>
    );
  })}
  </div>
  <div>
  <p>notification</p>
  {Object.entries(notification).map(([key, value], i) => {
    return (
      <div
        onClick={() => {
  console.log('SvgComponent', width, height),
          value.handleChange();
        }}
        key={i}
        style={{ display: 'flex', alignItems: 'center' }}>
        <p>{key}</p>
        <input type="checkbox" checked={value.value} />
      </div>
    );
  })}
  </div>
  <button onClick={handleSaveSettings}>
  {updateLoading ? 'loading...' : 'save'}
  </button> */
}
