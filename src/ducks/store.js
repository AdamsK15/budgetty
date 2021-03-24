import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import Budget from '../components/Budget/Budget'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));