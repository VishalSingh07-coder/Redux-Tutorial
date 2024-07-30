function addtask(task){
  return {
    type:'ADD_TASK',
    
    payload:{
      id:1,
      task:task,
      status:'completed'
    }
  }
