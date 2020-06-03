import {ADD_TASK,COMPLETE_TASK} from '../actions/todoAction'
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
    console.log("recuder",action)
    switch (action.type) {
        case ADD_TASK : {
            const {task} = action.payload
            state.todos=state.todos.concat([{ task: task, completed: false }])
            return state
        }
        case COMPLETE_TASK : {
            const {task} = action.payload
            state.todos = state.todos.filter((todo) => {
                return (todo.task != task)
              })
            return state
        }
        default : {
            return state
        }
    }
}

export default todoReducer;