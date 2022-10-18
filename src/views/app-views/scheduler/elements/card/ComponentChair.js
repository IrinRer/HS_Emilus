import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { schedulerChairAction } from "redux/actions/Scheduler";

const arr = [
  { id: 1, name: "стул" },
  { id: 2, name: "стул" },
  { id: 3, name: "стул" },
  { id: 4, name: "стул" },
  { id: 5, name: "стул" },
  { id: 6, name: "стул" },
  { id: 7, name: "стул" },
  { id: 8, name: "стул" },
  { id: 9, name: "стул" },
  { id: 10, name: "стул" },
];

const ComponentChair = () => {
  const [position] = useState({ x: 0, y: 0 });
  const elementRef = useRef();
  const idRef = useRef();
  const dispatch = useDispatch();

  const onMouseDown = useCallback(
    (item) => {
      idRef.current = item.id;
      const onMouseMove = (event) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = elementRef.current;
        if (element && element.className === "api-chair") {
          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        dispatch(
          schedulerChairAction({
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
          className="api-chair"
          key={item.id}
          id={item.id}
        >
          {item.name}
        </div>
      ))}
    </>
  );
};

export default ComponentChair;
