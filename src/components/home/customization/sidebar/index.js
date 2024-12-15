import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  tooltipClasses,
  Box
} from '@mui/material';
import HeaderSVG from './svg/header1';
import NavbarIcon from './svg/navbar';
import HeaderIcon from './svg/headerIcon';
import BannerIcon from './svg/banner';
import HotOfferIcon from './svg/hotoffer';
import SectionCard from './cards/sectionCard';
import CategorySVG from './svg/category';
import DiscountSVG from './svg/discount';
import UtilsSVG from './svg/utils';
import FooterSVG from './svg/footer';
import { Close } from '@mui/icons-material';
import TopNavbarSection from './sections/topNavbar';
import HeaderSection from './sections/HeaderSection';
import BannerSection from './sections/BannerSection';
import HotOfferSection from './sections/HotOfferSection';
import CategorySection from './sections/CategorySection';
import ProductsSection from './sections/ProductsSection';
import UtilsSection from './sections/UtilsSection';
import FooterSection from './sections/FooterSection';
import ColorSettingsSVG from './svg/colors';
import ColorsSection from './sections/ColorsSection';
import NewBanner from './sections/BannerSection/NewBanner';
import { useCustomization } from '@digify/theme-kit';
import CustomSwitch from './sections/BannerSection/CustomSwitch';

export const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#101820dd',
    borderRadius: '8px'
  }
}));

const Style = styled(Grid)`
  overflow: hidden;
  height: calc(100vh - 120px);
  .MuiTooltip-popper {
    background-color: red !important;
  }
  .MuiButtonBase-root {
    height: 48px !important;
    min-height: 48px !important;
  }
  .switch_cont {
    .MuiButtonBase-root {
      height: auto !important;
      min-height: auto !important;
    }
  }
  p {
    margin: 0;
  }
  .sections {
    margin-top: 24px !important;
    margin-bottom: 16px !important;
    border: 0.5px solid #c9c3e0 !important;
    border-radius: 14px !important;
    width: 100%;
  }
  .settings {
    margin: 0;
    border: 0.5px solid #c9c3e0 !important;
    border-radius: 14px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    width: 100%;
  }
  .MuiAccordionDetails-root {
    height: calc(100vh - 280px);
    max-height: calc(100vh - 280px);
    overflow-y: auto;
    width: 100%;
  }
  .divider {
    height: 1px;
    background-color: #dad6e9;
    margin: 0 0 16px;
  }
  .rmBannerImage {
    position: absolute;
    height: 35px !important;
    min-height: 35px !important;
    width: 35px;
    top: 10px;
    left: 15px;
    background: #9c9c9c;
    opacity: 0.8;
    border-radius: 50%;
  }
`;

const primaryColors = ['#483493', '#9185BE'];

const SideBar = ({ customerViewRef }) => {
  const sectionRef = useRef();
  const {
    data: { adBar }
  } = useCustomization('adBar');
  const {
    data: { utils }
  } = useCustomization('utils');
  const {
    data: { category }
  } = useCustomization('category');
  const _SECTIONS = [
    {
      id: 1,
      scrollTo: 'top_navbar_scroll',
      title: 'نوار اعلانات',
      type: 'top_navbar',
      icon: color => <NavbarIcon color={color} />,
      action: (
        <div className="switch_cont">
          <CustomSwitch
            checked={adBar.isShow.value}
            onChange={() => adBar.isShow.handleChangeBoolean()}
          />
        </div>
      )
    },
    {
      id: 2,
      scrollTo: 'header_scroll',
      title: 'هدر',
      type: 'header',
      icon: color => <HeaderIcon color={color} />
    },
    {
      id: 3,
      scrollTo: 'banner_scroll',
      title: 'بنرها',
      type: 'banner',
      icon: color => <BannerIcon color={color} />
    },
    {
      id: 4,
      scrollTo: 'hot_offer_scroll',
      title: 'پیشنهاد ویژه',
      type: 'hot_offer',
      icon: color => <HotOfferIcon color={color} />,
      action: (
        <BootstrapTooltip
          title={
            <Grid p={2} container>
              <Grid container>
                <p className="fs-14 fw-400" style={{ lineHeight: 1.2 }}>
                  برای تعریف پیشنهاد ویژه، وارد تنظیمات پنل شوید.
                </p>
              </Grid>
            </Grid>
          }
        >
          <Box display="flex" alignItems="center" color={'#101820'}>
            <i className="icon-setting" />
          </Box>
        </BootstrapTooltip>
      )
    },
    {
      id: 5,
      scrollTo: 'category_scroll',
      title: 'دسته بندی',
      type: 'category',
      icon: color => <CategorySVG color={color} />,
      action: (
        <CustomSwitch
          checked={category.isShow.value}
          onChange={() => {
            category.isShow.handleChangeBoolean();
          }}
        />
      )
    },
    {
      id: 6,
      scrollTo: 'products_list_scroll',
      title: 'لیست محصولات',
      type: 'products_list',
      icon: color => <DiscountSVG color={color} />,
      action: (
        <BootstrapTooltip
          title={
            <Grid p={2} container>
              <Grid container>
                <h2 className="fs-16 fw-600">تنظیمات محصولات</h2>
              </Grid>
              <Grid container>
                <p className="fs-14 fw-400" style={{ lineHeight: 1.2 }}>
                  می توانید محصولات را در داشبورد خود تعریف کرده و وضعیت نمایش
                  ان ها را در اینجا تعیین کنید.
                </p>
              </Grid>
            </Grid>
          }
        >
          <Box display="flex" alignItems="center" color={'#101820'}>
            <i className="icon-setting" />
          </Box>
        </BootstrapTooltip>
      )
    },
    {
      id: 7,
      scrollTo: 'utils_scroll',
      title: 'سرویس و خدمات',
      type: 'utils',
      icon: color => <UtilsSVG color={color} />,
      action: (
        <div className="switch_cont">
          <CustomSwitch
            checked={utils?.isShow.value}
            onChange={() => utils?.isShow.handleChangeBoolean()}
          />
        </div>
      )
    },
    {
      id: 8,
      scrollTo: 'footer_scroll',
      title: 'فوتر',
      type: 'footer',
      icon: color => <FooterSVG color={color} />
    }
  ];
  const [openTab, setOpenTab] = useState('sections');
  const [sections, setSections] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [sectionData, setSectionData] = useState(null);

  const renderSection = type => {
    switch (type) {
      case 'top_navbar':
        return <TopNavbarSection />;

      case 'header':
        return <HeaderSection />;

      case 'banner':
        return (
          <BannerSection
            setSectionType={setSectionType}
            setSections={setSections}
            setSectionData={setSectionData}
          />
        );

      case 'hot_offer':
        return <HotOfferSection />;

      case 'category':
        return <CategorySection />;

      case 'products_list':
        return <ProductsSection />;

      case 'utils':
        return <UtilsSection />;

      case 'footer':
        return <FooterSection />;

      case 'edit_banner':
        return <NewBanner sectionData={sectionData} />;

      default:
        return;
    }
  };

  const handleAddBannerBackBtn = () => {
    setSectionType('banner');
    setSections('بنرها');
  };

  const handleScrollToSection = sectionId => {
    if (
      sectionId &&
      document.getElementById(sectionId) &&
      customerViewRef?.current
    ) {
      customerViewRef.current.scrollTo({
        top: document.getElementById(sectionId).offsetTop - 200,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [sections]);

  return (
    <Style container>
      <Grid container position="relative">
        <Accordion
          sx={{ overflow: 'hidden' }}
          className="sections"
          onClick={() => setOpenTab('sections')}
          expanded={openTab === 'sections'}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            {sections === '' || openTab === 'colors' ? (
              <Grid container>
                <HeaderSVG
                  color={
                    openTab === 'sections' ? primaryColors[1] : primaryColors[0]
                  }
                />
                <p
                  style={{
                    margin: 0,
                    marginRight: '13px',
                    color:
                      openTab === 'sections'
                        ? primaryColors[1]
                        : primaryColors[0]
                  }}
                >
                  تنظیمات بخش ها
                </p>
              </Grid>
            ) : (
              <Grid
                alignItems="center"
                justifyContent="space-between"
                container
                onClick={() =>
                  sectionType === 'edit_banner'
                    ? handleAddBannerBackBtn()
                    : setSections('')
                }
              >
                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="icon-Arrowarrow-right" />
                  <p
                    style={{
                      marginRight: '7.5px',
                      fontSize: '18px',
                      fontWeight: 500
                    }}
                  >
                    {sections}
                  </p>
                </Grid>
                {_SECTIONS.filter(ef => ef.title === sections)[0]?.action}
              </Grid>
            )}
          </AccordionSummary>
          <AccordionDetails ref={sectionRef}>
            {sections === '' ? (
              <Grid container>
                {' '}
                {_SECTIONS.map((e, i) => (
                  <Grid
                    sx={{
                      width: '100%',
                      color: 'inherit'
                    }}
                    key={e.id}
                    href={`#${e.scrollTo}`}
                  >
                    <Grid container key={e.id}>
                      <SectionCard
                        onClick={() => {
                          setSections(e.title);
                          setSectionType(e.type);
                          handleScrollToSection(e.scrollTo);
                        }}
                        icon={e.icon}
                        title={e.title}
                      />
                      {i === 1 || i === 5 ? (
                        <Grid container className="divider"></Grid>
                      ) : null}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <>
                <Grid container borderTop="0.5px solid #DAD6E9">
                  {renderSection(sectionType)}
                </Grid>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid container>
        <Accordion
          className="settings"
          onClick={() => setOpenTab('colors')}
          expanded={openTab === 'colors'}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Grid alignItems="center" container>
              <Grid container item xs={10}>
                <ColorSettingsSVG
                  color={
                    openTab === 'colors' ? primaryColors[1] : primaryColors[0]
                  }
                />
                <p
                  style={{
                    margin: 0,
                    marginRight: '13px',
                    color:
                      openTab === 'colors' ? primaryColors[1] : primaryColors[0]
                  }}
                >
                  تنظیمات رنگ
                </p>
              </Grid>
              <Grid item xs={2} display={'flex'} justifyContent="flex-end">
                {openTab === 'colors' && (
                  <IconButton
                    onClick={e => {
                      e.stopPropagation();
                      setOpenTab('sections');
                    }}
                  >
                    <Close />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <ColorsSection />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Style>
  );
};

export default SideBar;
