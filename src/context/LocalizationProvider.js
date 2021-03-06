import React, { createContext, useState, useEffect } from 'react';

import I18n from 'i18n-js';
import { memoize } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocalizationContext = createContext();

export const LocalizationProvider = (props) => {

    const [currentLanguage, setLanguage] = useState('')

    const translationGetters = {
        en: () => require('../localize/en.json'),
        fr: () => require('../localize/fr.json'),
        
    }

    const translate = memoize(
        (key, config) => I18n.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    )

    const setI18nConfig = (language) => {
        I18n.translations = { [language]: translationGetters[language]() }
        I18n.locale = language
    }

    const getTranslation = (text) => {
        return translate(text)
    }
    
    const getLanguageName = (language) => {
        if (language == 'en') {
            return "English"
        }
        else if (language == 'fr') {
            return "French"
        }
       
    }

    const getUserLanguage = (callback) => {
        AsyncStorage.getItem('user_current_selected_language', (error, result) => {
            let lan = result ? result : 'en'
            global.language = lan
            global.languageName = getLanguageName(lan)
            setLanguage(lan)
            callback(lan)
        })
    }
    
    const saveUserLanguage = (language) => {
        global.language = getLanguageName(language)
        AsyncStorage.setItem('user_current_selected_language', language)
    }

    return (
        <LocalizationContext.Provider
            value={{
                currentLanguage,
                setI18nConfig,
                getTranslation,
                getUserLanguage,
                saveUserLanguage
            }}>
            {props.children}
        </LocalizationContext.Provider>
    )
}
