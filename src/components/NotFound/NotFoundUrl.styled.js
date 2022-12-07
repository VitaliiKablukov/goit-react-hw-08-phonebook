import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  text-align: center;
`;
export const TextInfo = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-top: 10px;
`;
export const Button = styled(Link)`
  padding: 6px 20px;
  color: #000000;
  background-color: #62d8e0;
  border: 1px solid;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #2671ac;
    border-color: #000000;
  }
`;
