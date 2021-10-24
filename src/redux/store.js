// import { combineReducers, configureStore, getDefaultMiddleware, thunk } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import auth from "./auth";
import azEnSentences from "./azEnSentences";
import { bottomTab } from "./bottomTab";
import enAzSentences from "./enAzSentences";
import learnWords from "./learnWords";
import levelsList from "./levelsList";
import completeSentence from "./completeSentence";
import progress from "./progress";
import theory from "./theory";
import words from "./words";
import wordsForMatch from "./wordsForMatch";
import voice from "./voice";
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { version } from "./version";
import { rate } from "./rate";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blackList:['bottomTab']
}

const rootReducer = combineReducers(
    {
        wordsForMatch: wordsForMatch,
        azEnSentences: azEnSentences,
        enAzSentences: enAzSentences,
        learnWords: learnWords,
        levelsList: levelsList,
        theory: theory,
        progress: progress,
        auth: auth,
        bottomTab: bottomTab,
        words: words,
        completeSentence:completeSentence,
        voice:voice,
        version: version,
        rate:rate
    })

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistReducers, applyMiddleware(thunkMiddleware));

export const persistor = persistStore(store)

export default {store, persistor}