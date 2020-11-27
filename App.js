import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
//import React from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function App() {
  const [priceText,setPriceText]=useState(false);
  const [discountPercentText,setDiscountText]=useState(false);

  const [price,setNewPrice]=useState('');
  const [discountPercent,setDiscountPercent]=useState('');
  const [discountedPrice,setDiscountPrice]=useState('');

  const handleInputs=(e)=>{
    if(priceText){
      setNewPrice(price+e)
    }
    else if(discountPercentText){
      setDiscountPercent(discountPercent+e)
    }

  }

  const clearText=()=>{
    setNewPrice('')
    setDiscountPercent('')
    setDiscountPrice('')
    
  }

  const DeleteChar=()=>{
    if(priceText){
      setNewPrice(price.slice(0,-1))
      setDiscountPrice('')

    }
    else if(discountPercentText){
      setDiscountPercent(discountPercent.slice(0,-1))
      setDiscountPrice('')

    }

  }

  
 

  const discountFunc =()=>{
    const discount = price -(price * discountPercent/100)
    setDiscountPrice(discountedPrice+discount)
     
 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Discount Calculator App</Text>
      <View>
        <Text
          style={{ height: 40 }}
          style={styles.textinput}
          placeholder="Enter Original Price of Item"
          placeholderTextColor="blue"
          onPress={()=>{setPriceText(true);setDiscountText(false)}}>{price}</Text>
      </View>

      <View >
        <Text
          style={styles.textinput}
          placeholder="Enter Discount Percentage"
          placeholderTextColor="blue"
          onPress={()=>{setPriceText(false);setDiscountText(true)}}>{discountPercent}</Text>
      </View>

      <View>
        <Text>Discounted Price</Text>
      </View>

      <View>
        <Text style={styles.textinput}>{discountedPrice}</Text>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="1" onPress={()=>handleInputs("1")}>1</Button>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="2"onPress={()=>handleInputs("2") }>2</Button>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="3" onPress={()=>handleInputs("3") }>3</Button>
        </View>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="4" onPress={()=>handleInputs("4")} >4</Button>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="5" onPress={()=>handleInputs("5")}>5</Button>
        </View>
        <View  style={{width:"32%",marginRight:'1%'}}>
          <Button title="6" onPress={()=>handleInputs("6")}>6</Button>
        </View>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="7" onPress={()=>handleInputs("7")}>7</Button>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="8" onPress={()=>handleInputs("8")} >8</Button>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
          <Button title="9" onPress={()=>handleInputs("9") }>9</Button>
        </View>
      </View>
      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}} >
          <Button title="0" onPress={()=>handleInputs("0")}>0</Button>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
        <Button  title="Clear" onPress={clearText}>Clear</Button>

        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
          
        <Button title="Delete" onPress={DeleteChar}>Delete</Button>

        </View>

        
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"48%",marginRight:'2%'}}>
        <Button title="Calculate" onPress={discountFunc} color="red"></Button>

        </View>
        <View style={{width:"48%",marginRight:'1%'}}>
        <Button title="Save" color="green" title="Save"></Button>

        </View>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textinput: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 40,
    width: 200,
    borderColor:"red",
    marginBottom: 3,
  },

  buttonstyle: {
    flexDirection: "row",
    width: "33%",
    height: 50,
    alignItems:"center",
    flexDirection: "row",
  },

});
