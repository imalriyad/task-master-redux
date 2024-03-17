import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
<<<<<<< HEAD
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import TaskDetailsModal from './TaskDetailsModal';
import { updateStatus, userTasks } from '../../redux/features/tasks/tasksSlice';

const MyTasks = () => {
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTasks(name));
  }, [dispatch, name, tasks]);

  const handleDetails = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
=======
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/tasks/taskSlice";
import DetailsModal from "../modal/DetailsModal";
import { useGetTodosQuery } from "../../redux/api/baseApi";

const MyTasks = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.userSlice.user);
  const { userSpacificTask, task } = useSelector((state) => state.tasksSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const { data: todos } = useGetTodosQuery();
  console.log(todos);
  
  useEffect(() => {
    dispatch(userTasks(name));
  }, [name, dispatch, task]);

  const handleModal = (item) => {
    setIsOpen(!isOpen);
    setSelectedTask(item);
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
  };

  return (
    <div>
<<<<<<< HEAD
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetails(item.id)}
=======
      <DetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedTask={selectedTask}
      ></DetailsModal>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpacificTask?.map((item) => (
          <div
            key={item?.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item?.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleModal(item)}
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
<<<<<<< HEAD
                  dispatch(updateStatus({ id: item.id, status: 'done' }))
=======
                  dispatch(updateStatus({ id: item.id, status: "done" }))
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
