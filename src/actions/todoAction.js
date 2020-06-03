//on add task function doesnt need status
export const ADD_TASK = '@todo/add-task'
export function addTask(task) {
  console.log(task)
  return async (dispatch)=> {
    try {
      //dispatch({type: ADD_TASK});
      dispatch({
        type: ADD_TASK,
        payload : {
          task
        },
      })
    } catch (error) {
      throw error;
  }
  }
}