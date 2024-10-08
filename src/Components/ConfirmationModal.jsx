import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      className="modal-content relative mx-auto my-auto bg-purple-200 rounded-lg shadow-lg w-11/12 sm:w-1/3 z-50 p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
    >
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Delete Confirmation</h3>
        <p className="mb-6">Are you sure you want to delete this employee?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-100 opacity-2 text-gray-800 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white appearance-none px-7 py-2 rounded outline-none focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-700"
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

