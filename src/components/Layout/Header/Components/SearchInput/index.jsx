import React, { useEffect, useState } from 'react';
import {
  TextField,
  Link as Muilink,
  useAutocomplete,
  Typography,
  useMediaQuery
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import Link from 'next/link';
import HistoryIcon from 'public/static/assets/svg/Header/HistoryIcon';
import { Root, Listbox, InputWrapper } from './styled';
import { useRouter } from 'next/router';

export default function SearchInput() {
  const [history, setHistory] = useState([]);
  const [searchTxt, setSearchTxt] = useState({
    label: ''
  });
  const router = useRouter();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused
  } = useAutocomplete({
    id: 'customized-hook',
    defaultValue: [],
    multiple: true,
    options: history,
    getOptionLabel: option => option.label
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productSearchHisory'));

    if (items) {
      setHistory(items);
    }
  }, []);
  const addHistory = () => {
    const newHistory = [{ ...searchTxt }, ...history.slice(0, 3)];

    localStorage.setItem('productSearchHisory', JSON.stringify(newHistory));
    setHistory(newHistory);
  };
  return (
    <Root focused={focused}>
      <div {...getRootProps()}>
        <InputWrapper>
          <TextField
            // {...getInputProps()}
            onKeyUp={event => {
              if (event.key == 'Enter') {
                addHistory();
                router.push({
                  pathname: '/products/[[...categoryNames]]',
                  query: {
                    page: 1,
                    search: searchTxt.label,
                    categoryNames: []
                  }
                });
              }
            }}
            sx={{
              width: { xs: '100%', lg: '497px' },
              padding: { xs: ' 0px 0px 0px 0', md: '0' }
            }}
            value={searchTxt?.label ?? ''}
            placeholder="جستجو "
            inputProps={{
              ...getInputProps(),
              value: searchTxt?.label ?? ''
            }}
            InputProps={{
              startAdornment: <SearchOutlined className="searchOutlined" />
            }}
            onChange={e => {
              setSearchTxt({
                label: e.target.value
              });
            }}
          />
        </InputWrapper>
      </div>
      {focused ? (
        <Listbox
          {...getListboxProps()}
          style={{
            width: isMobile ? '100%' : '497px'
          }}
        >
          {focused && searchTxt.label && (
            <li style={{ display: 'flex' }}>
              <Link
                href={{
                  pathname: '/products/[[...categoryNames]]',
                  query: {
                    page: 1,
                    search: searchTxt.label,
                    categoryNames: []
                  }
                }}
                passHref
              >
                <Muilink className="searchType" onClick={addHistory}>
                  <Typography ml={2}>{searchTxt.label}</Typography>
                </Muilink>
              </Link>
            </li>
          )}
          {groupedOptions.map((option, index) => {
            return (
              <li {...getOptionProps({ option, index })} key={index}>
                <Link
                  href={{
                    pathname: '/products/[[...categoryNames]]',
                    query: {
                      page: 1,
                      search: option.label,
                      categoryNames: []
                    }
                  }}
                  passHref
                >
                  <Muilink className="searchType">
                    <HistoryIcon />
                    <Typography ml={2}>{option.label}</Typography>
                  </Muilink>
                </Link>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </Root>
  );
}
