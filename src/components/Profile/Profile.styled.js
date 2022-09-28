import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  border-radius: 4px;
`;
export const Description = styled.div`
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 16px;
`;
export const UserNickName = styled.p`
  color: #a9aaac;
  margin-bottom: 8px;
`;
export const UserLocation = styled.p`
  color: #a9aaac;
  margin-bottom: 8px;
`;
export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;
export const Label = styled.span`
  margin-bottom: 8px;
  color: #a9aaac;
`;
export const Quantity = styled.span`
  color: #223042;
  font-weight: 700;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  background-color: #e7ecf2;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border: 1px solid #a9aaac;
  width: 100%;
`;
