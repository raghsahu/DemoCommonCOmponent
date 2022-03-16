import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Image, StatusBar } from 'react-native';

//ASSETS
import { COLORS,  } from '../assets';

//COMMON COMPONENT
import { Button, Header, Text, Input } from '../components';
import {LocalizationContext} from '../context/LocalizationProvider';



function Login(props) {
  const {getTranslation} = useContext(LocalizationContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    


    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
           <Header
            title={getTranslation('login')}
            centerTitleStyle={{marginLeft: 30}}
            onRightTitle={getTranslation('sign_up')}
            onRight={() => { 
                        props.navigation.navigate('SignUp')
                    }}
            // onLeftTitle={'Back'}
            // onLeft={() => { 
            //            // props.navigation.navigate('Cart')
            //         }}        
            >
           </Header>
                    
            <Input
              style={[styles.inputView, {marginTop: 50}]}
              placeholder={'Email'}
              onChangeText={text => {
                setName(text);
              }}
            />
            <Input
              style={[styles.inputView, { marginTop: 18 }]}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
              }}
              isShow={() => { 
                        //props.navigation.navigate('Login')
                    }}
            />
         
            <Button
              style={[styles.inputView, { marginTop: 100,  }]}
              title={'Log In'}
              onPress={() => {
               
                 props.navigation.navigate('Home')
              }}
            />
            <Text
              style={[styles.inputView, { marginTop: 20, alignSelf: 'center' }]}
              size="16"
              weight="bold"
              align="center"
              color={COLORS.lightGreen}
              onPress={() => {
                
              }}>
              {getTranslation('forgot_your_pw')}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: COLORS.white,
  },
  inputView: {
    marginHorizontal: 30,
  },
  
});

export default Login;
