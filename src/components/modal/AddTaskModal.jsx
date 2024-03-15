/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Modal from "./modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/taskSlice";
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onCancel = () => {
    setIsOpen(false);
    reset();
  };
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <span className="flex flex-col gap-1 pb-3">
              <input
                type="text"
                {...register("title")}
                className="w-full rounded-md"
              />
            </span>

            <label htmlFor="deadline">Deadline</label>
            <span className="flex flex-col gap-1 pb-3">
              <input
                type="date"
                className="rounded-md"
                {...register("deadline")}
              />
            </span>
            <span className="flex flex-col gap-1 pb-3">
              <label htmlFor="assginTo">Assgin To</label>
              <select className="rounded-md" {...register("assginTo")}>
                <option defaultValue={"Al Riyad"} value="Al Riyad">
                  Al Riyad
                </option>
                <option value="Riyad">Riyad</option>
                <option value="Riyadxd">Riyadxd</option>
              </select>
            </span>

            <span className="flex flex-col gap-1 pb-3">
              <label htmlFor="assginTo">Priority</label>
              <select className="rounded-md" {...register("priority")}>
                <option defaultValue={"High"} value="high">
                  High
                </option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </span>
            <label htmlFor="description">Description</label>
            <span className="flex flex-col gap-1 pb-3">
              <textarea
                {...register("description")}
                className="rounded-md"
                rows="2"
              ></textarea>
            </span>

            <div className="mt-4 justify-end flex items-center gap-4">
              <button
                onClick={() => onCancel()}
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white  "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white  "
              >
                Submit
              </button>
            </div>
          </form>{" "}
        </div>
      </Modal>
    </>
  );
};

export default AddTaskModal;
