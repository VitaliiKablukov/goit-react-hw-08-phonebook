import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
export const NavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  padding: 8px 34px;
  background-color: #12bbe6;
  border: 1px solid;
  border-color: black;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    color: black;
    background-color: #0085d4;
  }
  &.active {
    background-color: green;
    color: yellow;
  }
`;
