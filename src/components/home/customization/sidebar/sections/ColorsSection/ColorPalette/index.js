import { useCustomization } from '@digify/theme-kit';
import { Box } from '@mui/material';
import ColorPickerCollapse from 'src/components/shared/ColorPickerCollapse';
import React from 'react';

export default function ColorPalette() {
  const SUGGESTION_COLORS = [
    {
      code: '#171C22'
    },
    {
      code: '#9DA5A1'
    },
    {
      code: '#445F4F'
    },
    {
      code: '#246478'
    },
    {
      code: '#46314E'
    },
    {
      code: '#A98181'
    },
    {
      code: '#ABA490'
    },
    {
      code: '#B8A89E'
    }
  ];
  const SUGGESTION_COLORS_SECONDARY = [
    {
      code: '#D7D7D7'
    },
    {
      code: '#F4F4F4'
    },
    {
      code: '#D0FFE4'
    },
    {
      code: '#CCF3FF'
    },
    {
      code: '#EBD8F2'
    },
    {
      code: '#FFCCCC'
    },
    {
      code: '#FFEDB8'
    },
    {
      code: '#FFD2AA'
    }
  ];
  const {
    data: { colors }
  } = useCustomization('colors');
  return (
    <>
      <ColorPickerCollapse
        {...{
          color: { hex: colors.primary.value },
          setColor: color => {
            colors.primary.handleChangeString(`${color.hex}`);
          }
        }}
        SUGGESTION_COLORS={SUGGESTION_COLORS}
        title="رنگ اصلی"
      />
      <Box width={'100%'} mt={3}>
        <ColorPickerCollapse
          {...{
            color: { hex: colors.secondary.value },
            setColor: color => {
              colors.secondary.handleChangeString(`${color.hex}`);
            }
          }}
          SUGGESTION_COLORS={SUGGESTION_COLORS_SECONDARY}
          title="رنگ دوم"
        />
      </Box>
      {/* <Box mt={3}>
        <ColorPickerCollapse
          color={success}
          setColor={setSuccess}
          SUGGESTION_COLORS={SUGGESTION_COLORS}
          title="رنگ پس زمینه"
        />
      </Box> */}
    </>
  );
}
