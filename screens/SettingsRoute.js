import {Appbar, TextInput, Button} from 'react-native-paper';
import React, { useState, useEffect } from "react";
import {Alert, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import {useForm} from "react-hook-form";

export default function SettingsRoute() {

  const { register, handleSubmit, setValue } = useForm();
  useEffect(() =>{
    register["email"];
    register["password"];
  }, [register]);
  const onSubmit = data  =>{
    Alert.alert("Form Data" , data)
  }


  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  return (
    <View>
      <Appbar.Header style= {styles.appBar}>
        <Appbar.Content
          title="Settings"
          subtitle="Setup your account"
        />
      </Appbar.Header>
      <TextInput
        label='Email'
        value={login}
        error={loginError}
        onChangeText={(text) => {
          setValue('email', text);
          setLogin( text );
          setLoginError(!text);
        }}
      />
      <TextInput
        label='Password'
        value={password}
        error={passwordError}
        onChangeText={(text) => {
          setValue('password', text);
          setPassword( text );
          setPasswordError(!text);
        }}
      />
      <Button icon="content-save"
              color={Colors.SettingsScreen.secondaryColor}
              disabled={()=>passwordError||loginError}
              mode="contained" onPress={() => console.log('Pressed')}>
        Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor:Colors.SettingsScreen.primaryColor
  },
});
