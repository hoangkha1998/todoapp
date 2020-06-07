import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as Action from '../actions/todo';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state={           
            name:''
        }        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let {name} =this.state;
        let todo ={};
        todo.name=name;
        if(name != ''){
            this.props.onAddToDo(todo);
            this.props.history.push('/');
        }
    }
    changeInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-primary">Add New</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label  className="col-sm-1-12 col-form-label">Name</label>
                    <div className="col-sm-1-12">
                        <input type="text" className="form-control" name="name" id="inputName" value={this.state.name} onChange={this.changeInput}/>
                    </div>
                </div>                
                <div className="form-group ">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return{}
};
const dispatchToProps =(dispatch,props)=>{
    return{
        onAddToDo:(todo)=>{
            dispatch(Action.addTask(todo));
        }
    }

};
export default connect(mapStateToProps,dispatchToProps)(Add);