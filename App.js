import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Alert, Button } from 'react-native';
import { Header ,Input } from 'react-native-elements';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("temp");
  const [value, onChangeText] = useState('');
  return (
    <View style = {{flex: 1, justifyContent: 'flex-start'}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Imperial Metric Converter', style: { color: '#fff' } }}
      />
      <View style = {{flex: 0.3}} />
      <View style = {styles.container}>
        <Picker
          prompt="Choose Unit to Convert"
          selectedValue={selectedValue}
          style={{ height: 50, width: 200 }}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Temperature" value="temp"/>
          <Picker.Item label="Size [inch]" value="size"/>
        </Picker>
        <View style = {styles.inputField}>
          <TextInput 
            style = {styles.inputText}
            keyboardType="numeric"
            placeholder="Input"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <TextInput 
            style = {styles.inputText}
            keyboardType="numeric"
            placeholder="Output"
            editable={false}
            value={inch2cm(value)}
          />
        </View>
        <Button
          disabled={value === ""}
          onPress={() => {if (selectedValue === "temp") {
                            Alert.alert("Converted Value", fahrenheit2celsius(value) + " Celsius");
                          } else if (selectedValue === "size") {
                            Alert.alert("Converted Value", inch2cm(value) + " Centimeter");
                          }
                  }}
          title="Convert!"
        />
      </View>
      <View style = {{flex: 0.3}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputField: {
    flex: 0.5,
    flexDirection: 'row',
  },
  inputText:{
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    width: 100,
    textAlign: 'center',
  },
});

function fahrenheit2celsius(fahrenheit) {
  var result = Math.round((((fahrenheit - 32) / 1.8) + Number.EPSILON) * 100) / 100
  return(result.toString())
};
function inch2cm(inch) {
  var result = inch * 2.54
  return(result.toString())
};