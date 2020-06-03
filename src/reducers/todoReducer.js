import {ADD_TASK} from '../actions/todoAction'
const initialState = {
    todos: [{
        task: 'Eat food',
        completed: true
        }, {
        task: 'Exercise',
        completed: false
    }],
};

const todoReducer = (state = initialState,action)=> {
    console.log(action)
    switch (action.type) {
        case ADD_TASK : {
            const {task} = action.payload
            state.todos=state.todos.concat([{ task: task, completed: false }])
            return state
        }
        default : {
            return state
        }
    }
}

export default todoReducer;