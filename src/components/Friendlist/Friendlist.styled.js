import styled from 'styled-components';

export const Box = styled.li`
  width: 300px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  border-radius: 4px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid black;
`;

export const Marker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Img = styled.img`
  width: 48px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
