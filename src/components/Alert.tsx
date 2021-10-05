import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { useAlert } from "../AlertContext";
import "../alert.css";

const Alert = () => {
  const { alert, setAlert, seen, setSeen } = useAlert();
  const nodeRef = useRef(null);

  if (alert === null) return null;

  return (
    <CSSTransition
      onEntered={() => setTimeout(() => setSeen(true), 4000)}
      onExited={() => setAlert(null)}
      in={!seen}
      appear={true}
      timeout={1000}
      classNames="fade"
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={`alert alert-${alert.type}`}>
        {alert.message}
      </div>
    </CSSTransition>
  );
};

export default (Alert);
