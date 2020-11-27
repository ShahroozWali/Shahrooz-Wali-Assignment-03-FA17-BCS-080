import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TextInput,Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Discount Calculator App
      </Text>
      <View>
      <TextInput style={{height: 40}}  style={styles.textinput}
        placeholder="Enter Original Price of Item"
      ></TextInput>
      
      </View>
      
      <View>
      <TextInput style ={styles.textinput}  placeholder="Enter Discount Percentage"></TextInput>
      
      </View>

      <View>
      <Text>Discounted Price</Text>
      
      </View>

      <View>
      <TextInput style={{height: 40}}  style={styles.textinput}
      ></TextInput>
      
      </View>

      
      <View>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </View>
      <View>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </View>
      <View>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </View>

      <View>
        <Button>0</Button>
        <Button>Delete</Button>
        <Button>Clear</Button>
      </View>

    



      <View>
      <Button style={styles.buttonstyle} title ="Calculate"></Button>
      </View>

      <View>
      <Button style ={styles.buttonstyle} color ="green"  title ="Save"></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput:{
    borderLeftWidth:5,
    borderRightWidth:5,
    borderTopWidth:5,
    borderBottomWidth:5,
    height:40,
    marginBottom:5,
    width:200,
  },

  buttonstyle: {
    margin:500,


  },
});
