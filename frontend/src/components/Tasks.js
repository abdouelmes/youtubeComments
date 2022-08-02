import Task from './Task'

const Tasks = ({Tasks,onDelete}) => {

  return (
    
    <>
      {Tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete}/>))}
    </>
  )
}

export default Tasks