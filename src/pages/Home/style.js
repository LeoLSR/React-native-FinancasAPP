import styled from "styled-components";

export const Backgroud = styled.View`
  flex: 1;
  background-color: #130560;


`;

export const Container = styled.View`
  margin-left: 15px;
  margin-bottom: 25px;

`;
export const Nome = styled.Text`
  font-size: 19px;
  color: #FFF;
  font-style: italic;
`;
export const Saldo = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fff;
  font-weight: bold;

`;
export const Title = styled.Text`
  margin-left: 5px;
  color: #00b94a;

`;
export const Area = styled.View`
  flex-direction: row;
  margin-right: 10px;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  
  
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  padding-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;

`;




