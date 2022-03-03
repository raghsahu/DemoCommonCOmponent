import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

//ASSETS
import {COLORS} from '../assets';

//COMMON COMPONENT
import {
  Button,
  Header,
  Text,
  Input,
  RadioButtons,
  CheckBox,
  DropdownPicker,
  DateTimePick,
} from '../components';

import moment from 'moment'; // date format


const options = [
  {
    key: 'Male',
    text: 'Male',
  },
  {
    key: 'Female',
    text: 'Female',
  },
];

const optionsProfession = [
  {
    key: '1',
    label: 'Student',
    value: 'Student',
  },
  {
    key: '2',
    label: 'Teacher',
    value: 'Teacher',
  },
];

function SignIn(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectDate, setSelectDate] = useState('');
  const [selectedSex, setSelectedSex] = useState('Sex');


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setSelectDate(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

   const onValueChange = item => {
     setSelectedSex(item)
  };

  const setCheck = checkStatus => {
    setSelection(checkStatus);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <Header
            title={'Sign Up'}
            // centerTitleStyle={{marginLeft: 30}}
            onRightTitle={'Log In'}
            onRight={() => {
              props.navigation.navigate('Login');
            }}
            onBack={() => {
              props.navigation.goBack();
            }}></Header>

          <Input
            style={[styles.inputView, {marginTop: 50}]}
            placeholder={'Name'}
            onChangeText={text => {
              setName(text);
            }}
          />
          <Input
            style={[styles.inputView, {marginTop: 18}]}
            placeholder={'Email'}
            onChangeText={text => {
              //setPassword(text);
            }}
          />
          <Input
            style={[styles.inputView, {marginTop: 18}]}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={text => {
              //setPassword(text);
            }}
            isShow={() => {
              //props.navigation.navigate('Login')
            }}
          />

          <TouchableOpacity onPress={showDatepicker} style={styles.inputView}>
            <Input
              style={[{marginTop: 18}]}
              placeholder={'Select Date'}
              editable={false}
              value={selectDate}
            />
          </TouchableOpacity>

         <DropdownPicker
           placeholder={'Profession'}
           selectedValue={selectedSex}
           onChange={onValueChange}
           options={optionsProfession}
         />

          <View style={[styles.inputView, {marginTop: 20}]}>
            <RadioButtons
              selectedOption={selectedOption}
              onSelect={onSelect}
              options={options}
            />
          </View>

          <CheckBox
            isSelected={isSelected}
            text={'Terms & Conditions'}
            onChecked={setCheck}
          />

          <Button
            style={[styles.inputView, {marginTop: 30}]}
            title={'Sign Up'}
            onPress={() => {}}
          />
         
        </ScrollView>
      </SafeAreaView>

      {show && (
        <DateTimePick
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
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
  inputContainer: {
    height: 54,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: COLORS.lightGrey,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
  },
});

export default SignIn;
