import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
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
  };

  return (
    <div>
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
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "done" }))
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
