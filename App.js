
import React, { useState } from 'react';
import { StyleSheet,Button, Text, View, TouchableOpacity,Modal,TouchableHighlight, TextInput, TouchableWithoutFeedback} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';


export default function App() {
  const [priceText,setPriceText]=useState(false);
  const [discountPercentText,setDiscountText]=useState(false);
  const [price,setNewPrice]=useState('');
  const [discountPercent,setDiscountPercent]=useState('');
  const [discountedPrice,setDiscountPrice]=useState('');
  const [history,setHistory]=useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [discountResult, setDiscountResult] = useState('');

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
    setDiscountResult('');
    
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
    if(price==''){
      alert('Please Enter Item Price')
    }
    else if(discountPercent==""){
      alert('Please Enter Discount Percentage First')

    }
    else if(price!='' && discountPercent!=''){
      const discount = price -(price * discountPercent/100)
      var totalDiscount = (price - discount).toFixed(2);
      setDiscountPrice(discountedPrice+discount)
      setDiscountResult(totalDiscount);
    }
  }


  const addToHistory=()=>{

    
    if(price!=="" && discountPercent !=="" && discountedPrice !==""){
      var array = [price,discountPercent,discountedPrice];

      var newDatawArray = history.slice()
      newDatawArray.push(array)
      setHistory(newDatawArray)
      console.log(history[0])
      alert('New Data Added to History')

  }
    else{
      alert('Please Calculate Discount First'),
      console.log("First Enter Data")
    }

    }
    
    

  return (
    <View style={styles.container}>
      
      <View>
        <View>
        <Text style={styles.title}>Discount Calculator App</Text>
        </View >
        <View >
        <Text style={styles.TextComponentStyle} onPress={()=>{setPriceText(true);setDiscountText(false)}}>{price == '' ? "Click on to enter price" : price}</Text>
        </View>

        <View >
        <Text
         style={styles.TextComponentStyle} onPress={()=>{setPriceText(false);setDiscountText(true)}}>{discountPercent==''? "Click on to enter Discount Percent":discountPercent}</Text>
        </View>
        <View>
        <Text>Discounted Price</Text>
        <Text 
         style={styles.TextComponentStyle}  onPress={()=>{setPriceText(false);setDiscountText(true)}}>{discountedPrice==''? "     ":discountedPrice}</Text>
      </View>
        
      </View>
      
      <View>
      <Text style={styles.result}>{price == null ? <View></View> :'\nYou saved:' +'Rs ' + discountResult}</Text>
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
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity disabled={discountedPrice} title="Calculate" onPress={discountFunc}style={styles.calculateStyle}><Text style={styles.buttonText} >Calculate</Text></TouchableOpacity>
        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity  title="Save"  style={styles.saveColor} onPress={()=>{addToHistory()}}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>

        </View>
        <View style={{width:"32%",marginRight:'1%'}}>
        <TouchableOpacity  title="History"  style={styles.saveColor}><Text style={styles.buttonText}>History</Text></TouchableOpacity>
        </View>
      </View>
      {/* <View>
        <Modal isVisible={modalVisible}>
          <View>
  <View style={{backgroundColor:'white',height:'60%',width:'100%'}}><View><Text style={{textAlign:'center', fontSize:29,color:'black', fontWeight:'bold', textAlign:'center'}}>History</Text>{history.map((historyNum,index) =>
  <Text style={{textAlign:'center', marginTop:'3%'}}>{index}.  Price:  {history[0]}   Discount:  {history[1] }   New Price: {history[2]}</Text>
  )}</View>
            <View style={{width:'32%', position:'absolute', left:'66%', top:'83%'}}>
            <TouchableOpacity title="Hide modal" color="#001529" onPress={()=>{setModalVisible(!modalVisible)}} /></View></View>
          </View>
        </Modal>
    </View> */}
      <StatusBar style="auto" />
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

TextComponentStyle: {

  borderRadius: 5,
  borderWidth: 5,
  borderColor: 'blue',
  color: 'black',
  backgroundColor : 'white',
  fontSize: 20,
  textAlign: 'center',
  margin: 5
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  resultBox: {
    top: '31%',
  },
  result: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#001529',
    textAlign: 'center'
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

});
