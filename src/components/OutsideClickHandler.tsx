import { useEffect, useRef } from "react";
import { OutsideClickHandlerProps } from "../interfaces";
import { SetVisible } from "../types";

// Hook
const useOutsideClick = (
  ref: React.RefObject<HTMLFormElement>,
  setVisible: SetVisible
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  });
};

// Wrapper
const OutsideClickHandler = ({
  children,
  setVisible,
}: OutsideClickHandlerProps) => {
  const ref = useRef(null);
  useOutsideClick(ref, setVisible);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
