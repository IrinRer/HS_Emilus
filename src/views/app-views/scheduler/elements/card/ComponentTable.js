import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { schedulerTableAction } from "redux/actions/Scheduler";

const arr = [
  { id: 1, name: "стол" },
  { id: 2, name: "стол" },
  { id: 3, name: "стол" },
  { id: 4, name: "стол" },
];

const ComponentTable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef();
  const idRef = useRef();
  const dispatch = useDispatch();

  const onMouseDown = useCallback(
    (item) => {
      idRef.current = item.id;
      elementRef.current.style.position = "absolute";
      const onMouseMove = (event) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = elementRef.current;
        if (element && element.className === "api-table") {
          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        setPosition(position);
      };
      const onMouseUp = (event) => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (elementRef.current) {
          document.body
            .querySelector(".api-scheduler-board")
            .append(elementRef.current);
        }
        dispatch(
          schedulerTableAction({
            id: idRef.current,
            x: position.x,
            y: position.y,
          })
        );
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },

    [position, dispatch]
  );

  return (
    <>
      {arr.map((item) => (
        <div
          onMouseDown={(e) => {
            elementRef.current = e.target;
            onMouseDown(item);
          }}
          className="api-table"
          key={item.id}
          id={item.id}
        >
          {item.name}
        </div>
      ))}
    </>
  );
};

export default ComponentTable;
