/* eslint-disable no-debugger */
import styled from '@emotion/styled';
import { Add, Close, EditOutlined } from '@mui/icons-material';
import {
  CircularProgress,
  Grid,
  IconButton,
  Radio,
  TextField
} from '@mui/material';
import React, { useState } from 'react';
import ReactImageUploading from 'react-images-uploading';
import CheckedSVG from '../svg/checkedSVG';
import LinkSVG from '../svg/linkSVG';
import NavbarIcon from '../svg/navbar';
import EditIcon from 'public/static/assets/svg/shared/Pencil';
import ColorPicker from 'src/components/shared/Color-Picker';
import { useCustomization, useImageUpload } from '@digify/theme-kit';
import useDidUpdateEffect from 'utils/useDidUpdateEffect';

const SUGGESTION_COLORS = [
  {
    code: '#FFD2AA'
  },
  {
    code: '#FFEDB8'
  },
  {
    code: '#FFCCCC'
  },
  {
    code: '#EBD8F2'
  },
  {
    code: '#CCF3FF'
  },
  {
    code: '#D0FFE4'
  },
  {
    code: '#F4F4F4'
  },
  {
    code: '#D7D7D7'
  },
  {
    code: '#B8A89E'
  },
  {
    code: '#ABA490'
  },
  {
    code: '#A98181'
  },
  {
    code: '#246378'
  },
  {
    code: '#46314E'
  },
  {
    code: '#445F4F'
  },
  {
    code: '#9DA5A1'
  },
  {
    code: '#171C22'
  }
];

const Style = styled(Grid)`
  .border_right {
    border-left: 4px solid #dad6e9;
    padding-left: 14px;
    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
  }
  .section_cont {
    height: 56px;
    border-radius: 10px;
    background-color: #f3f3f3;
    padding: 16px;
    cursor: pointer;
    .MuiButtonBase-root {
      height: 26px !important;
      min-height: auto !important;
      padding: 0;
      width: 26px;
    }
    p {
      margin: 0;
      margin-left: 14px;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .divider {
    height: 1px;
    background-color: #f3f3f3;
    margin: 24px 0 !important;
  }
  .image_upload {
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 16px;
  }
  .dashed {
    border: 1px dashed #6d5da9;
    border-radius: 10px;
    background-color: #fff;
    height: 54px;
    cursor: pointer;
  }
  .preview_image {
    width: 100%;
    height: 52px;
    border: 1px solid #c9c3e0;
    border-radius: 10px;
    position: relative;
    background-color: #fff;
    .remove_img {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      border-top: none;
      border-left: none;
    }
    img {
      object-fit: cover;
    }
  }
  .link_cont {
    height: 60px;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 8px;
  }
  .link_input {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 0 16px;
    width: 100%;
    height: 44px;
    direction: rtl;
    position: relative;
    background-color: #fff;
    .MuiInput-root {
      height: 100%;
      direction: rtl;
    }
    .MuiInput-input {
      direction: rtl;
    }
  }
  .text_navbar_input {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 8px 16px;
    width: 100%;
    position: relative;
    background-color: #fff;
    .MuiInput-root {
      height: 100%;
    }
  }
  .text_navbar_cont {
    padding: 12px 16px;
    background-color: #f3f3f3;
    border-radius: 10px;
  }
  .color_picker_header {
    height: 60px;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 14px 16px;
    button {
      padding: 0;
      height: auto !important;
      min-height: auto !important;
    }
    .color_toolbar_preview {
      height: 32px;
      width: 32px;
      border-radius: 10px;
      border: 0.5px solid #c9c3e0;
    }
  }
  .color_picker_edit {
    height: auto;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 14px 16px;
    button {
      padding: 0;
      height: auto !important;
      min-height: auto !important;
    }
    .color_toolbar_preview {
      height: 32px;
      width: 32px;
      border-radius: 10px;
      border: 0.5px solid #c9c3e0;
    }
    .color_suggest {
      width: 24px;
      height: 24px;
      border: 0.5px solid #c9c3e2;
      border-radius: 8px;
      margin-right: 12px;
      margin-bottom: 12px;
      cursor: pointer;
    }
  }
`;

const TopNavbarSection = () => {
  const {
    data: { adBar }
  } = useCustomization('adBar');
  const { handleUploadImage, image, loading: uploadLoading } = useImageUpload();
  const [images, setImages] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedSuggest, setSelectedSuggest] = useState('');

  const onChange = async (imageList, addUpdateIndex) => {
    if (addUpdateIndex) {
      setImages(imageList);
      await handleUploadImage(imageList[0].file);
    } else {
      setImages(imageList);
      adBar.content.handleChangeString('');
    }
  };

  useDidUpdateEffect(() => {
    if (image) {
      adBar.content.handleChangeString(image);
    } else {
      adBar.content.handleChangeString('');
    }
  }, [image]);

  return (
    <Style container>
      <Grid style={{ margin: '24px 0' }} container className="border_right">
        <h3>حالت نمایش</h3>
      </Grid>
      <Grid
        onClick={() => adBar.mode.handleChangeString('image')}
        mb={3}
        className="section_cont"
        container
        alignItems="center"
      >
        <Radio
          checked={adBar.mode.value === 'image'}
          checkedIcon={<CheckedSVG />}
        />
        <p style={{ color: adBar.mode.value === 'image' ? '#000' : '#A3A5A7' }}>
          نمایش تصویری
        </p>
      </Grid>
      <Grid
        onClick={() => {
          adBar.mode.handleChangeString('text');
          if (adBar.mode.value === 'image') {
            adBar.content.handleChangeString('');
          }
        }}
        className="section_cont"
        container
        alignItems="center"
      >
        <Radio
          checked={adBar.mode.value === 'text'}
          checkedIcon={<CheckedSVG />}
        />
        <p style={{ color: adBar.mode.value === 'text' ? '#000' : '#A3A5A7' }}>
          نمایش متنی
        </p>
      </Grid>
      <Grid container className="divider"></Grid>
      {adBar.mode.value === 'image' ? (
        <>
          <Grid mb={3} container className="border_right">
            <h3>بارگذاری عکس</h3>
          </Grid>
          <ReactImageUploading
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, onImageRemove }) => (
              <>
                <Grid className="image_upload" container>
                  <Grid
                    onClick={onImageUpload}
                    justifyContent="center"
                    container
                    alignItems="center"
                    className="dashed"
                  >
                    {uploadLoading ? (
                      <CircularProgress
                        style={{
                          width: '24px',
                          height: '24px',
                          color: '#6A6F80'
                        }}
                      />
                    ) : images?.length > 0 ? (
                      <>
                        <EditOutlined
                          style={{
                            width: '24px',
                            height: '24px',
                            color: '#6D5DA9'
                          }}
                        />
                        <p
                          style={{
                            color: '#6D5DA9',
                            marginRight: '6px'
                          }}
                        >
                          ویرایش
                        </p>
                      </>
                    ) : (
                      <>
                        <Add
                          style={{
                            width: '24px',
                            height: '24px',
                            color: '#6D5DA9'
                          }}
                        />
                        <p
                          style={{
                            color: '#6D5DA9',
                            marginRight: '6px'
                          }}
                        >
                          افزودن
                        </p>
                      </>
                    )}
                  </Grid>
                  <Grid container>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#9185BE',
                        marginTop: '8px'
                      }}
                    >
                      فرمت JPG و سایز 52*1440
                    </p>
                  </Grid>
                  {uploadLoading ? (
                    <Grid
                      alignItems="center"
                      justifyContent="center"
                      container
                      mt={3}
                      className="preview_image"
                    >
                      <CircularProgress
                        style={{ width: '24px', height: '24px' }}
                      />
                    </Grid>
                  ) : imageList?.length > 0 ? (
                    imageList.map((e, i) => (
                      <Grid
                        alignItems="center"
                        justifyContent="center"
                        container
                        mt={3}
                        key={i}
                        style={{ border: 'none' }}
                        className="preview_image"
                      >
                        <div onClick={onImageRemove} className="remove_img">
                          <Close
                            style={{
                              width: '16px',
                              height: '16px',
                              color: '#9185BE'
                            }}
                          />
                        </div>
                        <img
                          alt="toolbar_image"
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '12px'
                          }}
                          src={e.data_url}
                          className="square img"
                        ></img>
                      </Grid>
                    ))
                  ) : (
                    <Grid
                      alignItems="center"
                      justifyContent="center"
                      container
                      mt={3}
                      className="preview_image"
                    >
                      <NavbarIcon color={'#C9C3E0'} />
                    </Grid>
                  )}
                </Grid>
              </>
            )}
          </ReactImageUploading>
          <Grid container className="divider"></Grid>
        </>
      ) : (
        <>
          <Grid container>
            <Grid mb={3} container className="border_right">
              <h3>متن</h3>
            </Grid>
            <Grid container className="text_navbar_cont">
              <Grid container>
                <p className="fs-14 fw-400" style={{ color: '#51575C' }}>
                  متن نوار اعلانات
                </p>
              </Grid>
              <Grid mt={3} container>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  variant="standard"
                  fullWidth
                  value={adBar.content.value}
                  onChange={ev =>
                    adBar.content.handleChangeString(ev.target.value)
                  }
                  rows={4}
                  multiline
                  placeholder="متن را وارد کنید..."
                  className="text_navbar_input"
                />
              </Grid>
            </Grid>
            <Grid container className="divider"></Grid>
            <Grid mb={3} container className="border_right">
              <h3>رنگ</h3>
            </Grid>
            <Grid container>
              <p
                style={{ fontSize: '14px', fontWeight: 400, color: '#51575C' }}
              >
                رنگ پس‌زمینه نوار اعلانات را انتخاب کنید{' '}
              </p>
            </Grid>
            {showColorPicker ? (
              <>
                {' '}
                <Grid
                  alignItems="center"
                  justifyContent="space-between"
                  mt={3}
                  className="color_picker_edit"
                  container
                >
                  <Grid item xs={10} container>
                    {' '}
                    <Grid
                      style={{ backgroundColor: adBar.color.value }}
                      className="color_toolbar_preview"
                    ></Grid>
                    <p
                      className="fs-14 fw-400"
                      style={{ color: '#101820', marginRight: '12px' }}
                    >
                      رنگ نوار اعلانات
                    </p>
                  </Grid>
                  <IconButton
                    onClick={() => {
                      setShowColorPicker(false);
                    }}
                  >
                    <Close color={'#483493'} />
                  </IconButton>
                  <Grid
                    style={{ backgroundColor: '#DAD6E9' }}
                    container
                    className="divider"
                  ></Grid>
                  <Grid container>
                    {SUGGESTION_COLORS.map(e => (
                      <Grid
                        onClick={() => {
                          setSelectedSuggest(e.code);
                          adBar.color.handleChangeString(e.code);
                        }}
                        style={{
                          backgroundColor: e.code,
                          border:
                            selectedSuggest === e.code && '4px solid #F3F3F3',
                          outline:
                            selectedSuggest === e.code && '4px solid #C9C3E0'
                        }}
                        key={e.code}
                        className="color_suggest"
                      ></Grid>
                    ))}
                  </Grid>
                  <Grid container>
                    <ColorPicker
                      onClick={() => setSelectedSuggest('')}
                      color={{ hex: adBar.color.value?.replace('#', '') }}
                      setColor={e => {
                        adBar.color.handleChangeString(`#${e.hex}`);
                      }}
                    />
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  alignItems="center"
                  justifyContent="space-between"
                  mt={3}
                  className="color_picker_header"
                  container
                >
                  <Grid item xs={10} container>
                    {' '}
                    <Grid
                      style={{ backgroundColor: adBar.color.value }}
                      className="color_toolbar_preview"
                    ></Grid>
                    <p
                      className="fs-14 fw-400"
                      style={{ color: '#101820', marginRight: '12px' }}
                    >
                      رنگ نوار اعلانات
                    </p>
                  </Grid>
                  <IconButton
                    onClick={() => {
                      setShowColorPicker(true);
                    }}
                  >
                    <EditIcon color={'#483493'} />
                  </IconButton>
                </Grid>
              </>
            )}
            <Grid container className="divider"></Grid>
          </Grid>
        </>
      )}
      <Grid mb={3} container className="border_right">
        <h3>لینک کردن نوار اعلانات</h3>
      </Grid>
      <Grid container>
        <p style={{ fontSize: '14px', fontWeight: 400, color: '#51575C' }}>
          آدرس صفحه ای که می خواهید به بنر متصل شود را وارد کنید.
        </p>
      </Grid>
      <Grid mt={3} alignItems="center" container className="link_cont">
        <Grid item xs={10}>
          <TextField
            value={adBar.href.value}
            onChange={e => adBar.href.handleChangeString(e.target.value)}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <p
                  style={{
                    color: '#9185BE',
                    fontSize: '14px',
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  {' '}
                  ://https{' '}
                </p>
              )
            }}
            variant="standard"
            className="link_input"
          />
        </Grid>
        <Grid container justifyContent={'center'} item xs={2}>
          <LinkSVG />
        </Grid>
      </Grid>
    </Style>
  );
};

export default TopNavbarSection;
