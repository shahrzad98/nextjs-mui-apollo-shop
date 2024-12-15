import React, { useState } from 'react';
import ArrowLeftIcon from 'public/static/assets/svg/Header/ArrowLeftIcon';
import ArrowUpIcon from 'public/static/assets/svg/Header/ArrowUpIcon';
import { SidebarLink, SidebarLabel, DropdownLink } from './../styled';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';

export default function MobileMenu({ item, setOpenMenu }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.children && showSubnav}>
        <div>
          <SidebarLabel
            sx={{
              color:
                subnav && item.children.length !== 0 ? '#171C22' : '#1c1b20b2'
            }}
          >
            {item.title}
          </SidebarLabel>
        </div>
        <div>{subnav ? <ArrowUpIcon /> : <ArrowLeftIcon />}</div>
      </SidebarLink>

      <DropdownLink subnav={subnav}>
        {item.children.map((item, index) => (
          <li
            key={index}
            className="menuItemLink"
            onClick={() => setOpenMenu(false)}
          >
            <Link {...item?.link} passHref>
              <MuiLink>
                <span>{item.title}</span>
              </MuiLink>
            </Link>
          </li>
        ))}
        <li className="showLabel" onClick={() => setOpenMenu(false)}>
          <Link {...item?.link} passHref>
            <MuiLink>
              <span>نمایش همه محصولات</span>
              <ArrowLeftIcon stroke="#2145FF" />
            </MuiLink>
          </Link>
        </li>
      </DropdownLink>
    </>
  );
}
