import styled from "styled-components/native";

export const Background = styled.View`
      flex: 1;
      background-color: #130560;

    `;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 50px;
    background-color: #FFF;
    width: 90%;
    margin-top: 30px;
    font-size: 17px;


`;

export const SubmitButton = styled.TouchableOpacity`

  width: 90%;
  height: 50px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;


`;
export const SubmitText = styled.Text`
      font-size: 21px;
      font-weight: bold;
      color: #FFF;
    `;



