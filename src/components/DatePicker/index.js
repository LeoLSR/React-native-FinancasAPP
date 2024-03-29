import React, { useState } from "react";
import { Platform, Text, TouchableOpacity } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import {Container, Header} from './styled'


export default function DatePicker({date, onClose, onChange}){
  const [dateNow,setDateNow] = useState(new Date(date));

  return(
    <Container>
      {Platform.OS === 'ios' && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>

      )}
     <RNDateTimePicker
     value={dateNow}
     mode="date"
     display="default"
     onChange={(e,d) => {
          const currentDate = d || dateNow;
          setDateNow(currentDate)
          onChange(currentDate);

     }}
       style={{backgroundColor: 'blue'}}
     />
    </Container>
  )
}
