import { View, Text, Button, TextInput, FlatList, SectionList } from 'react-native';
import { Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
export default function LoginScreen() {
  const [login, setLogin] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Image source={require("../assets/images/login.png")} style={{marginTop:80,width:300, height:400, alignSelf:"center",alignContent:"center"}} />
     
      <View style={{backgroundColor:"#fff",width:"100%",height:300,marginBottom:0,marginTop:'auto', borderTopLeftRadius:20, borderTopRightRadius:20, padding:20,paddingBottom:20,gap:15}}>
      <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>Login</Text>
    <TextInput placeholder="username" style={{padding:15,borderColor:"#000000", borderWidth:1,borderRadius:5}} />
    <TextInput placeholder="password" style={{padding:15,borderColor:"#000000", borderWidth:1,borderRadius:5}} />
    <Button title="Login" onPress={()=>router.replace("/home")} />
        </View>
    </View>
  );
}
 