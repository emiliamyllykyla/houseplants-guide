import { useHistory } from "react-router-dom";
import { DeleteProps } from "../interfaces";
import { useAlert } from "../AlertContext";
import { useCallback } from "react";
import { SetAlertState } from "../types";
import { History } from "history";
import { houseplants } from "../firebase";

const makeHandleDelete = (
  id: string,
  setAlert: SetAlertState,
  history: History
) => {
  houseplants
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      setAlert({
        type: "success",
        message: "Document successfully deleted!",
      });
      history.push("/plants");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
      setAlert({
        type: "error",
        message: "Error removing document: " + error,
      });
    });
};

const Delete = ({ id }: DeleteProps) => {
  const history = useHistory();
  const { setAlert } = useAlert();

  const handleDelete = useCallback(
    () => makeHandleDelete(id, setAlert, history),
    [setAlert]
  );
  return (
    <button className="delete-btn" onClick={handleDelete}>
      Delete{" "}
    </button>
  );
};

export default Delete;
