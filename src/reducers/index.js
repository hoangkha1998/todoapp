import{combineReducers} from 'redux';
import TodoReducer from './todo';
const AppReducer = combineReducers({
    TodoReducer,

})
export default AppReducer;
