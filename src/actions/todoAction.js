//on add task function doesnt need status
export const ADD_TASK = '@todo/add-task'
export const COMPLETE_TASK = '@todo/complete-task'
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
      console.log(error);
  }
  }
}
export function completeTask(task) {
  console.log("complete",task)
  return async (dispatch)=> {
    try {
      //dispatch({type: ADD_TASK});
      dispatch({
        type: COMPLETE_TASK,
        payload : {
          task
        },
      })
    } catch (error) {
      // throw error;
      console.log(error);
  }
  }
}