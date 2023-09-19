/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../styles/Theme';

const SidebarLink = styled(Link)`
  display: flex;
   width: 250px;
  height: 100vh;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 20px;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: #55CBCD;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #00A2A5;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  color: #000;
  font-size: 18px;

  &:hover {
    background: #AAE3E4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
