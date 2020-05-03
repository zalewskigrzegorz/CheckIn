import React, {useEffect} from "react";
import {Alert, ScrollView, StyleSheet, View} from "react-native";
import {Appbar, Button, HelperText, TextInput} from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";

import Colors from "../constants/Colors";
import TextInputAvoidingView from '../components/TextInputAvoidingView'

export default function SettingsRoute() {

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => Alert.alert(
    "Form Data",
    JSON.stringify(data),
  );

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          title="Settings"
          subtitle="Setup your account"
        />
      </Appbar.Header>
      <TextInputAvoidingView>
        <ScrollView
          style={[styles.container, {backgroundColor: '#fff'}]}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={false}
        >
          <View style={styles.inputContainerStyle}>
            <Controller
              as={<TextInput/>}
              control={control}
              name="email"
              onChange={args => args[0].nativeEvent.text}
              rules={{ required: true ,pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/ }}
              defaultValue=""
              style={styles.inputContainerStyle}
              label='Email'
              error={errors.email}
            />
            {errors.firstName && <Text>This is required.</Text>}
            <View style={styles.helpersWrapper}>
              <HelperText type="error" visible={errors.email}>
                Error: Email is required.
              </HelperText>
            </View>
          </View>
          <View style={styles.inputContainerStyle}>
            <Controller
              as={<TextInput/>}
              control={control}
              name="password"
              onChange={args => args[0].nativeEvent.text}
              defaultValue=""
              label='Password'
              rules={{ required: true }}
              secureTextEntry={true}
              error={errors.password}
            />
            {errors.password && <Text>This is required.</Text>}
            <View style={styles.helpersWrapper}>
              <HelperText type="error" visible={errors.password}>
                Error: Password is required.
              </HelperText>
            </View>
          </View>
        </ScrollView>
      </TextInputAvoidingView>
      <Button icon="content-save"
              color={Colors.SettingsScreen.secondaryColor}
              disabled={false}
              mode="contained" onPress={handleSubmit(onSubmit)}>Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.SettingsScreen.primaryColor
  },
  container: {
    padding: 8,
  },
  inputContainerStyle: {
    margin: 8,
  },
  counterHelper: {
    textAlign: 'right',
  },
  helpersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
