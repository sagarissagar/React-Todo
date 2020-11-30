import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/actions';

const Todo = ({allActions}) => {

    const [state, setstate] = useState('');

    const handleAddItem = () => {
        allActions.addTodo()
    }

    const handleTextChange = (event) => {
        setstate(event.target.value);
    }

    return (
        <div className="d-flex justify-content-center">
        <form>
        <div class="form-group">
            <h2>To do</h2>
            <input type="input" className="form-control-file" onChange={handleTextChange}></input><br/>
            <button type="button" className="btn btn-outline-primary" onClick={handleAddItem}>Submit</button>
            <p>{state}</p>
        </div>
        </form>
        </div>
    )
}


const mapStateToProps = state => {
    return { };
  }
  
const mapDispatchToProps = (dispatch) => ({
    allActions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Todo);


// dispatch => The dispatch function is a method of the store which is used to trigger a change in the state
// connect => Connect is a method that hooks up mapStateToProps and mapDispatchToProps functions to your component
// mapStateToProps => When you want your component to have access to the state you have to explicitly specify what in the state the component will get access to. Your component will not have access to state without this.