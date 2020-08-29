import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Picker, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {styles} from './styles.js';
import {fahrenheit2celsius, inch2cm, cup2ml, yard2m, ounce2ml} from './converter_functions.js';
import {supportedUnitsDict} from './supported_units.js';

const rightArrow = '\u2192';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('temp');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [value, onChangeText] = useState('');
  const [convValue, onCalcText] = useState('');

  return (
    <View style = {{flex: 1, justifyContent: 'flex-start'}}>
      <Header
        containerStyle = {{backgroundColor: '#483D8B'}}
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Imperial Metric Converter', style: styles.header}}
      />
      <View style = {{flex: 0.3}}/>
      <View style = {styles.container}>
        <Picker
          prompt="Choose Category to Convert"
          selectedValue={selectedValue}
          style={{height: 50, width: 200}}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            onChangeText('');
            onCalcText('');
          }}
        >
          <Picker.Item label="Temperature" value="temp"/>
          <Picker.Item label="Cooking" value="cook"/>
          <Picker.Item label="Volume" value="vol"/>
          <Picker.Item label="Size" value="size"/>
          <Picker.Item label="Distance" value="dist"/>
        </Picker>
        <Picker
          prompt="Choose Unit to Convert"
          selectedValue={selectedUnit}
          style={{height: 50, width: 200}}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => {
            setSelectedUnit(itemValue);
            onChangeText('');
            onCalcText('');
          }}
        >
          {supportedUnitsDict[selectedValue].map((unit) => (
            <Picker.Item label={unit.label} value={unit.value}/>
          ))}
        </Picker>
        <View style = {styles.inputField}>
          <TextInput
            style = {styles.inputText}
            keyboardType="numeric"
            placeholder="Input"
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <View style={{width: 5}}/>
          <Text style={styles.icons}> {rightArrow} </Text>
          <View style={{width: 5}}/>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Output"
            editable={false}
            value={convValue}
          />
        </View>
        <TouchableOpacity
          disabled={value === ''}
          onPress={() => {
            if (selectedValue === 'temp') {
              onCalcText(fahrenheit2celsius(value));
            } else if (selectedValue === 'size') {
              onCalcText(inch2cm(value));
            } else if (selectedValue === 'cook') {
              onCalcText(cup2ml(value));
            } else if (selectedValue === 'dist') {
              onCalcText(yard2m(value));
            } else if (selectedValue === 'vol') {
              onCalcText(ounce2ml(value));
            }
          }}
          style={value === '' ? styles.button_disabled : styles.button}
        >
          <Text style={styles.buttontext}> Convert! </Text>
        </TouchableOpacity>
      </View>
      <View style = {{flex: 0.3}}/>
      <StatusBar style="light" />
    </View>
  );
}
