import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
      borderRadius:10,
      height: 50,
      width: 100,
      textAlign: 'center',
    },
    icons:{
      fontSize: 30,
      textAlign: 'center',
    },
    button: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:15,
      paddingRight:15,
      marginLeft:30,
      marginRight:30,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#505050',
    },
    button_disabled: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:15,
      paddingRight:15,
      marginLeft:40,
      marginRight:40,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#505050',
      opacity: 0.4,
    },
    buttontext: {
      color:'#fff',
      textAlign:'center',
    }
  });