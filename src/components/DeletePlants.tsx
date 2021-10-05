import { useState, useEffect, useCallback } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { houseplants } from "../firebase";
import { Data, SetAlertState } from "../types";
import { sort } from "../functions/functions";
import Alert from "./Alert";
import "../deletePlants.css";
import { useAlert } from "../AlertContext";

const makeDeleteItem = (id: string, setAlert: SetAlertState) => {
  houseplants
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      setAlert({
        type: "success",
        message: "Document successfully deleted!",
      });
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
      setAlert({
        type: "error",
        message: "Error removing document: " + error,
      });
    });
};
const DeletePlants = () => {
  const { setAlert } = useAlert();
  const [data, setData] = useState<Data | null>(null);

  useEffect(
    () =>
      houseplants.onSnapshot((snapshot) => {
        const sortedData = sort(snapshot.docs, "nameEnglish", false);
        setData(sortedData);
      }),
    []
  );

  const deleteItem = useCallback(
    (id) => makeDeleteItem(id, setAlert),
    [setAlert]
  );

  if (!data) {
    return (
      <div className="page">
        <h1>All Plants</h1>Loading data...
      </div>
    );
  }

  return (
    <>
      <Alert />
      <div className="page">
        <h1 className="heading">Delete plants</h1>
        <table className="delete-plants-table">
          <thead>
            <tr>
              <th>English name</th>
              <th>Scientific name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {data.map((doc) => {
              const plant = doc.data();
              return (
                <CSSTransition key={doc.id} timeout={500} classNames="fade">
                  <tr>
                    <td className="name">
                      {" "}
                      <Link key={doc.id} to={`/plants/${doc.id}`}>
                        {plant.nameEnglish}{" "}
                      </Link>
                    </td>
                    <td className="name scientific">{plant.nameScientific}</td>
                    <td className="actions">
                      <button
                        onClick={() => deleteItem(doc.id)}
                        className="delete-plants-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </table>
      </div>
    </>
  );
};

export default DeletePlants;
