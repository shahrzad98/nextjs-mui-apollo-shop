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
`;

const MenuItems = () => {
  const {
    data: {
      footer: { information }
    }
  } = useCustomization('footer');

  return (
    <Box width={'100%'}>
      <Title
        title="
    اطلاعات
      "
      />
      <Span>مواردیکه می خواهید در فوتر نمایش داده شوند را انتخاب کنید</Span>
      <Box bgcolor={'#F3F3F3'} borderRadius={'10px'} p={'16px'} mt={'24px'}>
        {information.options.map((item, i) => (
          <Grid
            key={i}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            p={'6px 16px'}
            pr={0}
            bgcolor={'#FFFFFF'}
            borderRadius={'10px'}
            mb={'16px'}
          >
            <Item>{item.key}</Item>
            <Checkbox
              checked={information.value.includes(item.value)}
              onChange={() => item.handleChange()}
              sx={{
                color: '#483493',
                '&.Mui-checked': {
                  color: '#483493'
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
