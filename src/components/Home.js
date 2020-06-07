import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Action from '../actions/todo';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderTable = () => {
        let { data } = this.props;        
        var listData= data.listData
        if ( listData && Object.keys(listData).length > 0) {
            return Object.values(listData).map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td><Link to={'edit/' + value.id} type="button" className="btn btn-primary">Edit</Link></td>
                        <td><button className="btn btn-danger" data-id={value.id} onClick={this.deleteItem}>Delete</button></td>
                    </tr>
                )
            })
        }
    }
    deleteItem = (e) => {
        var confirm = window.confirm('ban muon xoa?');
        if (confirm) {
            let id = e.target.getAttribute('data-id');
            this.props.onDeleteItem(id);
        }
    }
    render() {

        return (
            <div className="container">
                <h1 className="text-center text-primary">Todos List</h1>
                <Link to="/add" className="btn btn-primary">AddNew</Link>
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th colSpan="2">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.TodoReducer
    }

}
const dispatchToProps = (dispatch, props) => {
    return {
        onDeleteItem: (id) => {
            dispatch(Action.deleteItem(id))
        }
    }
}
export default connect(mapStateToProps, dispatchToProps)(Home);