/*
 * @file main file for reducers
 */

import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';

const rootReducer = combineReducers({
  items,     // ............store里面state对象的属性名，即为combineReducers之中传入对象的属性名(items).......
  editor,
});

export default rootReducer;
