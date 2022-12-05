import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 4px;
  background-color: #f1ecfb;
  border: 1px solid;
  border-color: black;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    color: black;
    background-color: #4ea5f7;
  }
  &.active {
    background-color: green;
    color: yellow;
  }
`;
