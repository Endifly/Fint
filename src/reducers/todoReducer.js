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
            console.log({ task: task, completed: false })
            var newTodos = []
            // state.todos = state.todos.filter((todo) => {
            //     return (todo.task != task)
            //   })
            state.todos.forEach(e=>{
                if (e.task != task) {
                    newTodos.push({ task: e.task, completed: e.completed })
                }
                else if (e.task == task) {
                    newTodos.push({ task: e.task, completed: true })
                }
            })
            state.todos=newTodos
            return state
        }
        default : {
            return state
        }
    }
}

export default todoReducer;