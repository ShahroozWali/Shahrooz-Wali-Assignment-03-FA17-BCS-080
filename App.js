
import React, { useState } from 'react';
import { StyleSheet,Text, View, TouchableOpacity, TextInput, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';   
import { DataTable} from 'react-native-paper';
//import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';


var h = [];
var c = [];
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="homeScreen"
      screenOptions ={{
        headerTitleAlign:"center",
            headerTintColor:'orange',
            headerStyle: {
              backgroundColor:'red',

            }
      }

      }
      >
        <Stack.Screen 
        name="homeScreen" 
        component={HomeScreen}
        options={
          {
            title:"Welcome",
            headerTintColor:'white',
             headerStyle: {
               backgroundColor:'#12594a',

             },
        

          }
          
        }
         />
        <Stack.Screen 
        name="StartScreen" 
        component={StartScreen}
        options={({ navigation }) => ({
          title: "History",
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor:'#12594a',
          },
          headerRight: () => (
            <Button
              title="History"
              onPress={() => navigation.navigate('MyComponent', {history:h})}
              color='maroon'
            ><Text></Text></Button>
            
            )
        })}
      
          
        />
        <Stack.Screen 
        name="MyComponent" 
        component={MyComponent}
        options={
          {
            title:"History",
            headerTintColor:'white',
             headerStyle: {
               backgroundColor:'#12594a',

             },
        

          }
          
        }
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.b1}
      activeOpacity={0.2} 
      onPress={() => navigation.navigate('StartScreen')}>
      <Text>Lets Begin</Text>
      </TouchableOpacity>
    </View>
  );
}

const StartScreen = ({navigation}) => {
  const [price,setNewPrice]=useState('');
  const [t,setT]=useState(/^[0-9\b]+$/);
  const [discountPercent,setDiscountPercent]=useState('');
  const [discountedPrice,setDiscountedPrice]=useState('');
  const [discountResult, setDiscountResult] = useState('');
  const [saveButton,setSaveButton]=useState(false);
  const [clearButton,setClearButton]=useState(true);
  const [history,setHistory] = useState([]);
  var array = [price,discountPercent,discountedPrice];

  
  const handlePriceInput=(text)=>{
    setNewPrice(text)
    if(!t.test(text)){
      alert('Please Enter Positive Number Only')
      setNewPrice('')
    }
  }

  const handleDiscountInput=(text)=>{
    setDiscountPercent(text)
    if(!t.test(text)){
      alert('Please Enter Positive Number Only')
      setDiscountPercent('')
    }
    else if(text >=100){
      alert('Discount Cannot be Greater than 100%')
      setDiscountPercent('')

    }
  }
    
    

  

  const clearText=()=>{
    setNewPrice('')
    setDiscountPercent('')
    setDiscountedPrice('')
    setDiscountResult('')
    setSaveButton(false)
    setClearButton(true)
    
  }

  const discountFunc =()=>{
    setClearButton(false)
    if(price==''){
      alert('Please Enter Item Price')
    }
    else if(discountPercent==''){
      alert('Please Enter Discount Percentage First')

    }
    else if(price!='' && discountPercent!=''){
      var dis_count = (price -(price * discountPercent/100))
      var totalSave = (price - dis_count)
      var discount = dis_count.toFixed(2);
      var totalDiscount =totalSave.toFixed(2);
      setDiscountedPrice(discountedPrice+discount)
      setDiscountResult(totalDiscount);
    }
  }


  const addToHistory=()=>{

    
    if(price!=="" && discountPercent !=="" && discountedPrice !==""){
      var newDatawArray = history.slice()
      newDatawArray.push(array)
      setHistory(newDatawArray)
      h = newDatawArray
      alert('New Data Added to History')
      setSaveButton(true)

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
        <TextInput 
        style={styles.TextComponentStyle} 
        onChangeText={(text)=> handlePriceInput(text)}
        placeholder="Enter Price"
        value={price}
        >
          
        </TextInput>
          
        </View>

        <View >
        <TextInput
        style={styles.TextComponentStyle}
        onChangeText={text=>handleDiscountInput(text)}
        placeholder="Enter Discount Percentage"
        value={discountPercent}
        ></TextInput>
        </View>
      </View>

      <View style={styles.saveAndDiscountBox}>
          <Text style={styles.textStyle} >  Discounted Price</Text>
          <TextInput style={styles.TextComponentStyle}><Text></Text>{discountedPrice}</TextInput>
          <Text style={styles.textStyle}>  You Saved</Text>
          <TextInput style={styles.TextComponentStyle}>{discountResult}</TextInput>  
          </View>
      <View style={styles.buttonstyle}>

      </View>

      <View style={styles.buttonstyle}>
        <View>
        <TouchableOpacity 
        style={styles.calculateStyle}
        activeOpacity={0.2}
        onPress={discountFunc}>
        <Text 
        style={styles.buttonText}>Calculate</Text>  
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity   
        style={styles.saveColor}
        activeOpacity={0.2}
        disabled={saveButton} 
        onPress={addToHistory}
        >
        <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
        </View>
        <View>
          
        <TouchableOpacity   
        style={styles.saveColor}
        activeOpacity={0.2} 
        onPress={()=>{clearText()}}
        disabled={clearButton}
        >
        <Text style={styles.buttonText}>Clear</Text></TouchableOpacity>
        </View>
      </View>
      
    </View>

  );
}
const MyComponent = ({route}) => {
  var ar=route.params.history;
  const [list,setList]=useState(ar);

  console.log(list);

  const removeItem =(index)=>{
    let NewArray = [...list];
    NewArray.splice(index, 1);
    setList(NewArray);

  }

  const clearItems =()=>{
    setList(c);

  }

  return (
    <View>
      <View>
      <TouchableOpacity   
        style={styles.clear}
        activeOpacity={0.2} 
        onPress={()=>{clearItems()}}
        //disabled={clearButton}
        >
        <Text style={styles.buttonText}>CLEAR</Text></TouchableOpacity>
      </View>
  
    <DataTable>
        <DataTable.Header>
            <DataTable.Title >S.No</DataTable.Title>
            <DataTable.Title >Price</DataTable.Title>
            <DataTable.Title >Discount</DataTable.Title>
            <DataTable.Title >Final Price</DataTable.Title>
            
        </DataTable.Header>
        
        {list.map(((values, index) =>
            <DataTable.Row>
                <DataTable.Cell >{index + 1}</DataTable.Cell>
                <DataTable.Cell >    {values[0]}</DataTable.Cell>
                <DataTable.Cell>       {values[1]}% </DataTable.Cell>
                <DataTable.Cell numeric>{values[2]}</DataTable.Cell>
                <DataTable.Cell ><Button
                    title="X"          
                    onPress={() => removeItem(list.index)}></Button>
                </DataTable.Cell>
            </DataTable.Row>
        ))}
    </DataTable>
</View>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#008B8B',

  },
  textStyle: {
    fontWeight:'bold',
    color:'white',
  },

  buttonstyle: {
    flexDirection: "row",
    alignItems:"center",
    alignContent:'center',
    flexDirection: "row",
    justifyContent:'space-between',
    margin:1
  },

buttonText:{
    color:'#fff',
    textAlign:"center",
    fontWeight:'bold',
    //width:100,
},
clear: {
  margin:10,
  backgroundColor:'blue',
  padding:5,
  width:80,
  borderRadius:10,
  marginLeft:290,
},
saveColor:{
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#800000',
  borderRadius:10,
  borderWidth: 1,
  borderColor: 'white',
  marginLeft:2,
  width:70
},
calculateStyle:{
  padding:10,
  backgroundColor:'#483D8B',
  borderRadius:10,
  borderWidth: 1,
  borderColor: 'white',
  marginRight:2,
  //width:70

},
b1: {
  backgroundColor:'lightgreen',
  borderRadius:10,
  padding:10,
},

numberStyle2:{
  marginRight:10,
  alignItems:'center',
  padding:8,
  width:80,
  backgroundColor:'maroon',
  borderRadius:10,
  borderWidth:1,
  borderColor: 'white'
  
  },
TextComponentStyle: {
  padding:10,
  width:250,
  height:50,
  borderWidth: 2,
  borderRadius:10,
  borderColor: '#00008B',
  color: 'black',
  fontWeight:'bold',
  backgroundColor : 'white',
  fontSize: 10,
  textAlign: 'center',
  margin: 10
},

});


export default App;