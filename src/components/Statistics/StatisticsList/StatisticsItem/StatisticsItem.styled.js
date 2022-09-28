import styled from 'styled-components';

export const Item = styled.li`
  text-align: center;
  padding: 8px;
  border: 1px solid black;
  background-color: ${getRandomHexColor};
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #223042;
`;

export const Numbers = styled.span`
  color: #223042;
  font-weight: 700;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
