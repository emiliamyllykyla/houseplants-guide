import { useState, ChangeEvent } from "react";
import "../filter.css";
import { FaChevronDown } from "react-icons/fa";
import OutsideClickHandler from "./OutsideClickHandler";
import { FilterProps } from "../interfaces";

const Filter = ({ filters, setFilters }: FilterProps) => {
  const [visible, setVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.name;
    setFilters((prev) =>
      e.target.checked
        ? [...prev, filter]
        : prev.filter((item) => item !== filter)
    );
  };

  return (
    <OutsideClickHandler setVisible={setVisible}>
      <form className="filters">
        <div className="select-box" onClick={() => setVisible(!visible)}>
          <input type="text" value="Filters" readOnly />
          <span className="arrow">
            <FaChevronDown />
          </span>
        </div>
        {visible && (
          <div className="checkbox-container">
            <fieldset>
              <legend>Water</legend>
              <label className="filter">
                <input
                  type="checkbox"
                  id="waterLow"
                  name="waterLow"
                  checked={filters.includes("waterLow")}
                  onChange={handleChange}
                />
                Low
              </label>
              <label className="filter">
                <input
                  type="checkbox"
                  id="waterMedium"
                  name="waterMedium"
                  checked={filters.includes("waterMedium")}
                  onChange={handleChange}
                />
                Medium
              </label>
              <label className="filter">
                <input
                  type="checkbox"
                  id="waterHigh"
                  name="waterHigh"
                  checked={filters.includes("waterHigh")}
                  onChange={handleChange}
                />
                High
              </label>
            </fieldset>
            <fieldset>
              <legend>Light</legend>
              <label className="filter">
                <input
                  type="checkbox"
                  id="lightLow"
                  name="lightLow"
                  checked={filters.includes("lightLow")}
                  onChange={handleChange}
                />
                Shadow
              </label>
              <label className="filter">
                <input
                  type="checkbox"
                  id="lightMedium"
                  name="lightMedium"
                  checked={filters.includes("lightMedium")}
                  onChange={handleChange}
                />
                Medium
              </label>
              <label className="filter">
                <input
                  type="checkbox"
                  id="lightHigh"
                  name="lightHigh"
                  checked={filters.includes("lightHigh")}
                  onChange={handleChange}
                />
                Bright
              </label>
            </fieldset>
            <fieldset>
              <legend>Air</legend>
              <label className="filter">
                <input
                  type="checkbox"
                  id="airPurifying"
                  name="airPurifying"
                  checked={filters.includes("airPurifying")}
                  onChange={handleChange}
                />
                Air purifying
              </label>
            </fieldset>
          </div>
        )}
      </form>
    </OutsideClickHandler>
  );
};

export default Filter;
