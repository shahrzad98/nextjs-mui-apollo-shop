import styled from '@emotion/styled';
import Title from 'src/components/shared/CustomizeTitle';
import DisplayCard from './DisplayCard';
import { useCustomization } from '@digify/theme-kit';

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
  color: #51575c;
`;

const DispalyMode = () => {
  const {
    data: { layout }
  } = useCustomization('layout');

  return (
    <>
      <Title title="حالت نمایش" />
      <Span>استایل مورد نظرتان را انتخاب کنید.</Span>
      {layout?.header?.options.map(({ key, value }) => (
        <DisplayCard
          key={key}
          title={key}
          value={value}
          type={value}
          onChange={({ target }) =>
            layout?.header?.handleChangeString(target.value)
          }
          checked={layout?.header?.value === value}
        />
      ))}
    </>
  );
};

export default DispalyMode;
