import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ButtonStyle = styled.button`
  padding: 6px 30px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  background-color: #06316ebd;
  color: #fcfcfc;
  border: none;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: #fff;
    color: #06316ebd;
  }
`;