import * as types from '../constants/ActionTypes';
var data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : {}

var innitialState = data;

var TodoReducer = (state = innitialState, action) => {
    var listData = state["listData"]?state["listData"]:{};
    var listEdit = {};
    switch (action.type) {
        case types.GET_LIST:
            return state;
        case types.ADD_TODO:            
            var newTodo = {
                id: Math.floor(Math.random() * Math.floor(100)),
                name: action.data.name
            };
            
            listData[newTodo.id] = newTodo;            
            state["listData"] = listData;
            state["listEdit"] = listEdit;
            
            
            localStorage.setItem('todo', JSON.stringify(state));
            return {...state};
        case types.DELETE_TODO:           
            Object.values(listData).map((value, index) => {
                if (value.id == action.id) {
                    delete listData[value.id];
                    state["listData"] = listData;
                    localStorage.setItem('todo', JSON.stringify(state));
                }
            });
            return {...state};
        case types.EDIT_TODO:                   
            let data = Object.values(listData).filter(item => item.id == action.id);            
            listEdit = data[0];
            state["listEdit"]= listEdit;
            state["listData"] = listData;                        
            localStorage.setItem('todo', JSON.stringify(state));            
            return {...state};
        case types.UPDATE_TODO:
            let id = action.todo.id;         
            let data1 = Object.values(listData).filter(item => item.id == id);
            data1[0].name=  action.todo.name;
            state["listEdit"]= {};
            state["listData"] = listData;                        
            localStorage.setItem('todo', JSON.stringify(state));            
            return{...state};
        default:
            return {...state};

    }

}
export default TodoReducer
