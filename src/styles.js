import styled from "styled-components";
import {getStatusBarHeight} from 'react-native-status-bar-height'
export const Container = styled.View `

    flex: 1;
    background-color: #0b3b80;
    padding-top: ${0+getStatusBarHeight()};

`

export const Titulo = styled.Text`
  font-size: 25px;
  color: #FFF;
  text-align: center;
`