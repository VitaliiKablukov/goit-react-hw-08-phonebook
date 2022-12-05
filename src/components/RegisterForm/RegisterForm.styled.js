import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid;
  border-color: #f2f2f2;
  border-radius: 6px;
  background-color: #4ae300;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const Container = styled.section`
  max-width: 1280px;
  padding: 40px;
  background-color: #f2f2f2;
`;
export const Label = styled.label`
  margin-bottom: 4px;
`;
export const Input = styled.input`
  width: 200px;
  margin-bottom: 30px;
  padding: 8px;
  border: 1px solid;
  border-radius: 4px;
`;
export const Button = styled.button`
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
