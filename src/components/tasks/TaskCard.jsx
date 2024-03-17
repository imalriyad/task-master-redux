<<<<<<< HEAD
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import {
  removeTask,
  updateStatus,
} from '../../redux/features/tasks/tasksSlice';
=======
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../redux/tasks/taskSlice";
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedStatus;
<<<<<<< HEAD

  if (task.status === 'pending') {
    updatedStatus = 'running';
  } else if (task.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
=======
  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
<<<<<<< HEAD
        className={`text-lg font-semibold mb-3 ${
          task.priority === 'high' ? 'text-red-500' : ' '
        } ${task.priority === 'medium' ? 'text-yellow-500' : ' '} ${
          task.priority === 'low' ? 'text-green-500' : ' '
=======
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
<<<<<<< HEAD
            title="Update Status"
=======
            title="Update Satus"
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
