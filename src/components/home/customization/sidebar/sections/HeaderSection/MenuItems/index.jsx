import styled from '@emotion/styled';
import { Box, Checkbox, Grid } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import { useCustomization } from '@digify/theme-kit';

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Item = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
  width: calc(100% - 50px);
`;

const MenuItems = () => {
  const {
    data: {
      layout: { navigation }
    }
  } = useCustomization('layout');
  return (
    <Box width={'100%'}>
      <Title title="تعریف آیتم‌های منو" />
      <Span>مواردی که می خواهید در هدر نمایش داده شوند را انتخاب کنید.</Span>
      <Box bgcolor={'#F3F3F3'} borderRadius={'10px'} p={'16px'} mt={'24px'}>
        {navigation.options.map((item, i) => (
          <Grid
            key={i}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            p={'6px 16px'}
            bgcolor={'#FFFFFF'}
            borderRadius={'10px'}
            mb={'16px'}
          >
            <Item>{item.key}</Item>
            <Checkbox
              disabled={item?.additionalData?.isRequired}
              checked={navigation.value.includes(item.value)}
              onChange={() => item.handleChange()}
              sx={{
                color: '#483493',
                '&.Mui-checked': {
                  color: item?.additionalData?.isRequired
                    ? '#48349360'
                    : '#483493'
                }
              }}
            />
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default MenuItems;
