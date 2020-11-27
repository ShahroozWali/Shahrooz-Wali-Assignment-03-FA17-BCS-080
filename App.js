
import React, { useState } from 'react';
import { StyleSheet,Button, Text, View, TouchableOpacity } from "react-native";

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
      
      <View>
        <Text style={styles.title}>Discount Calculator App</Text>
        <Text>Enter Price of Item</Text>
        <Text
          style={{ height: 40 }}
          style={styles.textinput}
          placeholderTextColor="blue"
          onPress={()=>{setPriceText(true);setDiscountText(false)}}>{price}</Text>
      </View>

      <View >
      <Text>Enter Discount Percentage</Text>
        <Text
          style={styles.textinput}
          placeholderTextColor="blue"
          onPress={()=>{setPriceText(false);setDiscountText(true)}}>{discountPercent}</Text>
      </View>

      <View>
        <Text >Discounted Price</Text>
        <Text style={styles.textinput}>{discountedPrice}</Text>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("1")}><Text style={styles.numberText}>1</Text></TouchableOpacity>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("2")}><Text style={styles.numberText}>2</Text></TouchableOpacity>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("3")}><Text style={styles.numberText}>3</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("4")}><Text style={styles.numberText}>4</Text></TouchableOpacity>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("5")}><Text style={styles.numberText}>5</Text></TouchableOpacity>
        </View>
        <View  style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("6")}><Text style={styles.numberText}>6</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}}>
          <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("7")}><Text style={styles.numberText}>7</Text></TouchableOpacity>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("8")}><Text style={styles.numberText}>8</Text></TouchableOpacity>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("9")}><Text style={styles.numberText}>9</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonstyle}>
        <View style={{width:"32%",marginRight:'1%'}} >
        <TouchableOpacity style={styles.numberStyle1} onPress={()=>handleInputs("0")}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity  title="Clear" onPress={clearText}style={styles.cdStyle}><Text style={styles.buttonText}>Clear</Text></TouchableOpacity>

        </View>

        <View style={{width:"32%",marginRight:'1%'}}>
          
        <TouchableOpacity title="Delete" style={styles.cdStyle} onPress={DeleteChar}><Text style={styles.buttonText}>Delete</Text></TouchableOpacity>

        </View>

      </View>

      <View style={styles.buttonstyle}>
        <View style={{width:"48%",marginRight:'2%'}}>
        <TouchableOpacity  title="Calculate" onPress={discountFunc}style={styles.calculateStyle}><Text style={styles.buttonText} >Calculate</Text></TouchableOpacity>
        </View>
        <View style={{width:"48%",marginRight:'1%'}}>
        <TouchableOpacity  title="Save"  style={styles.saveColor}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>

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
    width: 100,
    borderColor:"red",
    marginBottom: 3,
  },

  buttonstyle: {
    flexDirection: "row",
    width: "100%",
    alignItems:"center",
    flexDirection: "row",
  },

  title:{
    backgroundColor:"green",
    color:"white",
    fontWeight:"bold",
    fontSize:20,
    padding:10,
  },

buttonText:{
    color:'#fff',
    textAlign:"center",
    paddingLeft : 10,
    paddingRight : 10
  
},
buttonStyle1:{
  marginRight:4,
  marginLeft:4,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#1E6738',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
},

saveColor:{
  marginRight:4,
  marginLeft:4,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#3CB371',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
},

calculateStyle:{
  marginRight:4,
  marginLeft:4,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#483D8B',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
},

numberText:{
  color:'white',
  textAlign:"center",
  paddingLeft : 10,
  paddingRight : 10

},
numberStyle1:{
marginRight:4,
marginLeft:4,
marginTop:10,
paddingTop:10,
paddingBottom:10,
backgroundColor:'#8f130a',
borderRadius:10,
borderWidth: 1,
borderColor: '#fff'
},

cdStyle:{
  marginRight:4,
  marginLeft:4,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'red',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
  },

});
