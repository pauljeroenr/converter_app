import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';
import { Header } from 'react-native-elements';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("temp");
  const [value, onChangeText] = useState('');
  const [convValue, onCalcText] = useState('')
  return (
    <View style = {{flex: 1, justifyContent: 'flex-start'}}>
      <Header
        containerStyle = {{backgroundColor: '#505050'}}
        leftComponent={{ icon: 'menu', color: '#fff'}}
        centerComponent={{ text: 'Imperial Metric Converter', style: { color: '#fff' } }}
      />
      <View style = {{flex: 0.3}} />
      <View style = {styles.container}>
        <Picker
          prompt="Choose Unit to Convert"
          selectedValue={selectedValue}
          style={{ height: 50, width: 200 }}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);
                                                    onChangeText("");
                                                    onCalcText("");
                                                  }}
        >
          <Picker.Item label="Temperature" value="temp"/>
          <Picker.Item label="Size" value="size"/>
          <Picker.Item label="Cooking" value="cook"/>
          <Picker.Item label="Volume" value="vol"/>
          <Picker.Item label="Distance" value="dist"/>
        </Picker>
        <View style = {styles.inputField}>
          <TextInput 
            style = {styles.inputText}
            keyboardType="numeric"
            placeholder="Input"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <View style = {{width: 15}}/>
          <TextInput 
            style = {styles.inputText}
            keyboardType="numeric"
            placeholder="Output"
            editable={false}
            value={convValue}
          />
        </View>
        <Button
          disabled={value === ""}
          onPress={() => {if (selectedValue === "temp") {
                            onCalcText(fahrenheit2celsius(value));
                          } else if (selectedValue === "size") {
                            onCalcText(inch2cm(value));
                          } else if (selectedValue === "cook") {
                            onCalcText(cup2ml(value));
                          } else if (selectedValue === "dist") {
                            onCalcText(yard2m(value));
                          }
                  }}
          color = '#505050'
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
function cup2ml(cup) {
  var result = cup * 236.588
  return(result.toString())
};
function yard2m(yard) {
  var result = yard * 0.9144
  return(result.toString())
};