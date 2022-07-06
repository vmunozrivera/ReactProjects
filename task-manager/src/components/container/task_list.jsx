import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

function TaskListComponent() {
    const defaultTask = new Task("Example", "Default Desc", false, LEVELS.NORMAL);

    return (
        <div>
            <div>YOUR TASKS:</div>
            {/* TODO: Apply FOR loop to render list */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
