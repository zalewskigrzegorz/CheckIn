import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Appbar, Button, HelperText, TextInput } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form'
import { useStateValue } from '../context/StateContext'

import Colors from '../constants/Colors'
import Regex from '../constants/Regex'
import TextInputAvoidingView from '../components/TextInputAvoidingView'

export default function SettingsRoute () {
  const [{ email }, dispatch] = useStateValue()
  const { control, handleSubmit, errors } = useForm()
  const onSubmit = data =>
    dispatch({
      type: 'register',
      newEmail: data.email,
      newPassword: data.password
    })

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='Settings' subtitle='Setup your account' />
      </Appbar.Header>
      <TextInputAvoidingView>
        <ScrollView
          style={[styles.container]}
          keyboardShouldPersistTaps='always'
          removeClippedSubviews={false}
        >
          <View style={styles.inputContainerStyle}>
            <Controller
              as={<TextInput />}
              control={control}
              name='email'
              value={email}
              onChange={args => args[0].nativeEvent.text}
              defaultValue=''
              label='Email'
              type='email'
              rules={{
                pattern: {
                  value: Regex.ultimateEmailRegex,
                  message: 'Invalid email'
                },
                required: 'Required'
              }}
              error={errors.email}
            />
            <View style={styles.helpersWrapper}>
              <HelperText type='error'>
                {errors.email && <Text>{errors.email.message}</Text>}
              </HelperText>
            </View>
          </View>
          <View style={styles.inputContainerStyle}>
            <Controller
              as={<TextInput />}
              control={control}
              name='password'
              onChange={args => args[0].nativeEvent.text}
              defaultValue=''
              label='Password'
              rules={{ required: 'Required' }}
              secureTextEntry
              error={errors.password}
            />

            <View style={styles.helpersWrapper}>
              <HelperText type='error'>
                {errors.password && <Text>{errors.password.message}</Text>}
              </HelperText>
            </View>
          </View>
        </ScrollView>
      </TextInputAvoidingView>
      <Button
        icon='content-save'
        compact
        style={styles.button}
        color={Colors.SettingsScreen.secondaryColor}
        disabled={false}
        mode='contained'
        onPress={handleSubmit(onSubmit)}
      >
        Save
      </Button>
      <View>
        <Button
          icon='home-map-marker'
          style={styles.button}
          color={Colors.SettingsScreen.primaryColor}
          disabled
          mode='contained'
          onPress={() => {}}
        >
          Set your home location
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.SettingsScreen.primaryColor
  },
  button: {
    padding: 8,
    margin: 8
  },
  container: {
    padding: 8
  },
  inputContainerStyle: {
    margin: 8
  },
  helpersWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
})
