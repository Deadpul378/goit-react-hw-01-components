import styled from 'styled-components';
export const Card = styled.div`
  padding: 8px;
  width: 340px;
`;
export const Description = styled.div`
  text-align: center;
  background-color: #fff;
`;
export const DescriptionText = styled.p`
  margin-top: 10px;
`;
export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;
export const Stats = styled.span`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;
export const StatsItem = styled.li`
  border-right: 1px solid black;
  padding: 20px;
  flex-grow: 1;
  width: 113px;
`;
