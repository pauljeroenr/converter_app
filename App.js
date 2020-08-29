import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Picker, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {styles} from './styles.js';
import {converter_function} from './converter_functions.js';
import {supportedUnitsDict} from './supported_units.js';

const rightArrow = '\u2192';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('temp');
  const [selectedUnit, setSelectedUnit] = useState('fahrenheit');
  const [value, onChangeText] = useState('');
  const [convValue, onCalcText] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Header
        containerStyle={{backgroundColor: '#483D8B'}}
        centerComponent={{text: 'Imperial Metric Converter', style: styles.header}}
      />
      <View style={{flex: 0.3}}/>
      <View style={styles.container}>
        <Picker
          prompt="Choose category to convert from"
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
          prompt="Choose unit to convert"
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
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
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
            onCalcText(converter_function(value, selectedUnit));
          }}
          style={value === '' ? styles.button_disabled : styles.button}
        >
          <Text style={styles.buttontext}> Convert! </Text>
        </TouchableOpacity>
      </View>
      <Text>{(selectedUnit === "inch") ? 1 : 0}</Text>
      <View style = {{flex: 0.3}}/>
      <StatusBar style="light" />
    </View>
  );
}
