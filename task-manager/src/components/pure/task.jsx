import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function TaskComponent({task}) {
  return (
    <div>
        <h2> Name: {task.name} </h2>
        <h2> Description: {task.description} </h2>
        <h2> Level: {task.level} </h2>
        <h3>
            This task is: { task.completed ? 'COMPLETED':'PENDING' }
        </h3>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
