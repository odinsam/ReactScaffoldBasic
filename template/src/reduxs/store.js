/**
 * 用于暴露一个store对象，整个应用只有一个store对象
 */
import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { DemoReducers } from '../reduxs/reducers/demo';

const allReducers = combineReducers({
    demo: DemoReducers
});
export default configureStore(allReducers, applyMiddleware(thunk));
