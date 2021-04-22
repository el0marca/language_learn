// import { combineReducers, configureStore, getDefaultMiddleware, thunk } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import auth from "./auth";
import azEnSentences from "./azEnSentences";
import { bottomTab } from "./bottomTab";
import enAzSentences from "./enAzSentences";
import learnWords from "./learnWords";
import levelsList from "./levelsList";
// import listenAndAnswer from "./listenAndAnswer";
import progress from "./progress";
import theory from "./theory";
import words from "./words";
import wordsForMatch from "./wordsForMatch";

let reducers = combineReducers(
    {
        wordsForMatch: wordsForMatch,
        azEnSentences: azEnSentences,
        enAzSentences: enAzSentences,
        // listenAndAnswer: listenAndAnswer,
        learnWords: learnWords,
        levelsList: levelsList,
        theory: theory,
        progress: progress,
        auth: auth,
        bottomTab: bottomTab,
        words: words
    })

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
