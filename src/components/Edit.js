import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../actions/todo';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            todo: this.props.dataReciver ? this.props.dataReciver.listEdit : {}
        }
    }
    changeInput = (e) => {        
        let value = e.target.value;
        this.setState({
            todo:{
                id:this.state.id,
                name:value
            }
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let {todo} =this.state;
        console.log(todo);                
        if(todo.name!=''){
            this.props.updateTodo(todo);
        }
        this.props.history.push('/')
    } 
    componentDidMount() {
        this.props.editItem(this.props.match.params.id);      
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.dataReciver){
            this.setState({
                todo:nextProps.dataReciver.listEdit
            })
        }
    }
    renderFormEdit = () => {
        let { todo, id } = this.state;  
        if (Object.keys(todo).length>0) {
            return (
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label className="col-sm-1-12 col-form-label">Name</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="name" id="inputName" value={todo.name } onChange={this.changeInput} />
                        </div>
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            )
        }

    }
    render() {        
        return (
            <div className="container">
                <h1 className="text-center">Edit</h1>
                {this.renderFormEdit()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataReciver: state.TodoReducer
    }
}
const dispatchToProps = (dispatch, props) => {
    return {
        editItem: (ID) => {
            dispatch(Action.editItem(ID));
        },
        updateTodo:(todo)=>{
            dispatch(Action.updateTodo(todo));
        }
    }

};

export default connect(mapStateToProps, dispatchToProps)(Edit);

