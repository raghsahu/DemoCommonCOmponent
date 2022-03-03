import React, { createContext, useEffect, useState, useContext } from 'react';

//PACKAGES
import axios from 'axios'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

export const APPContext = createContext();

export const APPProvider = (props) => {

    //https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=2&per_page=10
   // const baseURL = "https://fakestoreapi.com/"
      const baseURL = "https://api.github.com/search/repositories?q=tetris+language:assembly"  

    const webServices = {
        products: baseURL + 'products',
      
    }

    const getProducts = async (sort, order, page, perPage) => {
        let url = baseURL + "&" + "sort=" + sort + "&"+ "order="+ order + "&" + "page=" + page + "&"+ "per_page="+ perPage
        return await request(url, 'get', {})
    }

    // const getHome = async (lang_code, mood) => {
    //     let params = {
    //         lang_code: lang_code,
    //         mood: mood
    //     }
      
    //     return await request(webServices.home, 'post', params)
    // }

     const request = async (url, method, params) => {
        try {
            console.log("===================")
            console.log("URL: ", url)
            console.log("METHOD: ", method)
            console.log("PARAMS: ", params)
           // console.log('Authorization', (user ? `Bearer ${user.access_token}` : ''))
            console.log("===================")


            if (method == 'get') {
                const response = await axios.get(url
              //  , {
                   // params: params,
                    // headers: {
                    //     'Authorization': user ? `Bearer ${user.access_token}` : ''
                    // },
                //}
                );

                return getResponse(response)
            }
            // else if (method == 'put') {
            //     const response = await axios.put(url, params,
            //     // {
            //         // headers: {
            //         //     'Authorization': user ? `Bearer ${user.access_token}` : ''
            //         // },
            //    // }
            //     )

            //     return getResponse(response)
            // }
            // else {
            //     var response = await axios({
            //         method: method,
            //         url: url,
            //         data: params,
            //         // headers: {
            //         //     'Authorization': user ? `Bearer ${user.access_token}` : ''
            //         // },
            //     });

            //     return getResponse(response)
            // }
        }
        catch (e) {
            console.log(e)
           // return getError(e)
           return 'Something went wrong'
        }
    }

    const getResponse = (response) => {
        console.log(JSON.stringify(response))

        if (response && response == false) {
            let result = {
                status: false,
                data: response.data,
                error: 'Something went wrong'
            }
            return result
        }
        else {
            let data = response.data
            if (data) {
                let result = {
                    status: true,
                    data: data,
                   // subscription: data && data.subscription ? data.subscription : null,
                    error: 'Something went wrong'
                }
                return result
            }
        //     else if (data && data.status == 'OK') {
        //         let result = {
        //             status: true,
        //             data: data.data,
        //             subscription: data && data.subscription ? data.subscription : null,
        //             error: data.message
        //         }
        //         return result
        //     }
        //     else if (data && (data.status == '401' || data.status == '400')) {
        //         AsyncStorage.clear()
        //         let result = {
        //             status: false,
        //             data: data,
        //             error: data.message
        //         }
        //         return result
        //     }
        //     else {
        //         let result = {
        //             status: false,
        //             data: '',
        //             error: data.message
        //         }
        //         return result
        //     }

         }
    }

    const getError = (error) => {
        var message = ""
        if (error.response) {
            if (error.response.data) {
                console.log(error.response.data)
                if (error.response.data.msg) {
                    message = error.response.data.msg
                }
                else {
                    message = JSON.stringify(error.response.data)
                }
            }
            else {
                console.log(error.response)
                message = "Something went wrong"
            }
        }
        else {
            console.log(error)
            message = error.message
        }

        let data = {
            status: false,
            result: null,
            error: message
        }
        return data
    }

     return (
        <APPContext.Provider
            value={{
                baseURL,
                getProducts,

            }}>
            {props.children}
        </APPContext.Provider>
    )
}
