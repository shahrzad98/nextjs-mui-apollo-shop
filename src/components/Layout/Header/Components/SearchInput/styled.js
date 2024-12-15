import styled from '@emotion/styled';

export const Root = styled('div')(props => ({
  width: '100%',
  position: 'relative',
  '& .MuiOutlinedInput-notchedOutline': {
    ...(!props.focused && {
      border: 'none',
      borderBottom: '1px solid #0000003b'
    })
  },
  '& input::placeholder': {
    fontSize: '14px'
  },
  '& .searchOutlined': {
    width: '16px',
    marginRight: '5px'
  },
  '& input': {
    padding: '8px 8px 15px 0'
  }
}));
export const Listbox = styled('ul')(
  () => `

    position: absolute;
    left:0;
    margin: 2px 0 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    & li {
      padding: 5px 12px;
      display: flex;
  
    }
    .searchType{
      width: 100%;
      text-decoration: none;
      display: flex;
      alignItems: center
    }
  
  `
);

export const InputWrapper = styled('div')`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
`;
