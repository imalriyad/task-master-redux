import Modal from "./Modal";

const DetailsModal = ({ isOpen, setIsOpen, selectedTask }) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={selectedTask?.title}>
        {selectedTask?.description}
      </Modal>
    </div>
  );
};

export default DetailsModal;
