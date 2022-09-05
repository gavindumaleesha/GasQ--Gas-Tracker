import * as React from 'react';
import { SafeAreaView, ScrollView,Text,View,Image, TextInput, TouchableOpacity,Picker } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login Screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white',height:'100%' }}>

          <Image
            style={{height:100, width: 100, marginTop:10}}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/3514/3514930.png'}}
          />

          <View style={{marginTop:30, padding:10}}>
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10}}
              placeholder="Username"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:10}}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={{marginTop:10}}
            onPress={()=>navigation.navigate('Authentication')}>
            <Text  style={{marginTop:10, fontSize:12, fontWeight:'Bold', color:'#ffaa00'}}>Forgot Password ?</Text> 
          </TouchableOpacity>

          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#ffaa00',borderRadius:5, marginBottom:20}}
              onPress={()=>navigation.navigate('Dashboard')}>
            <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Login</Text> 
            </TouchableOpacity>
          </View>

          <Text>or</Text>

          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#ffaa00',borderRadius:5, marginBottom:135}}
              onPress={()=>navigation.navigate('New Account')}>
            <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Sign Up</Text> 
            </TouchableOpacity>
          </View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

// New Account Screen
function newAcc({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' , backgroundColor:'white', padding:10,width:'100%'}}>

          <View style={{padding:10}}>

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20, width:'100%'}}
              placeholder="Full Name"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Username"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Email"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Phone Number"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Password"
            />

            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />

          </View>

          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#ffaa00',borderRadius:5, marginBottom:200}}
              onPress={()=>navigation.navigate('LogIn')}>
              <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Submit</Text> 
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Authentication Screen
function ForgotPw({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>

          <View style={{padding:10}}>

              <Image
                style={{height:100, width: 100, marginTop:10,alignSelf: 'center'}}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1804/1804429.png'}}
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="Email"
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="OTP CODE"
              />
            </View>

            <View style={{marginTop:30}}>
              <TouchableOpacity
                style={{padding:10, backgroundColor:'#ffaa00',borderRadius:5, marginBottom:260}}
                onPress={()=>navigation.navigate('Reset Password')}>
                <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Submit</Text> 
              </TouchableOpacity>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// New Password Screen
function newPw({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>

          <View style={{padding:10}}>

              <Image
                style={{height:100, width: 100, marginTop:10,alignSelf: 'center'}}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/6195/6195699.png'}}
              />
              
              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="New Password"
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="Re-Enter Password"
                secureTextEntry={true}
              />

            </View>

            <View style={{marginTop:30}}>
              <TouchableOpacity
                style={{padding:10, backgroundColor:'#ffaa00',borderRadius:5, marginBottom:260}}
                onPress={()=>navigation.navigate('LogIn')}>
                <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Submit</Text> 
              </TouchableOpacity>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// Dashboard
function DashBoard({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={{padding:5,flex: 1, alignItems: 'center', backgroundColor:'white'}}>
          
          <TouchableOpacity style={{width:"100%", height:150, marginTop:20,borderColor:"#ffaa00",borderWidth:5,borderRadius:5}}
          onPress={()=>navigation.navigate('Gas Details')}>

            <Image
              style={{height:70, width: 70, marginTop:5,alignSelf: 'center'}}
              source={{uri:'https://cdn-icons-png.flaticon.com/512/176/176716.png'}}
            />
            
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'#ff9900',padding:10}}>LP Gas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:150, marginTop:20,borderColor:"#ffaa00",borderWidth:5,borderRadius:5}}
          onPress={()=>navigation.navigate('Live Map')}>

            <Image
              style={{height:70, width: 70, marginTop:5,alignSelf: 'center'}}
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1865/1865083.png'}}
            />
            
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'#ff9900',padding:10}}>Live Map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:150,marginBottom:120, marginTop:20,borderColor:"#ffaa00",borderWidth:5,borderRadius:5}}
          onPress={()=>navigation.navigate('Notification')}>

            <Image
              style={{height:70, width: 70, marginTop:5,alignSelf: 'center'}}
              source={{uri:'https://cdn-icons-png.flaticon.com/512/2645/2645897.png'}}
            />
            
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'#ff9900',padding:10}}>Notification</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// Gas Details Screen
function LPGas({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>

        <View style={{padding:5,flex: 1, alignItems: 'center', backgroundColor:'white'}}>

        <Image
            style={{height:150, width: 150, marginTop:30}}
            source={{uri:'http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2021/08/07214622/gas-cylinders-single.png'}}
          />
          
          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'blue', marginTop:30,borderRadius:5}}
          onPress={()=>navigation.navigate('Litro Details')}>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,color:'white',padding:30}}>Litro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'#fcba03', marginTop:30, marginBottom:150,borderRadius:5}}
          onPress={()=>navigation.navigate('Laugfs Details')}>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,color:'white',padding:30}}>Laugfs</Text>
          </TouchableOpacity>

          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

// Litro Gas Screen
function LitroGas({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:5,flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'white'}}>

        <Image
            style={{height:100, width: 100, marginTop:10}}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/8/86/Litro_Gas_Lanka.png?20211012113411'}}
          />

          <View style={{alignItems: 'center',marginTop:10}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Available Gas Types</Text>
            <Text style={{padding:5}}>5 Kg</Text>
            <Text style={{padding:5}}>12.5 Kg</Text>
            <Text style={{padding:5}}>37.5 Kg</Text>
          </View>

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="Preferred weight"
          />

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="District"
          />

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="City or Town"
          />

              <TouchableOpacity
                style={{padding:10, backgroundColor:'blue',borderRadius:5,  marginTop:40, marginBottom:100}}>
                <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Search</Text> 
              </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

// laguh Gas Screen
function LaughGas({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:5,flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'white'}}>

        <Image
            style={{height:100, width: 100, marginTop:10}}
            source={{uri:'https://directory.mihikatha.lk/wp-content/uploads/2021/03/laugfn1g.jpg'}}
          />

          <View style={{alignItems: 'center',marginTop:10}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Available Gas Types</Text>
            <Text style={{padding:5}}>5 Kg</Text>
            <Text style={{padding:5}}>12.5 Kg</Text>
            <Text style={{padding:5}}>37.5 Kg</Text>
          </View>

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="Preferred weight"
          />

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="District"
          />

          <TextInput 
            style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
            placeholder="City or Town"
          />

              <TouchableOpacity
                style={{padding:10, backgroundColor:'#fcba03',borderRadius:5,  marginTop:40, marginBottom:100}}>
                <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Search</Text> 
              </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

// Notification Screen
function Notifications(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:10,textAlign:'center', alignContent:'center',backgroundColor:'white',width:'100%',
                      flexDirection:'column',justifyContent:'space-between'}}>

          <View style={{padding:10,borderWidth:2,borderRadius:10,borderColor:'black',paddingBottom:10}}>
                <Text style={{textAlign:'justify'}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae...
                </Text>

                <TouchableOpacity
                  style={{padding:10}}>
                  <Text  style={{fontSize:12, fontWeight:'Bold', color:'#fcba03'}}>Read more..</Text> 
                </TouchableOpacity>
          </View>

          <View style={{padding:10,borderWidth:2,borderRadius:10,borderColor:'black',paddingBottom:10,marginTop:20}}>
                <Text style={{textAlign:'justify'}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae...
                </Text>

                <TouchableOpacity
                  style={{padding:10}}>
                  <Text  style={{fontSize:12, fontWeight:'Bold', color:'#fcba03'}}>Read more..</Text> 
                </TouchableOpacity>
          </View>

          <View style={{padding:10,borderWidth:2,borderRadius:10,borderColor:'black',paddingBottom:10,marginTop:20}}>
                <Text style={{textAlign:'justify'}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae...
                </Text>

                <TouchableOpacity
                  style={{padding:10}}>
                  <Text  style={{fontSize:12, fontWeight:'Bold', color:'#fcba03'}}>Read more..</Text> 
                </TouchableOpacity>
          </View>
          
          <View style={{padding:10,borderWidth:2,borderRadius:10,borderColor:'black',paddingBottom:10,marginTop:20}}>
                <Text style={{textAlign:'justify'}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae...
                </Text>

                <TouchableOpacity
                  style={{padding:10}}>
                  <Text  style={{fontSize:12, fontWeight:'Bold', color:'#fcba03'}}>Read more..</Text> 
                </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


// Live Queue Map Screen 
function liveMap(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:10,textAlign:'center', alignContent:'center',backgroundColor:'white',width:'100%'}}>
          <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                
            <TextInput 
              style={{borderColor:'black', fontSize:10, borderWidth:1, borderRadius:10, padding:7, marginTop:5,
              width:'70%'}}
              placeholder="Search your area.."  
            />

            <TouchableOpacity
              style={{padding:10, backgroundColor:'#fcba03',borderRadius:5}}>
              <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Search</Text> 
            </TouchableOpacity>

          </View>

          <Image
            style={{width:'100%',height:510}}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/9/9f/Location_map_of_Colombo_municipality.png'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}




const Stack = createNativeStackNavigator();

// Route lines
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="LogIn" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name='Authentication' component={ForgotPw}/>
        <Stack.Screen name='Reset Password' component={newPw}/>
        <Stack.Screen name='New Account' component={newAcc}/>
        <Stack.Screen name='Gas Details' component={LPGas}/>
        <Stack.Screen name='Litro Details' component={LitroGas}/>
        <Stack.Screen name='Laugfs Details' component={LaughGas}/>
        <Stack.Screen name='Notification' component={Notifications}/>
        <Stack.Screen name='Live Map' component={liveMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;