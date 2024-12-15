import styled from '@emotion/styled';
import { Card, Link } from '@mui/material';

export const MegaMenuNav = styled(Card)`
  a {
    text-decoration: none;
  }
  position: absolute;
  width: 100%;
  display: block;
  transform-origin: top;
  transition: transform 0.26s ease;

  .gridItem {
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      .labelTypo {
        color: ${props => props.theme.palette.secondary.main};
        ::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: ${props => props.theme.palette.secondary.main};
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        :hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
      .dropDownMenuConent {
        height: 270px;
        padding: 14px 0;
        opacity: 1;
      }
    }
  }
  .menuBtn {
    padding: 8px 16px;
  }
  .megaContainer {
    position: relative;
  }
`;

export const StyledMuiLink = styled(Link)`
  text-decoration: none;
`;

export const StyledMegaMenu = styled.div`
  position: ${props => (props.childrenLength > 4 ? 'inherit' : 'relative')};
  width: 100%;
  .linkItem {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dropDownMenuConent {
    margin-top: 11px;
    position: absolute;
    left: ${props => (props.childrenLength > 4 ? '0' : '-10%')};
    display: block;
    z-index: 10000;
    width: ${props => (props.childrenLength > 4 ? '100%' : '270px')};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    height: 0;
    padding: 0;
    opacity: 0;
    transition: opacity 502ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 214ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  :hover {
    .dropDownMenuConent {
      height: 270px;
      opacity: 1;
      padding: 14px 0;
    }
  }
  .showLabel {
    padding: 11px 16px;
    p {
      color: ${props => props.theme.palette.secondary.main} !important;
      font-size: 14px;
      margin-right: 5px;
    }
  }
  .imageClass {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 30px;
  }
  .subCategoryContainer {
    /* height: 100%; */
    margin-left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .menuItemLink {
    text-decoration: none;
    color: rgba(28, 27, 32, 0.7);
    font-size: 14px;
  }
  .MuiButtonBase-root {
    padding: 10px 16px;
  }
  .imageClass {
    margin-left: auto;
    margin-right: 30px;
  }
  .labelTypo {
    padding: 5px 0;
    /* height: 30px; */
    position: relative;
    color: inherit;
    display: inline-block;
    color: #1c1b20;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
    /* width: 100%;  */
    /* max-width: 168px; */
  }

  .icon-Arrows-Darrow-button {
    color: ${props => props.theme.palette.secondary.main};
  }
`;
