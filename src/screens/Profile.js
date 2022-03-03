import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

//ASSETS
import {COLORS, IMAGES} from '../assets';
//PACKAGE
import ActionSheet from 'react-native-actions-sheet';
//COMMON COMPONENT
import {
  Button,
  Header,
  Text,
  Input,
  PostsItems,
  CustomRatingBar,
} from '../components';

const {height, width} = Dimensions.get('screen');

function Profile(props) {
  const actionSheetRef = useRef();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const onPressLogout = () => {
    actionSheetRef.current?.setModalVisible(true);
  };

  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = item => {
    setDefaultRating(item);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.green} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: COLORS.green}}>
            <Header
              title={'Profile'}
              //  style= {{ backgroundColor: COLORS.green,}}
              onRightTitle={'Logout'}
              leftRightTextColor={COLORS.white}
              titleTextColor={COLORS.white}
              onRight={() => {
                onPressLogout();
              }}
              onLeftTitle={'Settings'}
              onLeft={() => {
                toggleModalVisibility();
              }}></Header>
          </View>

          <View style={{height: 190}}>
            <View style={{backgroundColor: COLORS.green, height: 130}}></View>

            <Image
              style={{
                width: 140,
                height: 140,
                alignSelf: 'center',
                borderColor: COLORS.white,
                borderWidth: 3,
                borderRadius: 140 / 2,
                marginTop: 40,
                position: 'absolute',
              }}
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5ceafa407824f80001793b84/1617145105645-4JQVM5BOCNU2XD62M3UM/modal-verbs-passive-past.jpg',
              }}
            />
          </View>

          <Text
            style={[styles.inputView, {alignSelf: 'center'}]}
            size="28"
            weight="bold"
            align="center"
            color={COLORS.black}>
            {'Robertson'}
          </Text>
          <Text
            style={[styles.inputView, {alignSelf: 'center'}]}
            size="14"
            weight="400"
            align="center"
            color={COLORS.black}>
            {'A mantra goes here'}
          </Text>

          <View style={[styles.inputView, styles.tabView]}>
            <Text
              style={[
                styles.tabTextView,
                {marginStart: 2, backgroundColor: COLORS.white},
              ]}
              size="16"
              weight="bold"
              align="center"
              color={COLORS.green}>
              {'Posts'}
            </Text>
            <Text
              style={[styles.tabTextView, {marginEnd: 2}]}
              size="16"
              weight="bold"
              align="center"
              color={COLORS.green}>
              {'Photos'}
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <FlatList
              // horizontal={true}
              //showsHorizontalScrollIndicator={false}
              data={['', '', '', '', '']}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <PostsItems
                    onPress={() => {
                      // props.navigation.navigate('Profile')
                    }}
                  />
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      <ActionSheet ref={actionSheetRef}>
        <View style={[styles.bottomView, {}]}>
          <Text
            style={[{alignSelf: 'center', marginTop: 10}]}
            size="28"
            weight="bold"
            align="center"
            color={COLORS.black}>
            {'App Name'}
          </Text>

          <Text
            style={[styles.inputView, {alignSelf: 'center'}]}
            size="16"
            weight="400"
            align="center"
            color={COLORS.black}>
            {'Are you sure you want to logout'}
          </Text>
          <Button
            style={[styles.inputView, {marginTop: 20}]}
            title={'Logout'}
            onPress={() => {
              // props.navigation.navigate('Market')
            }}
          />
          <Text
            style={[styles.inputView, {alignSelf: 'center', marginTop: 20}]}
            size="16"
            weight="400"
            align="center"
            color={COLORS.sky}>
            {'Cancel'}
          </Text>
        </View>
      </ActionSheet>

      {/** This is our modal component containing textinput and a button */}
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                toggleModalVisibility();
              }}>
              <Image
                resizeMode={'contain'}
                style={{height: 20, width: 20, margin: 10}}
                source={IMAGES.BACK}
                // tintColor={CONFIGURATION.TextDarkGray}
              />
            </TouchableOpacity>

            <CustomRatingBar
              onSelect={onSelect}
              defaultRatings={defaultRating}
              maxRating={maxRating}
            />

            <Text
              style={[{alignSelf: 'center', marginTop: 10}]}
              size="24"
              weight="bold"
              align="center"
              color={COLORS.black}>
              {'Rate our app'}
            </Text>

            <Text
              style={[{alignSelf: 'center', marginHorizontal: 10}]}
              size="16"
              weight="400"
              align="center"
              color={COLORS.black}>
              {
                'asdfgh jsdjdjkddjddj kldldk dlkdkdlk dldlkddlk dkdkdkc eeiurityi wpwpwp ddklkldd '
              }
            </Text>
            <Button
              style={[{marginTop: 20, marginHorizontal: 20}]}
              title={'I love it!'}
              onPress={() => {
                // props.navigation.navigate('Market')
              }}
            />
            <Text
              style={[{alignSelf: 'center', marginTop: 10}]}
              size="16"
              weight="400"
              align="center"
              color={COLORS.sky}>
              {'Cancel'}
            </Text>
          </View>
        </View>
      </Modal>
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
  tabView: {
    flex: 1,
    height: 54,
    borderRadius: 54 / 2,
    backgroundColor: COLORS.light_gray,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputView1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginStart: 20,
  },
  tabTextView: {
    flex: 1,
    // height: 50,
    padding: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50 / 2,
    // backgroundColor: COLORS.white,
  },
  bottomView: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#ffffff',
  },
  bottomViewItem: {
    margin: 25,
    borderColor: '#ADD8E6',
    borderWidth: 2,
    borderRadius: 8,
  },
  bottomViewIcon: {
    flexDirection: 'row',
    height: 50,
    marginStart: 20,
    alignItems: 'center',
  },
  viewWrapper: {
    flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 300,
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
});

export default Profile;
