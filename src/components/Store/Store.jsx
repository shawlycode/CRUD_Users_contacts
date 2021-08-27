import usersReducers from '../Reducers/UsersReducers'
import {createStore} from 'redux';

const store = createStore(usersReducers)

export default store;