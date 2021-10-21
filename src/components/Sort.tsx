import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import OutsideClickHandler from "./OutsideClickHandler";
import "../sort.css";

type SortProps = {
  setDesc: (desc: boolean) => void;
};

type SortOptions = "asc" | "desc";

const Sort = ({ setDesc }: SortProps) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<SortOptions>("asc");
  const displayValue =
    selected === "asc" ? "English name: A-Z" : "English name: Z-A";

  const handleClick = (selected: SortOptions) => {
    setDesc(selected === "desc");
    setSelected(selected);
    setVisible(false);
  };
  return (
    <OutsideClickHandler setVisible={setVisible}>
      <div className="sort">
        <label>Sort by: </label>
        <div className="custom-select" onClick={() => setVisible(!visible)}>
          <input type="text" value={displayValue} readOnly />
          <span className="arrow">
            <FaChevronDown />
          </span>
          {visible && (
            <div className="custom-select-options">
              <div
                className={`sort-option ${
                  selected === "asc" ? "selected" : ""
                }`}
                onClick={() => handleClick("asc")}
              >
                English name: A-Z
              </div>
              <div
                className={`sort-option ${
                  selected === "desc" ? "selected" : ""
                }`}
                onClick={() => handleClick("desc")}
              >
                English name: Z-A
              </div>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Sort;
