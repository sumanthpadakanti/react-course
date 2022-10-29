import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModal] = useState(false);
  function deleteHandler() {
    setModal(true);
  }
  function modalHandler() {
    setModal(false);
  }
  return (
    <div className="card">
      <h3>{props.text}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={modalHandler} onConfirm={modalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={modalHandler} />}
    </div>
  );
}

export default Todo;
