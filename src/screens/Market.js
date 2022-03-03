import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Toast,
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
  HotDealItems,
  ProgressView,
  Menu,
} from '../components';
//CONTEXT
import {APPContext} from '../context/APPProvider';
import Drawer from 'react-native-drawer';

function Market(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {getProducts} = useContext(APPContext);

  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [onEndReached, setOnEndReached] = useState(false);

  var drawer = useRef(null);

  useEffect(() => {
    fetchProductData();
    return () => {};
  }, []);

  const fetchProductData = async () => {
    try {
      const result = await getProducts('stars', 'desc', page, '10');
      setLoading(false);
      setMoreLoading(false);
      if (result.status == true) {
        if (result.data.items.length > 0) {
          //setProducts(result.data.items);
          setProducts([...products, ...result.data.items]);
          setError(false);
        } else {
          // setProducts([])
          setError(true);
        }
      } else {
        //  Toast.show(result.error);
      }
    } catch (e) {
      setLoading(false);
      setMoreLoading(false);
      // Toast.show(e.message);
      console.log(e);
    }
  };

   const onClose = () => {
        drawer.close();
    }

    const onPressMenu = (navigateScreenName) => {
        props.navigation.navigate({ props, name: navigateScreenName })
        onClose();
    }

  return (
    <Drawer
      ref={ref => (drawer = ref)}
      type="overlay"
      tapToClose={true}
      openDrawerOffset={0.25}
      content={
        <Menu
          onPressItem={items => {
           onPressMenu(items);
          }}
          onClose={onClose}
        />
      }>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <Header
              title={'Market'}
              // centerTitleStyle={{marginLeft: 30}}
              onRightTitle={'Filter'}
              onRight={() => {
                // props.navigation.navigate('SignIn')
              }}
              onMenu={() => {
                drawer.open();
              }}
            />

            <Input
              style={[styles.inputView, {marginTop: 18}]}
              placeholder={'Search'}
              border={{borderRadius: 22}}
              onChangeText={text => {}}
            />

            <Text
              style={[styles.inputView, {marginTop: 20}]}
              size="20"
              weight="600"
              color={COLORS.black}>
              {'Hot deals'}
            </Text>

            {loading ? (
              <ActivityIndicator
                style={{marginTop: 30, alignSelf: 'center'}}
                color={COLORS.black}
              />
            ) : (
              <>
                <View style={{marginLeft: 10}}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    //onScrollEndDrag={() => console.log(" *********end")}
                    // onScrollBeginDrag={() => console.log(" *******start")}
                    initialNumToRender={8}
                    maxToRenderPerBatch={10}
                    onEndReachedThreshold={0.1}
                    onMomentumScrollBegin={() => {
                      setOnEndReached(false);
                    }}
                    onEndReached={() => {
                      if (!onEndReached) {
                        setPage(page + 1);
                        setMoreLoading(true);
                        fetchProductData(); // on End reached
                        setOnEndReached(true);
                      }
                    }}
                    //******** */
                    renderItem={({item, index}) => {
                      return (
                        <HotDealItems
                          item={item}
                          onPress={() => {
                            props.navigation.navigate('Profile');
                          }}
                        />
                      );
                    }}
                    ListFooterComponent={() => {
                      return (
                        <View style={styles.footer}>
                          {moreLoading ? (
                            <ActivityIndicator
                              color="black"
                              style={{marginLeft: 8, alignSelf: 'center'}}
                            />
                          ) : null}
                        </View>
                      );
                    }}
                  />
                </View>
              </>
            )}

            <Text
              style={[styles.inputView, {marginTop: 10}]}
              size="20"
              weight="600"
              color={COLORS.black}>
              {'Trending'}
            </Text>

            {loading ? (
              <ActivityIndicator
                style={{marginTop: 30, alignSelf: 'center'}}
                color={COLORS.black}
              />
            ) : (
              <>
                <View style={{marginLeft: 10}}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    //onScrollEndDrag={() => console.log(" *********end")}
                    // onScrollBeginDrag={() => console.log(" *******start")}
                    initialNumToRender={8}
                    maxToRenderPerBatch={10}
                    onEndReachedThreshold={0.1}
                    onMomentumScrollBegin={() => {
                      setOnEndReached(false);
                    }}
                    onEndReached={() => {
                      if (!onEndReached) {
                        setPage(page + 1);
                        setMoreLoading(true);
                        fetchProductData(); // on End reached
                        setOnEndReached(true);
                      }
                    }}
                    //******** */
                    renderItem={({item, index}) => {
                      return (
                        <HotDealItems
                          item={item}
                          onPress={() => {
                            props.navigation.navigate('Profile');
                          }}
                        />
                      );
                    }}
                    ListFooterComponent={() => {
                      return (
                        <View style={styles.footer}>
                          {moreLoading ? (
                            <ActivityIndicator
                              color="black"
                              style={{marginLeft: 8, alignSelf: 'center'}}
                            />
                          ) : null}
                        </View>
                      );
                    }}
                  />
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: COLORS.white,
  },
  inputView: {
    marginHorizontal: 20,
  },
  item: {
    backgroundColor: COLORS.white,
    // borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  footer: {
    padding: 10,
    marginTop: 40,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
  },
});

export default Market;
