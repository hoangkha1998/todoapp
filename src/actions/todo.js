import * as ActionType from '../constants/ActionTypes'

export const getList = () => {
    return {
        type: ActionType.GET_LIST
    }
}
export const addTask = (data) => {
    return {
        type: ActionType.ADD_TODO,
        data: data
    }
}
export const deleteItem = (id) => {
    return {
        type: ActionType.DELETE_TODO,
        id
    }
}
export const editItem = (id) => {
    return {
        type: ActionType.EDIT_TODO,
        id
    }
}
export const updateTodo = (todo) => {
    return {
        type: ActionType.UPDATE_TODO,
        todo
    }
}