import React, { useCallback, useRef, useState } from "react";

const arr = [
  { id: 1, name: "стол" },
  { id: 2, name: "стол" },
  { id: 3, name: "стол" },
  { id: 4, name: "стол" },
];

const ComponentTable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState();
  const [id, setId] = useState(1);
  const elementRef = useRef();

  const onMouseDown = useCallback(
    (item) => {
      const onMouseMove = (event) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = elementRef.current;
        if (element && element.className === "api-table") {
          // element.style.position = 'relative';
          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
          // element.style.left = `${position.x}px`;
          // element.style.top = `${position.y}px`
        }
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },

    [position, setPosition]
  );

  return (
    <>
      {arr.map((item) => (
        <div
          onMouseDown={(e) => {
            setCurrent(e);
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
