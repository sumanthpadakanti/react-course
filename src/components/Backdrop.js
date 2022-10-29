function Backdrop(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return <div className="backdrop" onClick={cancelHandler} />;
}

export default Backdrop;
