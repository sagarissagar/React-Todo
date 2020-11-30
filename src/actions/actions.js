import { ADD_ITEM, DELETE_ITEM, SELECT_ITEM } from '../type/actiontype';

const addTodo = () => {
  return {
    type: ADD_ITEM,
    payload: 'Added to to do list'
  }
}

const deleteTodo = (item) => {
  return { 
    type: DELETE_ITEM,
    item
  }
}

const selectTodo = () => {
  return {
    type: SELECT_ITEM,
  }
}


export default { addTodo, deleteTodo, selectTodo }

// Action => 
// An action is a simple object containing a property called 'type'. 
// This object is passed into the dispatch function.

