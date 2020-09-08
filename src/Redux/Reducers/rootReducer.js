import { combineReducers } from 'redux';
import {programsReducer} from './ProgramsReducer';
import {filterReducer} from './filterReducer';

export default combineReducers({
    programs : programsReducer,
    filters : filterReducer
})