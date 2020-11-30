import addTodo from '../actions/actions'

const initialState = {"name": "sagar"}

function rootReducer(state = initialState, action) {
    
    if (action.type == 'ADD_ITEM') {
        return {
          state
        }
      }

}

export default rootReducer;

// reducer => reducer stores initial state and return updated state depends in condition